import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch, query, getDocs
} from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAdzInaONAc1RbnbtqizS_1pYtD7QezH58",
    authDomain: "bookstore-db-8ad36.firebaseapp.com",
    projectId: "bookstore-db-8ad36",
    storageBucket: "bookstore-db-8ad36.appspot.com",
    messagingSenderId: "159212582417",
    appId: "1:159212582417:web:0f0c2ff476d3a5165f23b0",
    measurementId: "G-PHV6D12E86"
}
const firebaseApp = initializeApp(config);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocument = async (collectionKey, objectToAdd) => { //upload to firestore
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    objectToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    })
    await batch.commit();
    console.log('done');
}
export const addReviewsCollectionAndDocument = async (collectionKey, objectToAdd) => { //upload to firestore
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    objectToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.user);
        batch.set(docRef, object);
    })
    await batch.commit();

}

export const getCategoriesAndDocuments = async () => { //get from firestore
    const collectionRef = collection(db, 'categories');
    const queryData = query(collectionRef);
    const querySnapshot = await getDocs(queryData);
    const categoryList = querySnapshot.docs.reduce((accumulator, docSnapshot) => {
        const {title, items} = docSnapshot.data();
        accumulator[title.toLowerCase()] = items;
        return accumulator;
    }, {})
    return categoryList;
}
export const getReviewsFromDB = async () => { //get from firestore
    const collectionRef = collection(db, 'reviews ');
    const queryData = query(collectionRef);
    const querySnapshot = await getDocs(collection(db, "reviews"));

const reviewList = [];
    querySnapshot.forEach((doc) => {
        const singleReview = doc.data();
        reviewList.push(singleReview);
    });
    return reviewList;
}

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {displayName, email, emailVerified} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                emailVerified,
                createdAt,
                ...additionalInfo
            })
        } catch (e) {
            console.log('There is an error while adding data to database', e.message)
        }
    }
    return userDocRef;
}

export const createUserWithEmailAndPasswordCustom = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInWithEmailAndPasswordCustom = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}
export const signOutCustom = async () => await signOut(auth);

export const onAuthStateChangedCustom = (callback) => {
    onAuthStateChanged(auth, callback)
}

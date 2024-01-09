import {useState} from "react";
import "./analyser.scss"

const TextAnalyser = () => {
    const initialData = {
        chars: '',
        words: '',
        sentences: '',
        paragraphs: '',
        pronouns: ''
    }
    const [formText, setFormText] = useState();
    const [textData, getTextData] = useState({initialData})
    const getFormText = (e) => {
        const value = e.target.value;
        setFormText(value);

    }
    const analyseText = (e) => {
        e.preventDefault();
        const charactersNumber = formText.length;
        const wordsNumber = formText.split(' ').filter(word => word !== '').length;
        const sentencesNumber = formText.split(/[.?!]/g).filter(sentence => sentence !== '').length;
        const paragraphsNumber = formText.replace(/\n$/gm, '').split(/\n/).length;
        const pronounsNumberMatch = formText.match( /\b(I|you|he|she|we|they)\b/igm);
        const prNumber = pronounsNumberMatch !== null ? pronounsNumberMatch.length : 0;
        getTextData({
            ...textData,
            words: wordsNumber,
            chars: charactersNumber,
            sentences: sentencesNumber,
            paragraphs: paragraphsNumber,
            pronouns: prNumber
        })

    }
    return (
        <>
            <h2>Text analyser</h2>
            <div className="text-content">
                <div className="column">
                    <div className="title"><h4>Characters</h4></div>
                    <div className="value">{textData.chars}</div>
                </div>
                <div className="column">
                    <div className="title"><h4>Words</h4></div>
                    <div className="value">{textData.words}</div>
                </div>
                <div className="column">
                    <div className="title"><h4>Sentences</h4></div>
                    <div className="value">{textData.sentences}</div>
                </div>
                <div className="column">
                    <div className="title"><h4>Paragraphs</h4></div>
                    <div className="value">{textData.paragraphs}</div>
                </div>
                <div className="column">
                    <div className="title"><h4>Pronouns</h4></div>
                    <div className="value">{textData.pronouns}</div>
                </div>
            </div>
            <form onSubmit={analyseText} action="">
                <textarea onChange={getFormText} name="" id="" cols="30" rows="10"></textarea>
                <button type="submit" className='button full'>Analyse text!</button>
            </form>
        </>
    )
}
export default TextAnalyser;
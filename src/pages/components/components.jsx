import React from "react";
import Accordion from "../../components/acccordion/accordion";
import ProgressBar from "../../components/progress-bar/progress-bar.component";
import Tabs from "../../components/tabs/tabs.component";
import Stars from "../../components/stars/stars.component";
import Todo from "../../components/Todo list/todo-list";
import Gallery from "../../components/gallery/gallery.component";
import TextAnalyser from "../../components/text-analyser/analyser";
import Timer from "../../components/timer/timer";
import StopTimer from "../../components/stop-timer/stop-timer";
import TodoWithReducer from "../../components/Todo list/todo-list-useReducer";
import ReducerExplained from "../../components/reducer/reducer";

const ComponentsPage = () => {
    return (
        <div className="container">
            <div className="inner-container grid">
                <div className="col-1-2"><Accordion/></div>
                <div className="col-1-2"><Tabs /></div>
                <div className="col-1-2"><ProgressBar/></div>
                <div className="col-1-2"><Stars/></div>
                <div className="col-1-2"><Timer/></div>
                <div className="col-1-2"><StopTimer/></div>
                <div className="col-1-2"><Todo/></div>
                <div className="col-1-2"><TodoWithReducer/></div>
                <div className="col-1-2"><ReducerExplained/></div>

                <div className="col-1-2"><TextAnalyser/></div>
              </div>
            <div className="inner-container grid"><Gallery/></div>
        </div>
    )
}
export default ComponentsPage;
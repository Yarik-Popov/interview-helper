import React, { useRef } from 'react';
import Select from '../components/Select';
// import Select from 'react-select'
import CustomLink from '../components/CustomLink';
import { PATH_INTERVIEW } from '../constants/paths';
import "./SetupPage.css"

const QUESTION_QUANTITY_ID = "question-quantity";
const DEFAULT_NUMBER_OF_QUESTIONS = 10;

export default function SetupWindow(props: { questions: string[] }) {
    const jobRef = useRef(null);
    const quantityRef = useRef(null);

    function getData() {
        let jobName = "";
        let quantity = DEFAULT_NUMBER_OF_QUESTIONS;
        if (jobRef.current !== null) {
            jobName = (jobRef.current as HTMLInputElement).value;
            console.log(jobName);
            props.questions.push(jobName);
        }
        if (quantityRef.current !== null) {
            quantity = Number((quantityRef.current as HTMLInputElement).value);

            if (!Number.isInteger(quantity) || quantity < 1) {
                quantity = DEFAULT_NUMBER_OF_QUESTIONS;
            }

            console.log(quantity);
            props.questions.push(quantity.toString());
        }
        console.log(props.questions);
        return jobName !== "";
    }

    return (
        <>
        <form>
            <label htmlFor="job-name-desc">Job Name</label>
            <input ref={jobRef} type="text" id="job-name-desc" placeholder="Job Name"></input> <br></br>
            <label htmlFor={QUESTION_QUANTITY_ID}>Number of Questions</label> 
            <input ref={quantityRef} type="number" step="1" min="1" id={QUESTION_QUANTITY_ID}></input>
            <CustomLink path={PATH_INTERVIEW} field="Go to Interview" onClick={getData} />   
        </form>
        </>
    );
}

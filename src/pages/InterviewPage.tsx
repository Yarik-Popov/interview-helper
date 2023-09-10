import React, {useState, useEffect} from "react";
import "./InterviewPage.css";
import CustomLink from "../components/CustomLink";
import { PATH_SETUP } from "../constants/paths";
import {  useRecordWebcam } from 'react-record-webcam'
import { RecordWebcam, WebcamRenderProps } from 'react-record-webcam'



export default function InterviewPages(interviewProps: { questions: string[] }) {
    const [count, setCount] = useState(0);
    const recordWebcam = useRecordWebcam({ frameRate: 60, mimeType: "video/mp4" });
    
    // Starts recording on mount and stops recording on unmount
    useEffect(() => {
        console.log(recordWebcam.status);
        recordWebcam.open()
        console.log(recordWebcam.status);
        recordWebcam.start()
        console.log(recordWebcam.status);
        return () => {
            recordWebcam.stop()
            console.log(recordWebcam.status);
        }
    }, []);
    
    function validCount() {
        return count < interviewProps.questions.length - 1;
    }
    
    function onClick() {
        console.log(recordWebcam.status);
        console.log(interviewProps.questions);
        if (validCount()) {
            setCount(count + 1);
            return false;
        } else {
            interviewProps.questions.splice(0, interviewProps.questions.length);
            console.log(recordWebcam.status);
            recordWebcam.stop();
            console.log(recordWebcam.status);
            downloadVideo();
            return true;
        }
    }

    async function downloadVideo() {
        console.log(recordWebcam.status);
        recordWebcam.stop();
        console.log(recordWebcam.status);
        await recordWebcam.download();
        console.log(recordWebcam.status);
    }

    return (
        <>
            <h1>Interview</h1>
            {validCount() && <p> Question: {interviewProps.questions[count]}  </p> }{ validCount() && <button onClick={onClick}>Next</button>}
            {!validCount() && <CustomLink path={PATH_SETUP} field="Go to Setup" onClick={onClick} />}
            <button onClick={downloadVideo}>Download recording</button> 
            <video ref={recordWebcam.webcamRef} autoPlay muted />
        </>
    );
    // return (
    //     <>
    //     <RecordWebcam  render={(props: WebcamRenderProps) => {
    //         return (
    //         <div>
    //             <h1>Component render prop demo</h1>
    //             {validCount() && <p> Question: {interviewProps.questions[count]}  </p> }{ validCount() && <button onClick={onClick}>Next</button>}
    //             {!validCount() && <CustomLink path={PATH_SETUP} field="Go to Setup" onClick={onClick} />}
    //             <p>Camera status: {props.status}</p>
    //             <div>
    //             <button onClick={props.openCamera}>Open camera</button>
    //             <button onClick={props.retake}>Retake</button>
    //             <button onClick={props.start}>Start recording</button>
    //             <button onClick={props.stop}>Stop recording</button>
    //             <button onClick={props.download}>Download</button>
    //             </div>
    //         </div>
    //         );
    //   }} />
    //     </>
    // )
}
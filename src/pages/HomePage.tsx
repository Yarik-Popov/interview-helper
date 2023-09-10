import React from "react";
import "./HomePage.css";
import { PATH_SETUP } from "../constants/paths";
import CustomLink from "../components/CustomLink";

export default function Home() {

    function handleButtonClick() {
        console.log("clicked");
        return true;
    }

    return (
        <>
            <CustomLink path={PATH_SETUP} field="Go to Setup" onClick={handleButtonClick} />
        </>
    );
}
import { useNavigate } from 'react-router-dom';
import React from 'react';

interface CustomLinkProps {
    path: string;
    field: string;
    onClick: () => void;
}
export default function CustomLink(props: CustomLinkProps) {
    const navigate = useNavigate();

    function goTo() {
        if(props.onClick !== undefined){
            props.onClick();
        }
        navigate(props.path);
    }

    return (
        <button onClick={goTo}>{props.field}</button>
    );
}
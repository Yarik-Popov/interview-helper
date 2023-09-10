import { useNavigate } from 'react-router-dom';
import React from 'react';

interface CustomLinkProps {
    path: string;
    field: string;
    onClick: () => boolean;
}
export default function CustomLink(props: CustomLinkProps) {
    const navigate = useNavigate();

    function goTo() {
        if(props.onClick !== undefined){
            if(props.onClick())
                navigate(props.path);
        }
    }

    return (
        <button onClick={goTo}>{props.field}</button>
    );
}
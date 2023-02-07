import { useState } from "react";
import "./Box.css"


interface BoxProps {
    value: string | null;
    onSquareClick: () => void;
}

function Box({ value, onSquareClick }: BoxProps) {

    return (
        <button type="button" className="box" onClick={onSquareClick}>
            {value}
        </button>
    )
};

export default Box;
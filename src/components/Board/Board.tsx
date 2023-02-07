import { useState } from "react"
import Box from "../Box/Box"
import "./Board.css"

function Board() {

    const [boxes, setBoxes] = useState<Array<string | null>>(Array(9).fill(null));
    const [nextMove, setNextMove] = useState<string>("X");
    const winner = calculateWinner(boxes);
    let status;

    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (nextMove);
    }

    function handleBoxClick(index: number) {
        if (boxes[index] || calculateWinner(boxes)) {
            return
        };
        updateBoard(index);
    };

    function updateBoard(index: number) {
        const nextBoxes = boxes.slice();
        nextBoxes[index] = nextMove;
        setBoxes(nextBoxes);
        determineNextMove();
    };

    function resetBoard() {
        setBoxes(Array(9).fill(null));
        setNextMove("X");
    };

    function determineNextMove() {
        if (nextMove === "X") {
            setNextMove("O")
        }
        else {
            setNextMove("X")
        };
    };

    return (
        <div>
            <div className="status">
                {status}
                <button type="button" onClick={resetBoard}>Restart</button>
            </div>
            <div className="board">

                <div className="board-row">
                    <Box value={boxes[0]} onSquareClick={() => handleBoxClick(0)} />
                    <Box value={boxes[1]} onSquareClick={() => handleBoxClick(1)} />
                    <Box value={boxes[2]} onSquareClick={() => handleBoxClick(2)} />
                </div>
                <div className="board-row">
                    <Box value={boxes[3]} onSquareClick={() => handleBoxClick(3)} />
                    <Box value={boxes[4]} onSquareClick={() => handleBoxClick(4)} />
                    <Box value={boxes[5]} onSquareClick={() => handleBoxClick(5)} />
                </div>
                <div className="board-row">
                    <Box value={boxes[6]} onSquareClick={() => handleBoxClick(6)} />
                    <Box value={boxes[7]} onSquareClick={() => handleBoxClick(7)} />
                    <Box value={boxes[8]} onSquareClick={() => handleBoxClick(8)} />
                </div>
            </div>
        </div>

    )
}

export default Board;

function calculateWinner(boxes: Array<string | null>) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
            return boxes[a];
        }
    }
    return null;
}
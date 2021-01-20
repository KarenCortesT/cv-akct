import React, {useState} from 'react';
import {notification} from "antd";

import "./Gato.scss";

function Square(props){
    
    return(
        <button  className="square" onClick={props.onClick}>
            {props.value}  
        </button>
    );
}

function calculateWinner(squares) {
    /*Show all of the winning combinations ("lines") */
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for(let line of lines){
        const [a,b,c] = line;
        if(
            squares[a] &&
            squares[a] === squares[b] &&
            squares [a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
}



function Board (){
    const initialSquares = Array(9).fill(null);
    const [squares, setSquares] = useState(initialSquares);
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = i => {
        const newSquares = [...squares];
        console.log(newSquares);
        const winnerDeclared = Boolean(calculateWinner (newSquares));
        
        const squareAlreadyFilled = Boolean(newSquares[i]);
        if(winnerDeclared || squareAlreadyFilled) return;

        newSquares[i] = xIsNext ? 'X' :'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    }
    const renderSquare = i => {
        return(
            <Square
                value = {squares[i]}
                onClick ={() => handleClick(i)}
            />
        );
    };

    const winner = calculateWinner(squares);
    const status = winner ? (`Winner :  ${winner}`) 
    :( `Next player: ${xIsNext ? 'X': 'O'} `);
    console.log(status, winner);
    return(
        <div className="gato" >
            <div className= "gato__status"><h3>{status}</h3></div>
            <div className="gato__board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="gato__board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="gato__board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            
        </div>

    );
   
}

export default function Gato(){
    const initialHistory =[
        { squares : Array(9).fill(null) }
    ];
    const [history, setHistory ] = useState(initialHistory);
    const [xIsNext, setXIsNext] = useState(true);
    return(
        <div className="game">
            <div className="game__board">               
                <Board />
            </div>
        </div>
    );
}
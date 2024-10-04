import React from 'react'
import style from './play.module.css'
import {useState} from 'react';

const prev = 0;
const Play = () => {

    const [randomNum, setRandomNum] = useState();
    const [num, setNum] = useState();
    const [score, setScore] = useState(0);

    const numArr = [1,2,3,4,5,6];

    const generateRandomNum = (min, max) =>{
  
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    const handlePlay = () =>{

        setRandomNum(generateRandomNum(1,6));

        if(randomNum === num){
            setScore(prev + num)
        } else {
            setScore(prev-2)
        }

    }
   
  return (
    <main>
        <div className={style.dicNumbers}>
            <div className={style.playScore}>
                <span>{score}</span>
                <p>Total Scores</p>
            </div>
            <div className={style.playNum}>
                <ul>
                {numArr.map((val, i) =>(
                    <li onClick={()=>setNum(val, i)} className={i}>{val}</li>
                ) )}
                   
                </ul>
                <p>Select Number</p>
            </div>
            
        </div>
        <div className={style.diceSection}>
            <img src={`./images/dice_${randomNum}.png`} alt="" />
            <p>Click below to roll</p>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePlay}>Reset Score</button>
            <button>Show Rules</button>
        </div>
    </main>
  )
}

export default Play;
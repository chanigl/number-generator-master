import {useState} from 'react';

const isEven = (number) => {
    return number % 2 == 0;
}

const isPrime = (number) => {
    for (let i = 2; i <= number; i++) {
        if (i != number && number % i == 0)
            return false;
    }
    if (number == 0 || number == 1)
        return false;
    return true;
}


const classNameSquare = (number) => {
    let className = 'square';
    if (isPrime(number))
        className += ' prime';
    else {
        if (isEven(number))
            className += ' even';
        else
            className += ' odd';
    }
    return className;
}

const Square = ({ number }) => {
    let [newNumber,randomNumber]= useState(number)
    const change=()=>{
        randomNumber(newNumber+=Math.floor(Math.random()*11))
    }
    return (
        <button className={classNameSquare(newNumber)} onClick={change}>
            <h1 class="number" >{newNumber}</h1>
        </button>
    );
};
/*
const Square = ({ number }) => {
    const [newNumber,randomNumber]= useState(number)
    const change=()=>{
        randomNumber(number=Math.floor(Math.random()*11)+newNumber)
    }
    return (
        <button className={classNameSquare(newNumber)} onClick={change}>
            <h1 class="number" >{newNumber}</h1>
        </button>
    );
};
*/
export default Square;

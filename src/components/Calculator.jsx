import React, { useState } from 'react'
import { MainContainer, CalculatorSection, DisplaySection } from './style'


export function Calculator() {
    const [display, setDisplay] = useState(0)
    const [operator, setOperator] = useState('')
    const [newOperator, setNewOperator] = useState('')
    const [oldNumber, setOldNumber] = useState(0)


    const handleAllClear = () => {
        setDisplay(0)
        setOperator('')
        setNewOperator('')
        setOldNumber(0)
    }

    const handleDisplay = e => {
        if (display === 0 && e.target.value === 0 || display === 0 && e.target.value === '.') {
            return setDisplay(0)
        } else if ((display === 0 && e.target.value !== 0 && e.target.value !== '.') || (operator !== '')) {
            setOperator('')
            return setDisplay(e.target.value)
        } else {
            return setDisplay((display + e.target.value))
        }
    }

    const handleSignal = () => {
        if (display > 0) {
            setDisplay(-display)
        } else {
            setDisplay(Math.abs(display))
        }
    }

    const handlePercentage = () => {
        setDisplay(display / 100)
    }

    const handleOperator = (e) => {
        let math
        if (newOperator === '') {
            setOperator(e.target.value)
            setNewOperator(e.target.value)
            return setOldNumber(display)
        } else {
            if (newOperator === 'x') {
                math = parseFloat(oldNumber) * parseFloat(display)                
            } else if (newOperator === '/') {
                math = parseFloat(oldNumber) / parseFloat(display)
            } else if (newOperator === '+') {
                math = parseFloat(oldNumber) + parseFloat(display)
            } else if (newOperator === '-') {
                math = parseFloat(oldNumber) - parseFloat(display)
            }  
            setOperator(e.target.value)
            setNewOperator(e.target.value)
            setOldNumber(math)
            return setDisplay(math)
        }
    }

    const result = () => {
        let math
        if (newOperator === '') {
            math = 0
        } else if (newOperator === 'x') {
            math = parseFloat(oldNumber) * parseFloat(display)
        } else if (newOperator === '/') {
            math = parseFloat(oldNumber) / parseFloat(display)
        } else if (newOperator === '+') {
            math = parseFloat(oldNumber) + parseFloat(display)
        } else if (newOperator === '-') {
            math = parseFloat(oldNumber) - parseFloat(display)
        }
        setNewOperator('')

        const isDecimal = math.toString().split(".")
        if (isDecimal.length > 1) {
            isDecimal[1].length > 6? math = math.toFixed(6) : math = math
        }
        
        return setDisplay(math)
    }

    return (
        <MainContainer>
            <DisplaySection>{display}</DisplaySection>
            <CalculatorSection>
                <button onClick={handleAllClear}>AC</button>
                <button onClick={handleSignal}>+/-</button>
                <button onClick={handlePercentage}>%</button>
                <button value={'/'} onClick={e => handleOperator(e)}>&divide;</button>
                <button value={7} onClick={e => handleDisplay(e)}>7</button>
                <button value={8} onClick={e => handleDisplay(e)}>8</button>
                <button value={9} onClick={e => handleDisplay(e)}>9</button>
                <button value={'x'} onClick={e => handleOperator(e)}>x</button>
                <button value={4} onClick={e => handleDisplay(e)}>4</button>
                <button value={5} onClick={e => handleDisplay(e)}>5</button>
                <button value={6} onClick={e => handleDisplay(e)}>6</button>
                <button value={'-'} onClick={e => handleOperator(e)}>-</button>
                <button value={1} onClick={e => handleDisplay(e)}>1</button>
                <button value={2} onClick={e => handleDisplay(e)}>2</button>
                <button value={3} onClick={e => handleDisplay(e)}>3</button>
                <button value={'+'} onClick={e => handleOperator(e)}>+</button>
                <button value={0} onClick={e => handleDisplay(e)}>0</button>
                <button value={'.'} onClick={e => handleDisplay(e)}>,</button>
                <button onClick={result}>=</button>
            </CalculatorSection>
        </MainContainer>
    )
}
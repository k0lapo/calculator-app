import React, { useState, useEffect } from 'react';
import Display from './Display';
import './App.css';

const Calculator = () => {
    const [value, setValue] = useState('');
    const [calculatorStarted, setCalculatorStarted] = useState(false);
    const handleToggleSign = () => {
        setValue(value.startsWith('-') ? value.slice(1) : '-' + value);
      };
      

    useEffect(() => {
        const displayInput = document.querySelector('.display input');
        if (value.length > 6) {
            displayInput.classList.add('smaller-font');
        } else {
            displayInput.classList.remove('smaller-font');
        }

        // Check if the calculator has started working
        if (value !== '') {
            setCalculatorStarted(true);
        }
    }, [value]);

    const handleButtonClick = (e) => {
        const buttonValue = e.target.value;
    
        if (buttonValue === '=') {
          // Evaluate the expression
          const expression = value.replace(/x/g, '*').replace(/%/g, '*0.01'); // Replace "x" with "*" and "%" with "/100*"
          const result = eval(expression);
          // Round the result to 2 decimal places
          const roundedResult = parseFloat((Math.round(result * 100) / 100).toFixed(2));
          // Update the value state with the rounded result
          setValue(roundedResult.toString());
        } else if (buttonValue === 'AC') {
          setValue('');
          setCalculatorStarted(false); // Reset the calculator started flag
        } else if (buttonValue === 'DE') {
          setValue(value.slice(0, -1));
        } else if (buttonValue === 'x' || buttonValue === '/' || buttonValue === '+' || buttonValue === '-') {
          // Add the math operator to the current value
          setValue(value + buttonValue);
        } else if (buttonValue === '%') {
          // Calculate the percentage immediately
          const newValue = parseFloat(value) * 0.01;
          setValue(newValue.toFixed(2)); // Round the percentage value to 2 decimal places
        } else if (buttonValue === 'C') {
          setValue('');
          setCalculatorStarted(false); // Reset the calculator started flag
        } else  {
            setValue(value + buttonValue);
        }
    };
    
  
    return (
        <div className="calculator">
        <form action="">
          <Display value={value} />
          <div>
            <input type="button" value={calculatorStarted ? 'C' : 'AC'} onClick={handleButtonClick} className='tops' />
            <input type="button" value="+/-" onClick={handleToggleSign} className='tops' />
            <input type="button" value="%" onClick={handleButtonClick} className='tops' />
            <input type="button" value="/" onClick={handleButtonClick} className='special' />
          </div>
          <div>
            <input type="button" value="7" onClick={handleButtonClick} />
            <input type="button" value="8" onClick={handleButtonClick} />
            <input type="button" value="9" onClick={handleButtonClick} />
            <input type="button" value="x" onClick={handleButtonClick} className='special' />
          </div>
          <div>
            <input type="button" value="4" onClick={handleButtonClick} />
            <input type="button" value="5" onClick={handleButtonClick} />
            <input type="button" value="6" onClick={handleButtonClick} />
            <input type="button" value="-" onClick={handleButtonClick} className='special' />
          </div>
          <div>
            <input type="button" value="1" onClick={handleButtonClick} />
            <input type="button" value="2" onClick={handleButtonClick} />
            <input type="button" value="3" onClick={handleButtonClick} />
            <input type="button" value="+" onClick={handleButtonClick} className='special' />
          </div>
          <div>
            <input type="button" value="0" onClick={handleButtonClick} className="equal" />
            <input type="button" value="." onClick={handleButtonClick} />
            <input type="button" value="=" onClick={handleButtonClick} className='special' />
          </div>
        </form>
      </div>
    );
};

export default Calculator;

import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const appendToInput = (val) =>{
    setInput(prev => prev+val);
  }

  const calculateResult = () => {
    
      if(input==='')
        setResult("Error");
      else{
        try {
        const result = eval(input); 
        if (isNaN(result)) {
            setResult("NaN");
        } else if (result === Infinity) {
            setResult("Infinity");
        } else {
            setResult(result);
        }
    } catch (error) {
        setResult("Error");
    }
  }
};

  const clearInput =()=>{
    setInput('');
    setResult('');
  }

  return (
    <>
      <input type="text" value={input} />

      {result!==null ? (<p>{result}</p>) : ''}

      <div className='buttons'>
      <button onClick={() => appendToInput("7")}>7</button>
        <button onClick={() => appendToInput("8")}>8</button>
        <button onClick={() => appendToInput("9")}>9</button>
        <button onClick={() => appendToInput("+")}>+</button>

        <button onClick={() => appendToInput("4")}>4</button>
        <button onClick={() => appendToInput("5")}>5</button>
        <button onClick={() => appendToInput("6")}>6</button>
        <button onClick={() => appendToInput("-")}>-</button>

        <button onClick={() => appendToInput("1")}>1</button>
        <button onClick={() => appendToInput("2")}>2</button>
        <button onClick={() => appendToInput("3")}>3</button>
        <button onClick={() => appendToInput("*")}>*</button>

        <button onClick={() => appendToInput("0")}>0</button>
        <button onClick={clearInput}>C</button>
        <button className="equal-button" onClick={calculateResult}>
          =
        </button>
        <button onClick={() => appendToInput("/")}>/</button>
      </div>
    </>
  );
}

export default App;

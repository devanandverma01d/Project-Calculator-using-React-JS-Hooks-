//1. Iport area
import { useState } from 'react';
import './App.css';
//2. Function definition area
function App() {
  //2.1 Hooks Area
  const[result,setResult]=useState('');


  //2.2function definition
  let handleClick=(e)=>{
    setResult(result.concat(e.target.name))
    console.log(e.target);
    console.log(e.target.name);
  }

  let click=()=>{
    setResult('')
  }

  let deleteNumber=()=>{
    setResult(result.slice(0,-1))
  } 
  let calculate=()=>{
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult("Syntax Error")
    }
    
  }
  //3. Return statement
  return (
    <div className="container">
      <form>
         <input className='current-operand output' type="text" defaultValue={result}  />
      </form>
      <div className="buttons">
        <button className='ac span-two' onClick={click}>AC</button>
        <button onClick={deleteNumber}>DEL</button>

        <button name='/' onClick={handleClick}>&divide;</button>
        <button name='7' onClick={handleClick}>7</button>
        <button name='8' onClick={handleClick}>8</button>
        <button name='9' onClick={handleClick}>9</button>
        <button name='*' onClick={handleClick}>&times;</button>
        <button name='4' onClick={handleClick}>4</button>
        <button name='5' onClick={handleClick}>5</button>
        <button name='6' onClick={handleClick}>6</button>
        <button name='-' onClick={handleClick}>-</button>
        <button name='1' onClick={handleClick}>1</button>
        <button name='2' onClick={handleClick}>2</button>
        <button name='3' onClick={handleClick}>3</button>
        <button name='+' onClick={handleClick}>+</button>
        <button name='0' onClick={handleClick}>0</button>
        <button name='.' onClick={handleClick}>.</button>
        <button className='span-two' onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App; 

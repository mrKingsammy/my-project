import React, {useState} from 'react'
import './App.css'




export default function CalcBuild(){
  const [currentInput, setCurrentInput] = useState('');
  const [result, setResult] = useState('');

  // Function to handle digit and operator clicks
  const handleButtonClick = (value) => {
    if (value === '=') {
      // Perform calculation and update the result
      try {
        const calculatedResult = eval(currentInput); // Using eval for simplicity; consider a safer evaluation method
        setResult(calculatedResult);
        setCurrentInput('');
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      // Clear input and result
      setCurrentInput('');
      setResult('');
    } else {
      // Update the current input with the button value
      setCurrentInput(currentInput + value);
    }
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-1 bg-black m-20 rounded-lg w-100 p-2">

        <button class="text-white bg-[#616161] rounded-lg p-2 font-bold hover:bg-[#5dcc89]" onClick={() => handleButtonClick('C')} >C</button>
          <button class="text-white bg-[#616161] rounded-lg font-bold hover:bg-[#5dcc89]" onClick={() => handleButtonClick('(')}  >(</button>
          <button class="text-white bg-[#616161] rounded-lg font-bold hover:bg-[#5dcc89]" onClick={() => handleButtonClick(')')} >)</button>
          <button class="text-white bg-[#077634] rounded-lg font-bold hover:bg-[#5dcc89]"  onClick={() => handleButtonClick('*')}>*</button>
          <button class="text-white bg-[#303136] rounded-lg p-2 text-[#02a543] font-bold hover:bg-[#616161]" onClick={() => handleButtonClick('7')} >7</button>
          <button class="text-white bg-[#303136] rounded-lg font-bold text-[#02a543] hover:bg-[#616161] " onClick={() => handleButtonClick('8')}>8</button>
          <button class="text-white bg-[#303136] rounded-lg font-bold text-[#02a543] hover:bg-[#616161]" onClick={() => handleButtonClick('9')}>9</button>
          <button class="text-white bg-[#077634] rounded-lg font-bold hover:bg-[#5dcc89]" onClick={() => handleButtonClick('-')}>-</button>
          <button class="text-white bg-[#303136] rounded-lg p-2 font-bold text-[#02a543] hover:bg-[#616161]" onClick={() => handleButtonClick('4')}>4</button>
          <button class="text-white bg-[#303136] rounded-lg font-bold text-[#02a543] hover:bg-[#616161]" onClick={() => handleButtonClick('5')}>5</button>
          <button class="text-white bg-[#303136] rounded-lg font-bold text-[#02a543] hover:bg-[#616161]" onClick={() => handleButtonClick('5')}>6</button>
          <button class="text-white bg-[#077634] rounded-lg font-bold hover:bg-[#5dcc89]" onClick={() => handleButtonClick('+')}>+</button>
          <button class="text-white bg-[#303136] rounded-lg p-2 font-bold text-[#02a543] hover:bg-[#616161]" onClick={() => handleButtonClick('1')}>1</button>
          <button class="text-white bg-[#303136] rounded-lg font-bold text-[#02a543] hover:bg-[#616161]" onClick={() => handleButtonClick('2')}>2</button>
          <button class="text-white bg-[#303136] rounded-lg font-bold text-[#02a543] hover:bg-[#616161]" onClick={() => handleButtonClick('3')}>3</button>
          <button class="text-white bg-[#077634] rounded-lg font-bold hover:bg-[#5dcc89]" onClick={() => handleButtonClick('/')} >/</button>
          <button class="text-white bg-[#303136] rounded-lg p-2 font-bold text-[#02a543] hover:bg-[#616161]" onClick={() => handleButtonClick('0')}>0</button>
          <button class="text-white bg-[#303136] rounded-lg font-bold text-[#02a543] hover:bg-[#616161]" onClick={() => handleButtonClick('.')}>.</button>
          <button class="text-white bg-[#303136] rounded-lg font-bold text-[#02a543] hover:bg-[#616161]" onClick={() => handleButtonClick('%')}>%</button>
          <button class="text-white bg-[#077634] rounded-lg font-bold hover:bg-[#5dcc89]" onClick={() => handleButtonClick('=')}>=</button>
      </div>

      <div class="bg-white p-5 text-center">
         {result || currentInput}
      </div>

      <div class="font-bold text-center m-8">
        Built/Designed  By Kingsamuel Chinweikpe Nwachukwu..
      </div>
    </>
  );
}

import './App.css';

function App() {

  let information = {
    operation: '',
    firstNumber: '',
    secondNumber: '',
    output: ''
};

let numberArr = ['']

let secondTerm = document.querySelector('.number');

function calculate() {
    let displayOutput = document.querySelector('.display');
    //console.log(displayOutput);
    if (information.operation === '') {
        alert('Pick an Operation! \nAnd Start Over!')
        information.firstNumber = '';
        information.secondNumber = '';
        displayOutput.innerText = '';
    }

    if (information.operation === '/') {
        information.output = parseInt(information.firstNumber) / parseInt(information.secondNumber);
        console.log(information.output);
        console.log(typeof information.output)
    } else if(information.operation === 'X') {
        information.output = parseInt(information.firstNumber) * parseInt(information.secondNumber);
    } else if(information.operation === '+') {
        information.output = parseInt(information.firstNumber) + parseInt(information.secondNumber);
    } else if(information.operation === '-') {
        information.output = parseInt(information.firstNumber) - parseInt(information.secondNumber);
    }
    displayOutput.value = information.output.toString();
    numberArr[0] = '';
    information.firstNumber = '';
    information.secondNumber = '';
    information.operation = '';
    information.output = '';
}

function setNumbers(number) {
    let displayOutput = document.querySelector('.display');

    if (information.operation === '') {
        numberArr[0] += number.toString();
        information.firstNumber = numberArr[0];
        displayOutput.value = numberArr[0];
    } else if (information.operation != '' && information.secondNumber === '') {
        console.log('hello');
        numberArr[0] = '';
        displayOutput.value = '';
    } 

    if (information.firstNumber != '' && information.operation != '') {
        console.log('hello2');
        numberArr[0] += number.toString();
        information.secondNumber = numberArr[0];
        displayOutput.value = numberArr[0];
    }

}

function setOperation(operationToDo) {
    if (information.firstNumber === '') {
        alert('Please Click a Number First');
    } else {
        information.operation = operationToDo;
    } 
}

function clearDisplay() {
    let displayOutput = document.querySelector('.display');
    // console.log(displayOutput.innerText);
    // console.log(information.firstNumber);
    // console.log(information.secondNumber);
    if (information.secondNumber === '' && information.firstNumber != '') {
        information.firstNumber = '';
    } else if (information.firstNumber === '' && information.secondNumber != ''){
        information.secondNumber = '';
    } else {
        information.firstNumber = '';
        information.secondNumber = '';
        displayOutput.value = '';
    }
}

  return (
    <div className="App">
      <input placeholder="" class="display" readonly></input>
        <br></br>
        <button class="number" onClick={() => setNumbers(7)}> 7 </button>
        <button class="number" onClick={() => setNumbers(8)}> 8 </button>
        <button class="number" onClick={() => setNumbers(9)}> 9 </button>
        <button class="operation" onClick={() => setOperation('/')}> / </button>
        <br></br>
        <button class="number" onClick={() => setNumbers(4)}> 4 </button>
        <button class="number" onClick={() => setNumbers(5)}> 5 </button>
        <button class="number" onClick={() => setNumbers(6)}> 6 </button>
        <button class="operation" onClick={() => setOperation('X')}> X </button>
        <br></br>
        <button class="number" onClick={() => setNumbers(1)}> 1 </button>
        <button class="number" onClick={() => setNumbers(2)}> 2 </button>
        <button class="number" onClick={() => setNumbers(3)}> 3 </button>
        <button class="operation" onClick={() => setOperation('+')}> + </button>
        <br></br>
        <button class="number" onClick={() => setNumbers(0)}> 0 </button>
        <button class="operation" onClick={clearDisplay}> C </button>
        <button class="operation" onClick={calculate}> = </button>
        <button class="operation" onClick={() => setOperation('-')}> - </button>
    </div>
  );
}

export default App;
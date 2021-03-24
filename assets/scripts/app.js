const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculate(operations){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  if(operations==='ADD'){
    currentResult += enteredNumber;
    mathOperator = '+';
  }else if(operations === 'SUBSTRACT'){
    currentResult -= enteredNumber;
    mathOperator = '-';
  }else if(operations === 'MULTIPLY'){
    currentResult *= enteredNumber;
    mathOperator = '*';
  }else if(operations === 'DIVIDE'){
    currentResult /= enteredNumber;
    mathOperator = '/';
  }else{
    currentResult **= enteredNumber;
    mathOperator = '**';
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(operations, initialResult, enteredNumber, currentResult);
}

 
addBtn.addEventListener('click',calculate.bind(this,'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this,'SUBSTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this,'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this,'DIVIDE'));
exponBtn.addEventListener('click',calculate.bind(this,'EXPON'));

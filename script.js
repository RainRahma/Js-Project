let firstNumber = 45;
let secondNumber = 76;
const endResults = firstNumber * secondNumber
showMessage("This is what you get " + endResults);

const results = document.querySelector("#results");

function calculatingMult(){
    for ( multi = 1; multi < 20; multi++){
        const newResults = '${multi} x {multi} = {multi * multi}';
        results.textContent += newResults
    }
    results.textContent += 'Finish!'
}
const calculateBtn = document.querySelector('#calculalte');
const clearBtn = document.querySelector('#clear');

calculateBtn.addEventListener('click', calculatingMult);
clearBtn.addEventListener('click', () => results.textContent = '');
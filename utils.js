//showing message

function showMessage(message){
  document.getElementById('message').textContent = message;
}
var cats = ["Jong", "Yacht", "Ben", "Ocean", "long"]

for (var cat of cats){
    if (cat == "Yacht"){
        console.log("Hello " + cat + " how the fuck did you make it here?")
    } else{
        console.log("I am sorry, Your dog is not with us!")
    }
}
const results = document.querySelector('#results');

function calculate() {
  for (
    let multTime = 1; 
        multTime < 20;
        multTime++
        ) {
    const newResult = `${multTime} x ${multTime} = ${multTime * multTime}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += '\nFinished!';
}

const calculateBtn = document.querySelector('#calculate');
const clearBtn = document.querySelector('#clear');

calculateBtn.addEventListener('click', calculate);
clearBtn.addEventListener('click', () => results.textContent = '');
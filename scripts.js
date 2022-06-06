let count = true;
let numbers = [];
let acts = [];
let num = 0;
let result = document.getElementById('result');
let clockFace = document.getElementById('face');
clockFace.addEventListener('click', function (event) {
    if (event.target.value !== undefined) {
        if (!count) {
            count = true;
            result.textContent = "";
            num = 0;
        }
        num += event.target.textContent;
        result.textContent += event.target.textContent;
    }
});
let action = document.getElementById('action');
let act = ['*', '+', '-', '/', '=']
action.addEventListener('click', function (event) {
    if (!count) {
        count = true;
    }
    if (event.target.value !== undefined && !act.includes(result.innerText.toString()[result.innerText.length - 1]) && result.innerText !== '') {
        result.textContent += event.target.textContent;
        numbers.push(+num);
        acts.push(event.target.textContent);
        num = 0;
    };
    if (event.target.id === 'equal') {


        for (let i = 0; i < acts.length; i++) {
            if (acts[i] === '*') {
                acts.splice(i, 1);
                numbers.splice(i, 2, numbers[i] * numbers[i+1]);
                 i--;
            }
            if (acts[i] === '/') {
                console.log(numbers[i] / numbers[i+1])
                acts.splice(i, 1);
                numbers.splice(i, 2, numbers[i] / numbers[i+1]);
                 i--;
            }
        }

        for (let i = 0; i < acts.length; i++) {
            if (acts[i] === '+') {
                acts.splice(i, 1);
                numbers.splice(i, 2, numbers[i] + numbers[i+1]);
                 i--;
            }
            if (acts[i] === '-') {
                acts.splice(i, 1);
                numbers.splice(i, 2, numbers[i] - numbers[i+1]);
                 i--;
            }
        }

        result.textContent = numbers;
        count = false;
        numbers = [];
        acts = [];
        num = result.textContent;
    }
});
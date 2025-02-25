document.getElementById('one').addEventListener('click', one);
document.getElementById('two').addEventListener('click', two);
document.getElementById('three').addEventListener('click', three);
document.getElementById('four').addEventListener('click', four);
document.getElementById('five').addEventListener('click', five);
document.getElementById('six').addEventListener('click', six);
document.getElementById('seven').addEventListener('click', seven);
document.getElementById('eight').addEventListener('click', eight);
document.getElementById('nine').addEventListener('click', nine);
document.getElementById('zero').addEventListener('click', zero);

document.getElementById('del').addEventListener('click', del);
document.getElementById('plus').addEventListener('click', plus);
document.getElementById('minus').addEventListener('click', minus);
document.getElementById('multiply').addEventListener('click', multiply);
document.getElementById('divide').addEventListener('click', divide);
document.getElementById('dot').addEventListener('click', dot);
document.getElementById('equals').addEventListener('click', equals);
document.getElementById('reset').addEventListener('click', reset);

const sliderBTN = document.getElementById('slider');
sliderBTN.addEventListener('click', slide);
let numClicks = 0;

const displayBox = document.getElementById('display');

const clickSound = new Audio('mouseClick.mp3');

let arr = new Array();

function one(){
    arr.push(1);
    display();
    clickSound.play();
}

function two(){
    arr.push(2);
    display();
    clickSound.play();
}

function three(){
    arr.push(3);
    display();
    clickSound.play();
}

function four(){
    arr.push(4);
    display();
    clickSound.play();
}

function five(){
    arr.push(5);
    display();
    clickSound.play();
}

function six(){
    arr.push(6);
    display();
    clickSound.play();
}

function seven(){
    arr.push(7);
    display();
    clickSound.play();
}

function eight(){
    arr.push(8);
    display();
    clickSound.play();
}

function nine(){
    arr.push(9);
    display();
    clickSound.play();
}

function zero(){
    arr.push(0);
    display();
    clickSound.play();
}

function plus(){
    arr.push(' ');
    arr.push('+');
    arr.push(' ');
    display();
    clickSound.play();
}

function minus(){
    arr.push(' ');
    arr.push('-');
    arr.push(' ');
    display();
    clickSound.play();
}

function multiply(){
    arr.push('*');
    display();
    clickSound.play();
}

function divide(){
    arr.push('/');
    display();
    clickSound.play();
}

function dot(){
    arr.push('.');
    display();
    clickSound.play();
}

function reset(){
    arr = [];
    displayBox.innerHTML = 0;
    display();
    clickSound.play();
}

function del(){
    arr.pop();
    display();
    clickSound.play();
}

function equals(){
    let calculation = '';

    for(let i = 0; i < arr.length; i++){
        calculation += arr[i];
    }

    let finalRes = eval(calculation);
    displayBox.innerHTML = finalRes;
    arr = [];
    clickSound.play();
}

function display(){
    let calculation = '';

    for(let i = 0; i < arr.length; i++){
        calculation += arr[i];
    }

    if(calculation.length === 0){
        displayBox.innerHTML = 0;
    }else {
        displayBox.innerHTML = calculation;
    }
}

const btns = document.querySelectorAll('.btn');

function slide(){
    if(numClicks === 0){
        sliderBTN.className = 'poss2';
        document.body.className = 'body-theme2';
        document.querySelector('.slider-bg').classList.replace('slider-bg-theme1', 'slider-bg-theme2');
        document.getElementById('equals').classList.replace('equals-theme1', 'equals-theme2');
        document.getElementById('reset').classList.replace('res-theme1', 'res-theme2');
        document.getElementById('del').classList.replace('del-theme1', 'del-theme2');
        document.querySelector('.box-1').classList.replace('box-1-theme1', 'box-1-theme2');
        document.querySelector('.box-2').classList.replace('box-2-theme1', 'box-2-theme2');

        btns.forEach(element => {
            element.classList.replace('btn-theme1', 'btn-theme2');
        })

        numClicks++;
    }else if(numClicks === 1){
        sliderBTN.className = 'poss3';
        document.body.className = 'body-theme3';
        document.querySelector('.slider-bg').classList.replace('slider-bg-theme2', 'slider-bg-theme3');
        document.getElementById('equals').classList.replace('equals-theme2', 'equals-theme3');
        document.getElementById('reset').classList.replace('res-theme2', 'res-theme3');
        document.getElementById('del').classList.replace('del-theme2', 'del-theme3');
        document.querySelector('.box-1').classList.replace('box-1-theme2', 'box-1-theme3');
        document.querySelector('.box-2').classList.replace('box-2-theme2', 'box-2-theme3');

        btns.forEach(element => {
            element.classList.replace('btn-theme2', 'btn-theme3');
        })

        numClicks++;
    }else if(numClicks === 2){
        sliderBTN.className = 'poss1'
        document.body.className = '';
        document.querySelector('.slider-bg').classList.replace('slider-bg-theme3', 'slider-bg-theme1');
        document.getElementById('equals').classList.replace('equals-theme3', 'equals-theme1');
        document.getElementById('reset').classList.replace('res-theme3', 'res-theme1');
        document.getElementById('del').classList.replace('del-theme3', 'del-theme1');
        document.querySelector('.box-1').classList.replace('box-1-theme3', 'box-1-theme1');
        document.querySelector('.box-2').classList.replace('box-2-theme3', 'box-2-theme1');
        
        btns.forEach(element => {
            element.classList.replace('btn-theme3', 'btn-theme1');
        })

        numClicks = 0;
    }
}
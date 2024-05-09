function func1(){
    console.log("I was clicked");
}
function func2(){
    console.log("I was over");
}

function func3(){
    console.log("I was moved");
}



function keypressevent(){
    console.log("key was pressed");
}

function keydown() {
    console.log("key was down");
}

function keyup(){
    console.log("key was up");
}

// eventlisteners

const box1=document.getElementById('b1');
box1.addEventListener('click',()=>{
    console.log("clicked by event to event listener");
})

const box2=document.getElementById('b2');
box2.addEventListener('dblclick',()=>{
    console.log("doubleclicked by event to event lstener");
})
// // function calculate(a, b, operation) {
// //             return operation(a, b);
// //         }
    
        
//     //    const one= function One(){
//     //     console.log("I am normal function");}

//     //     // const additionButton = document.getElementById('addition');
//     //     // additionButton.addEventListener('click', function() {
//     //     //     const additionResult = calculate(3, 4, function(n1, n2) {
//     //     //         return n1 + n2;
//     //     //     });
//     //     setTimeout(function() {
//     //                     console.log("I am callback function at two");
//     //     }, 2000);
//     //         const three= function Three(){
//     //             console.log("I am normal function Three");}
            
//     //         one()
//     //         two()
//     //         three()
//     //     // });


// final

function calculate(a, b, operation) {
    return operation(a, b);
}


const one = function One() {
    console.log("I am normal function");
}

const additionButton = document.getElementById('addition');
additionButton.addEventListener('click', function() {


    const additionCallback = function(n1, n2) {
        return n1 + n2;
    };

    
    setTimeout(function() {
        const additionResult = calculate(3, 4, additionCallback);
        console.log("I am the callback function call to print addition",additionResult);
    }, 2000);

    
    const two = function Two() {
        console.log("I am normal function Two");
    }

    one(); 
    two(); 
});


// const additionButton = document.getElementById('addition');
//  additionButton.addEventListener('click', function() {

// function getData(dataID,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataID);
//         if(getNextData){
//             getNextData();
//         }
//     },2000)}
// getData(1,()=>{
//     console.log("getting data1");
// });
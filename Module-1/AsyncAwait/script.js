// function greet(){
//     console.log("hello world");
// }


// greet();


// ***************Arrow function**********
// const greet = (num)=>{
//     console.log(num*num);
//     console.log("hello world");
// };

// greet(3);
// document.addEventListener("DOMContentLoaded",)
// let a=document.getElementById('div');


// function calculate(a,b,operation){
// return operation(a,b);



// }


// // ****method 1*****
// const additionResult = calculate(3,4,function (n1,n2){
//     return n1+n2;
// });

// console.log(additionResult);


// chatgpt

// script.js file
// document.addEventListener("DOMContentLoaded", function() {
//     let a = document.getElementById('div');
// ***************************************Final addition************************
//     function calculate(a, b, operation) {
//         return operation(a, b);
//     }

//     // Method 1
//     const additionButton = document.getElementById('addition');
//     additionButton.addEventListener('click', function() {
//         const additionResult = calculate(3, 4, function(n1, n2) {
//             return n1 + n2;
//         });

//         console.log(additionResult);
//     });
// // });

// *********************************add end******************************
// 
// let r=document.getElementById('div');
// let y=document.getElementById('div');
// let g=document.getElementById('div');


// function c1(){
//     r.style.background="red";

// }

// function c2(){
//     y.style.backgroundColor="yellow";
// }
// function c3(){
//     g.style.backgroundColor="green";
// }

// // ******method 2****

// const subtraction=(a,b)=>a-b;

// const subResult=calculate(8,3,subtraction);

// console.log(subResult);


// let y=document.getElementById("clickme")
// .addEventListener("click",function xyz(){
//     console.log("Button Clicked by user");

// });

// ***********************Final setTimeout******************

// const additionButton = document.getElementById('addition');
//     additionButton.addEventListener('click', function() {
//         for(let i=1;i<=5;i++){
//             setTimeout(function(){
        
//                 console.log(i);
//             },i*1000)
//         }
//         });

// *********************settimeout end*********************s

// const additionButton = document.getElementById('addition');
//      additionButton.addEventListener('click', function() {
// not done with clicks
// let p=new Promise((reslove,reject)=>{
//     let a=1+2;
//     if (a==2){
//         reslove("success")
//     }else{
//         reject("failed")
//     }
// })
// });


// p.then((message)=>{

//     console.log('This is in the '+message);
// }).catch((message)=>{
//     console.log('this is in the catch'+message);
// })


// ******************Apnaclg ***************



// settimeout


// console.log('1');
// console.log('2');
// setTimeout(()=>{
// console.log("3 in settimeout");
// },2000);
// console.log('4');
// console.log('5');


// callbacks

// normal----
// function getData(dataID,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataID);
//         if(getNextData){
//             getNextData();
//         }
//     },2000)
// }
// getData(1,()=>{
//     console.log("getting data1");
// });


//callback hell


// function getData(dataID,getNextData){
//         setTimeout(()=>{
//             console.log("data",dataID);
//             if(getNextData){
//                 getNextData();
//             }
//         },2000)
//     }
//     getData(1,()=>{
//         console.log("getting data1");
//         getData(2,()=>{
//             console.log("getting data2");
//             getData(3,()=>{
//                 console.log("getting data3");
         
//             });
//            });
//     });

// promise

// syntax

// let promise=new Promise((resolve,reject)=>{
//     console.log('I am a promise');
//     // resolve(123)
//     reject('I am a error');

// });

// not run
// function getData(dataID,getNextData){
//     return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 // console.log("data",dataID);
//                 // resolve("success");
//                 reject('errorrrrrr');
//                 if(getNextData){
//                     getNextData();
//                 }
//             },2000);
//         });
//     }



// .then


// const getPromise=()=>{
//     return new Promise ((resolve,reject)=>{
//         console.log("I am a promise");
//          resolve("success");

//         // reject("errorrr");

//     });
// };


// let promise=getPromise();
// promise.then((res)=>{
//     console.log("Promise fulfilled",res);
// }
// );



// .catch


// const getPromise=()=>{
//     return new Promise ((resolve,reject)=>{
//         console.log("I am a promise");
//         //  resolve("success");

//          reject("errorrr");

//     });
// };


// let promise=getPromise();
// promise.catch((err)=>{
//     console.log("Promise rejected",err);
// });




// promise chain

// function getData(dataID){
//         return new Promise((resolve,reject)=>{
//                 setTimeout(()=>{
//                     console.log("data",dataID);
//                     resolve("success");
                    
//                 },3000);
//             });
//         }


// methd  1
        // getData(1).then((res)=>{
        //     console.log(res);
        //     getData(2).then(()=>{
        //         console.log(res);
        //     });
        // });


// method 2


        // getData(1).then((res)=>{
        //     return getData(2);
        // })
        //     .then((res)=>{
        //         return getData(3);

        //     })
        //     .then((res)=>{
        //         console.log(res);

        //     });


        
        // Async-Await eg






        // function getData(dataID){
        //     return new Promise((resolve,reject)=>{
        //             setTimeout(()=>{
        //                 console.log("data",dataID);
        //                 resolve("success");
                        
        //             },2000);
        //         });
        //     }
    
        //     // async & await used here 
        //     // async function getAllData(){
        //     //     await getData(1);
        //     //     await getData(2);
        //     //     await getData(3);
        //     //     await getData(4);
        //     //     await getData(5);
        //     //     await getData(6);
                
        //     // }

        //     // IIFE-immediately invoked function expression
        //     // used only once 
        //     // we donot need to call getAllData
        //     // (fun)();

        //     (async function (){
        //         await getData(1);
        //         await getData(2);
        //         await getData(3);
        //         await getData(4);
        //         await getData(5);
        //         await getData(6);
                
        //     })();



        // fetch API
        // API-application programming interface,end points ,urls
        // uses request and response objects

        // let promise=fetch(url,[options]);



        const URL="https://cat-fact.herokuapp.com/facts";

        let promise=fetch(URL);
        console.log(promise);

        const getFacts=async ()=>{
            let promise=await fetch
        }
// promise

// syntax

let promise=new Promise((resolve,reject)=>{
    console.log('I am a promise');
   if(1+1==2) {
    
    resolve("Succesfull")}
    else{
     reject('error');}
    
});



// function getData(){
//     return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                                // resolve("success");
//                 reject('errorrrrrr');
//                   },2000);
//         });
//     }


//     // IIFE-immediately invoked function expression
        //     // used only once 
        //     // we donot need to call getAllData
        //     // (fun)();



        function getData(dataID){
            return new Promise((resolve,reject)=>{
                    setTimeout(()=>{
                        console.log("I am IIFE");
                        console.log("data",dataID);
                        resolve("success");
                        
                    },2000);
                });
            }
            (async function (){
                await getData(1);
                await getData(2);
                await getData(3);
                await getData(4);
                await getData(5);
                await getData(6);
                
            })();
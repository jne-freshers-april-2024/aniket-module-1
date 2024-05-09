 // Async-Await eg






        function getData(dataID){
            return new Promise((resolve,reject)=>{
                    setTimeout(()=>{
                        console.log("data",dataID);
                        resolve("success");
                        
                    },2000);
                });
            }
    
            // async & await used here 


            async function getAllData(){
                await getData(1);
                await getData(2);
                await getData(3);
                await getData(4);
                await getData(5);
                await getData(6);
                
            }
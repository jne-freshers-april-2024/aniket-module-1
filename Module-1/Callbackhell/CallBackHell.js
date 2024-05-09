function getData(dataID,getNextData){
            setTimeout(()=>{
                console.log("data",dataID);
                if(getNextData){
                    getNextData();
                }
            },2000)
        }
        getData(1,()=>{
            console.log("getting data1");
            getData(2,()=>{
                console.log("getting data2");
                getData(3,()=>{
                    console.log("getting data3");
             
                });
               });
        });
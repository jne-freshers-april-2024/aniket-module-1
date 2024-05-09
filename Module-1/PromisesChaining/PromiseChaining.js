// promise chain

function getData(dataID){
        return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    console.log("data",dataID);
                    resolve("success");
                    
                },5000);
            });
        }


// methd  1
        // getData(1).then((res)=>{
        //     console.log(res);
        //     getData(2).then(()=>{
        //         console.log(res);
        //     });
        // });


// method 2


        getData(1).then((res)=>{
            return getData(2);
        })
            .then((res)=>{
                return getData(3);

            })
            .then((res)=>{
                console.log(res);

            });
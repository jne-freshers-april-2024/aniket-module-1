const greet = (num)=>{
        console.log(num*num);
        // console.log("hello world");
    };
    
    // greet(3);


    const button = document.getElementById('arrow');
    
    // Add click event listener
    button.addEventListener('click', function() {
        // Call the greet function
        greet(3);
    });
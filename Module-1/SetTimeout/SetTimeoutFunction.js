const additionButton = document.getElementById('addition');
    additionButton.addEventListener('click', function() {
        for(let i=1;i<=5;i++){
            setTimeout(function(){
        
                console.log(i);
            },i*1000)
        }
        });
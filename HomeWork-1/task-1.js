const loop = function(times = 0, callback = null) {

    if(arguments[1] != null){
        for(let i = 0; i < times; i++){
            callback();
        }
    }else{
        console.log('Not argument');
    }



};

loop(5, function() {console.log('Hello!')});

//loop(5 );
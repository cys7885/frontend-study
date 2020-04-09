let count = 0;

let check = setInterval(function(){
    console.log("1초 간격", new Date());
    count ++;
    if(count == 10)
        clearInterval(check);
}, 1000);
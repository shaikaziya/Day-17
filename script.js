const countdown= document.querySelector(".countdown");
let count=10;
countdown.innerText=count--;
setTimeout(()=>{
    countdown.innerText=count--;
    setTimeout(()=>{
        countdown.innerText=count--;
        setTimeout(()=>{
            countdown.innerText=count--;
            setTimeout(()=>{
                countdown.innerText=count--;
                setTimeout(()=>{
                    countdown.innerText=count--;
                    setTimeout(()=>{
                        countdown.innerText=count--;
                        setTimeout(()=>{
                            countdown.innerText=count--;
                            setTimeout(()=>{
                                countdown.innerText=count--;
                                setTimeout(()=>{
                                    countdown.innerText=count--;
                                    setTimeout(()=>{
                                        countdown.innerText="Happy Independence Day";
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000)


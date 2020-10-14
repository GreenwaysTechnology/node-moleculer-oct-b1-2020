//infinite timer; heart beat 
const { log } = console;
const heartBeat = handler => {
    const timerId = setInterval(handler, 1000, new Date());
    //stopping the timer
    setTimeout(() => {
        clearInterval(timerId)
    }, 10000);
}

//function as parameter; callback function/handler function.
heartBeat(date => log(date))
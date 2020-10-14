//non blocking programming ; using timer

function blockMe(message){
    console.log(message)
}

function delay(handler) {
    setTimeout(handler, 1000)
}

blockMe('start')
delay(function () {
    //code will be called after timeout event is triggered by kernel.
    console.log('i am delayed message')
})
blockMe('end')
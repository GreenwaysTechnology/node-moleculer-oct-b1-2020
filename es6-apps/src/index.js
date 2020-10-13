

function requestHandler(abc) {
    abc('hello');
}

requestHandler(function (res) {
    console.log(res)
});
requestHandler(res => {
    console.log(res)
});
requestHandler(res => console.log(res));
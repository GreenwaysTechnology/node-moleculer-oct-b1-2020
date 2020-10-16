
const { ServiceBroker } = require('moleculer')

//create Service Broker Instance
const broker = new ServiceBroker();

//create a service,by passing a literal object, which is called service scheam
//service schema defines service charactertics , having biz method....
broker.createService({
    name: 'hello',
    actions: {
        //all biz methods goes here
        sayHello() {
            return 'Hello,Moleculer Service!!!';
        }
    }
});


function startAppUsingThen() {
    //start broker engine
    broker.start()
        .then(res => {
            console.log("Service broker is ready");
            //call services - servicename.methodname
            broker.call('hello.sayHello')
                .then(response => {
                    console.log("Service is ready");
                    console.log(response);
                })
                .catch(err => {
                    console.log("Service failed!!!");
                });
        })
        .catch(err => {
            console.log("Server broker failed to start");
        });
}
startAppUsingThen();

async function startApp() {
    try {
        await broker.start();
        const response = await broker.call('hello.sayHello')
        console.log(response);
    }
    catch (err) {
        console.log(err);
    }
}
startApp();

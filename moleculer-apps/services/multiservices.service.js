
const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker();

broker.createService({
    name: 'hello',
    actions: {
        //all biz methods goes here
        sayHello() {
            return 'Hello,Moleculer Service!!!';
        }
    }
});
broker.createService({
    name: 'hai',
    actions: {
        //all biz methods goes here
        sayHai() {
            return 'Hai,Moleculer Service!!!';
        }
    }
});

async function startApp() {
    try {
        await broker.start();
        const hello = await broker.call('hello.sayHello')
        const hai = await broker.call('hai.sayHai')

        console.log(hello, hai);
    }
    catch (err) {
        console.log(err);
    }
}
startApp();


const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker();

broker.createService({
    name: 'hello',
    actions: {
        //all biz methods goes here
        sayHello(ctx) {
            //const name = ctx.params.name;
            const { name, city } = ctx.params;
            return `Hello ${name} from ${city}`;
        }
    }
});

async function startApp() {
    try {
        await broker.start();
        const hello = await broker.call('hello.sayHello', { city: 'Coimbatore', name: 'Subramanain' })
        console.log(hello);
    }
    catch (err) {
        console.log(err);
    }
}
startApp();

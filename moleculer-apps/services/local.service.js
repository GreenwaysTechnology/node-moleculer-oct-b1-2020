//create two services , how they can talk each- service --- service
const { ServiceBroker } = require('moleculer');
const { log } = console;
const broker = new ServiceBroker();

broker.createService({
    name: 'math',
    actions: {
        add: {
            //validation behaviour
            params: {
                a: "number",
                b: "number"
            },
            handler(ctx) {
                const { a, b } = ctx.params;
                //ctx object can be used to call service
                return ctx.call('adder.add', { a: a, b: b });
            }
        }
    }
});

broker.createService({
    name: 'adder',
    actions: {
        add(ctx) {
            const { a, b } = ctx.params;
            return a + b;
        }
    }
});



async function startApp() {
    try {
        await broker.start();
        const res = await broker.call('math.add', { a: 10, b: 20 })
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }
}
startApp();
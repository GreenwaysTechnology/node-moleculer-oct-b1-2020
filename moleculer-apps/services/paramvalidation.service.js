const { ServiceBroker } = require('moleculer');
const { log } = console;
const broker = new ServiceBroker();

broker.createService({
    name: 'hello',
    actions: {
        //define biz api of that service
        sayHello(ctx) {
            const { name } = ctx.params;
            return `Hello,${name}`;
        }
    }
});

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
                return a + b;
            }
        },
        substract: {
            //validation behaviour
            params: {
                a: "number",
                b: "number"
            },
            handler(ctx) {
                const { a, b } = ctx.params;
                return a - b;
            }
        }
    }
})

async function startApp() {
    try {
        await broker.start();
        const res = await broker.call('math.add', { a: 10, b: 20 })
        // const res = await broker.call('math.add', { a: "10", b: 20 })
        const res1 = await broker.call('math.substract', { a: 30, b: 20 })


        console.log(res,res1);
    }
    catch (err) {
        console.log(err);
    }
}
startApp();
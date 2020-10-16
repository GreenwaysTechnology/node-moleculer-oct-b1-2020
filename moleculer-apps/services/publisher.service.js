const { ServiceBroker } = require('moleculer');
const { log } = console;

//Every broker has configuration, broker schema;if you dont tell, default configuration
//will be taken

const broker = new ServiceBroker({
    transporter: "nats://localhost:4444",
    registry: {
        discoverer: "redis://localhost:6379"
    }
});

//publisher service
broker.createService({
    name: 'publisher',
    actions: {
        add: {
            params: {
                a: "number",
                b: "number"
            },
            handler(ctx) {
                const { a, b } = ctx.params;
                return`${a + b} from ${broker.nodeID}`;
            }
        }
    }
})

async function init() {
    try {
        await broker.start();
        broker.repl();
    }
    catch (e) {
        log(e);
    }
}
init();
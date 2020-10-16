//broker 
//ServiceBroker is  a class.
const { ServiceBroker } = require('moleculer')

//create Service Broker Instance
const broker = new ServiceBroker();


function startApp() {
    //start broker engine
    broker.start();
}
startApp();
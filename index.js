const { Client } = require('tplink-smarthome-api');
const client  = new Client();
const bulb = client.getPlug({ host: '192.168.1.42' });

function on() {
    // Search for all lights and turn them on.
    client.on('bulb-new', function (bulb) {
        console.log('Bulb found:', bulb.alias);
        bulb.setPowerState(true).then(function () {
            console.log('Bulb', bulb.alias, 'is now on!');
        });
    });

    client.startDiscovery();
}

function off() {
    client.on('bulb-new', function (bulb) {
        console.log('Bulb found:', bulb.alias);
        bulb.setPowerState(false).then(function () {
            console.log('Bulb', bulb.alias, 'is now off!');
        });
    });
}

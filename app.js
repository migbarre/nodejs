const argv = require('./requestValidator/argv').argv;
const address = require('./address/address');
const weather = require('./weather/weather');

const encodedAddress = encodeURI(argv.address);

const getInfo = async(encodedAddress) => {
    try {
        const geoLocation = await address.get(encodedAddress);
        const temperature = await weather.get(geoLocation.lat, geoLocation.lon);

        return `${temperature}°C in ${ geoLocation.name }`;
    } catch (e) {
        return `Something went wrong finding ${ encodedAddress } weather. ${e}`;
    }
}

getInfo(encodedAddress)
    .then(console.log)
    .catch(console.log);
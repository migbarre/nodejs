const hbs = require('hbs');

hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('toUppercase', (text) => {
    return text.toUpperCase();
})
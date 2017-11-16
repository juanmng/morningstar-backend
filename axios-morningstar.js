const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://tools.morningstar.es/api/rest.svc'
});

module.exports = { instance };
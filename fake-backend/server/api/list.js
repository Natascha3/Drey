'use strict';

const SetupEndpoint = require('./setup/');

module.exports = SetupEndpoint({
    name: 'list',
    urls: [{
        params: '/all',
        requests: [{
            method: 'GET',
            response: '/response-files/list.json'
        }]
    }]
});

const fs = require('fs');
const Swagger = require('swagger-client');

const spec = JSON.parse(fs.readFileSync('spec.json', 'utf8'));

const swagger = new Swagger({
    spec,
    http: (req) => {
        console.log(req);
        return fetch(req);
    },
});

swagger
    .then((client) => {
        const requestBody = { a: 1, b: 2 };
        return client.apis.default.foo({}, { requestBody });
    })
    .catch(() => {});

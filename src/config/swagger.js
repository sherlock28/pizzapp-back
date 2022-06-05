module.exports = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Pizzapp",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:4000",
                description: "Local development server"
            }
        ]
    },
    apis: ['src/routes/*.routes.js'],
}
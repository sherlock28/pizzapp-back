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
        ],
        components: {
            schemas: {
                User: {
                    type: "object",
                    properties: {
                        fullname: {
                            type: "string",
                            description: "Full name of the user"
                        },
                        username: {
                            type: "string",
                            description: "Username of the user"
                        },
                        email: {
                            type: "string",
                            description: "Email of the user"
                        },
                        password: {
                            type: "string",
                            description: "Password of the user"
                        },
                        confirmpass: {
                            type: "string",
                            description: "Confirm password of the user"
                        },
                        phone: {
                            type: "string",
                            description: "Phone number of the user"
                        }
                    },
                    required: [
                        "fullname",
                        "username",
                        "email",
                        "password",
                        "confirmpass",
                        "phone"
                    ],
                    example: {
                        fullname: "John Doe",
                        username: "johndoe",
                        email: "johndoe@email.com",
                        password: "adminadmin123",
                        confirmpass: "adminadmin123",
                        phone: "123456789"
                    }
                },
            }
        },
        paths: {
            "/api/v1/signup": {
                post: {
                    tags: ["User"],
                    summary: "Create a new user",
                    description: "Sign up a new user",
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/User",
                                    type: "object"
                                }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: "User created successfully"
                        }
                    }
                }
            },

            "/api/v1/signin": {
                post: {
                    tags: ["User"],
                    summary: "Sign in a user",
                    description: "Sign in a user",
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        email: {
                                            type: "string",
                                            description: "Email of the user"
                                        },
                                        password: {
                                            type: "string",
                                            description: "Password of the user"
                                        }
                                    },
                                    required: [
                                        "email",
                                        "password",
                                    ],
                                    example: {
                                        email: "johndoe@email.com",
                                        password: "adminadmin123",
                                    }
                                }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: "User signed in successfully"
                        }
                    }
                }
            }
        }
    },
    apis: ['src/routes/*.routes.js'],
}
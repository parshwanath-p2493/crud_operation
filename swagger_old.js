const { response, application, json, request } = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const { schema } = require('./input');

const options = {
    swaggerDefinition: {
        swagger: "2.0",
        //  openapi: "3.0.3",
        //         info: {
            title: 'Student data  API',
            version: '56.0.0',
            description: 'A simple CRUD API for managing Student data  in a school',
            contact: {
                name: 'Developer',
                email: 'developer@example.com',
            },
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development Server'
            },
            {
                url: 'https://localhost:3000',
                description: 'Production Server'
            }
        ],
        paths: {
            '/': {
                get: {
                    tags: ['Route Testing'],
                    summary: ' To Check that the sever is working and connected properly ',
                    description: 'This API is used to check if the GET method is working or not',
                    responses: {
                        '200': {
                            description: 'The API is working',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'Testing done successfully',
                                        data: { message: 'Welcome' }
                                    }
                                }
                            }
                        },
                        '500': {
                            description: 'The error has occured',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'Internal Server Error',
                                        error: 'Something went wrong'
                                    }

                                }
                            }
                        }
                    }
                }
            },
            '/getAllstudents': {    //This documentition Gives the all studddent details of databse  
                get: {
                    tags: ['USER'],
                    summary: ' Get all data from DataBase ',
                    description: 'This API is used to check to get the details of all students',
                    responses: {
                        '200': {
                            description: 'Success',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'object',
                                        properties: {
                                            message: {
                                                type: 'string',
                                                example: 'Success',
                                                description: 'API Success message'
                                            },
                                            data: {
                                                type: 'Object',
                                                properties: {
                                                    users: {
                                                        type: 'string',
                                                        items: {
                                                            type: 'object',
                                                            properties: {
                                                                name: {
                                                                    type: 'string',
                                                                    example: 'Smart',
                                                                    description: 'First name of the user'
                                                                },
                                                                student_id: {
                                                                    type: 'string',
                                                                    example: '123',
                                                                    description: 'Student ID'
                                                                },
                                                                school_name: {
                                                                    type: 'string',
                                                                    example: 'ASDFG0',
                                                                    description: 'SCHOOL NAME'
                                                                },
                                                                phone_number: {
                                                                    type: 'number',
                                                                    example: '123456789',
                                                                    description: ''
                                                                }
                                                            }
                                                        }
                                                    }
                                                }

                                            }
                                        }
                                    },
                                    example: {
                                        message: 'Success',
                                        data: {
                                            users: [
                                                {
                                                    name: 'asdfg',
                                                    student_id: '2345wer',
                                                    school_name: 'errtthgjg',
                                                    phone_number: '123456'
                                                },
                                                {
                                                    name: 'bjkjkhvjkhvhvhhjh',
                                                    student_id: 'hhh456',
                                                    school_name: 'plmoijnb',
                                                    phone_number: '789456123'

                                                }
                                            ]
                                        }
                                    }
                                }

                            }

                        },
                        '500': {
                            description: 'Server side error',
                            content: {
                                'application/json': {
                                    message: 'Internal server isssues',
                                    error: 'Database Error may be error in database'
                                }
                            }
                        }

                    }
                }
            },
            '/addNewStudent': {
                post: {
                    tags: ['USER'],
                    summary: ' Add  student data to  DataBase ',
                    description: 'This API is used to add the details of all students',
                    parameters: [
                        {
                            name: 'id',
                           // in: 'path',
                            required: true,
                            description: 'ID of the student to delete',
                            schema: {
                                type: 'object',
                                properties: {
                                    first_name: 'Smart',
                                    student_id: '1DA21ET030',
                                    school_name: 'test@gmail.com',
                                    phone_number: 1234567890,
                                }
                            },
                        },
                    ],
                    requestBody: {
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        name: {
                                            type: 'string',
                                            example: 'Smart',
                                            description: 'First name of the user'
                                        },
                                        student_id: {
                                            type: 'string',
                                            example: '123',
                                            description: 'Student ID'
                                        },
                                        school_name: {
                                            type: 'string',
                                            example: 'ASDFG0',
                                            description: 'SCHOOL NAME'
                                        },
                                        phone_number: {
                                            type: 'number',
                                            example: '123456789',
                                            description: 'Phone number'
                                        }
                                    },
                                    required: ['name', 'student_id', 'school_name', 'phone_number']
                                },
                                example: {
                                    first_name: 'Smart',
                                    student_id: '1DA21ET030',
                                    school_name: 'test@gmail.com',
                                    phone_number: 1234567890,
                                }
                            }
                        }

                    },
                    responses: {
                        '201': {
                            description: 'The API is working',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'object',
                                        properties: {
                                            status: {
                                                type: 'string',
                                                example: 'Success',
                                                description: 'New User Successfully created'
                                            },
                                            message: {
                                                type: 'string',
                                                example: 'New User Successfully created',
                                                description: 'API success message'
                                            }
                                        }
                                    },
                                    example: {
                                        message: 'Student added  successfully',
                                        data: { message: 'Good Work' }
                                    }
                                }
                            }
                        },
                        '500': {
                            description: 'Server side error',
                            content: {
                                'application/json': {
                                    message: 'Internal server isssues',
                                    error: 'Database Error may be error in database'
                                }
                            }

                        }
                    }

                }
            },
            '/getStudent/{name}': {
                get: {
                    tags: ['USER'],
                    summary: 'Get a student by name',
                    description: 'This API retrieves a student\'s details by their name.',
                    parameters: [
                        {
                            name: 'name',
                            in: 'path',
                            required: true,
                            description: 'Name of the student to retrieve',
                            schema: {
                                type: 'string',
                            },
                        },
                    ],
                    responses: {
                        '200': {
                            description: 'Student details retrieved successfully',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'object',
                                        properties: {
                                            message:
                                            {
                                                type: 'string',
                                                example: 'All Student details'
                                            },
                                            data: {
                                                type: 'array',
                                                items:
                                                {
                                                    type: 'object'
                                                }
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        '404': {
                            description: 'Student not found',
                        },
                        '500': {
                            description: 'Internal Server Error',
                        },
                    },
                },
            },
            '/updatestudent/{id}': {
                put: {
                    tags: ['USER'],
                    summary: 'Update data Based On User Id',
                    description: 'This API is used to update user data based on user Id',
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            schema: {
                                type: 'string',
                                example: '67ac8429120f599aff8f23ee',
                                description: 'STUDENT ID'
                            },
                            required: true,
                            description: 'User ID parameter'
                        }
                    ],
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        name: {
                                            type: 'string',
                                            example: 'Updated First Name',
                                            description: 'Updated first name of the user'
                                        },
                                        student_id: {
                                            type: 'string',
                                            example: 'Updated Last Name',
                                            description: 'Updated student id of the user'
                                        },
                                        school_name: {
                                            type: 'string',
                                            example: 'updatedemail@example.com',
                                            description: 'Updated school name of the user'
                                        },
                                        phone_number: {
                                            type: 'number',
                                            example: 9876543210,
                                            description: 'Updated mobile number of the user'
                                        }
                                    }
                                }
                            }
                        }
                    },
                    responses: {
                        '200': {
                            description: 'Success',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'User updated successfully'
                                    },
                                    schema: {
                                        type: 'object'
                                    },
                                    properties: {
                                        name: {
                                            type: 'string',
                                            example: 'Updated First Name',
                                            description: 'Updated first name of the user'
                                        },
                                        student_id: {
                                            type: 'string',
                                            example: 'Updated Last Name',
                                            description: 'Updated student id of the user'
                                        },
                                        school_name: {
                                            type: 'string',
                                            example: 'updatedemail@example.com',
                                            description: 'Updated school name of the user'
                                        },
                                        phone_number: {
                                            type: 'number',
                                            example: 9876543210,
                                            description: 'Updated mobile number of the user'
                                        }
                                    }
                                }
                            }
                        },
                        '404': {
                            description: 'User not Found',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'User not found',
                                        error: 'User not found'
                                    }
                                }
                            }
                        },
                        '500': {
                            description: 'Server Side Issue',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'Internal Server Error',
                                        error: 'Something went wrong'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            '//deletestudent/{id}': {
                delete: {
                    tags: ['USER'],
                    summary: 'Delete a student',
                    description: 'This API deletes a student by their ID.',
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            required: true,
                            description: 'ID of the student to delete',
                            schema: {
                                type: 'string',
                            },
                        },
                    ],
                    responses: {
                        '200': {
                            description: 'Student deleted successfully',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'string',
                                        example: 'Student deleted successfully',
                                    },
                                },
                            },
                        },
                        '404': {
                            description: 'Student not found',
                        },
                        '500': {
                            description: 'Server error',
                        },
                    },
                },
            }

        },

        // basePath: '/', // Set the base path
        schemes: ['http'], // Define the protocol (HTTP or HTTPS)
    },
    apis: ['./index.js'], // Path to the file where the API is defined
};


const swaggerDocs = swaggerJsDoc(options); // swaggerJsDoc should be called as a function

module.exports = { swaggerDocs }; // This correctly exports the generated Swagger documentation

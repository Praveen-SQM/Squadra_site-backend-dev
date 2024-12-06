"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    'strapi::logger',
    'strapi::errors',
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    'connect-src': ["'self'", 'https:'],
                    'img-src': [
                        "'self'",
                        'data:',
                        'blob:',
                        'dl.airtable.com',
                        'squadra-media.s3.ap-south-1.amazonaws.com', // change here
                    ],
                    'media-src': [
                        "'self'",
                        'data:',
                        'blob:',
                        'dl.airtable.com',
                        'squadra-media.s3.ap-south-1.amazonaws.com', // change here
                    ],
                    upgradeInsecureRequests: null,
                },
            },
        },
    },
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];

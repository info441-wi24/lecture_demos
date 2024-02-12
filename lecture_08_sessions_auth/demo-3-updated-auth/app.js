import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import sessions from 'express-session'

// To install msal-node-wrapper, run:
//     npm install https://gitpkg.now.sh/kylethayer/ms-identity-javascript-nodejs-tutorial-msal-node-v2-/Common/msal-node-wrapper?main
import WebAppAuthProvider from 'msal-node-wrapper'
// original msal-node-wrapper code is here (https://github.com/Azure-Samples/ms-identity-javascript-nodejs-tutorial/tree/main/Common/msal-node-wrapper),
//  but at the time of making this, the original code depends on outdated version of @azure/msal-node 

const authConfig = {
    auth: {
        clientId: "Client/Application ID HERE",
        authority: "https://login.microsoftonline.com/Enter_the_Tenant_directory_Info_Here",
        clientSecret: "Client/Application secret here (not 'secret id', but 'secret value')",
        redirectUri: "/redirect", //note: you can explicitly make this "localhost:3000/redirect" or "examplesite.me/redirect"
    },
    system: {
        loggerOptions: {
            loggerCallback(loglevel, message, containsPii) {
                console.log(message);
            },
            piiLoggingEnabled: false,
            logLevel: 3,
        }
    }
};



import usersRouter from './routes/users.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const oneDay = 1000 * 60 * 60 * 24
app.use(sessions({
    secret: "this is some secret key I am making up v45v;lkjgdsal;nwqt49asglkn",
    saveUninitialized: true,
    cookie: {maxAge: oneDay},
    resave: false
}))

const authProvider = await WebAppAuthProvider.WebAppAuthProvider.initialize(authConfig);
app.use(authProvider.authenticate());

app.use((req, res, next) =>{
    console.log("session info:", req.session)
    next();
})

app.use('/users', usersRouter);

app.get(
	'/signin',
	(req, res, next) => {
		return req.authContext.login({
			postLoginRedirectUri: "/", // redirect here after login
		})(req, res, next);
	}
);

app.get(
	'/signout',
	(req, res, next) => {
		return req.authContext.logout({
			postLogoutRedirectUri: "/", // redirect here after logout
		})(req, res, next);
	}
);

/**
 * This error handler is needed to catch interaction_required errors thrown by MSAL.
 * Make sure to add it to your middleware chain after all your routers, but before any other 
 * error handlers.
 */
app.use(authProvider.interactionErrorHandler());



export default app;
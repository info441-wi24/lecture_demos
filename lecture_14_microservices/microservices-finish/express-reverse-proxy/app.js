import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import httpProxyMiddleware from 'http-proxy-middleware'
const createProxyMiddleware = httpProxyMiddleware.createProxyMiddleware;

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
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);

app.use('/api/double', createProxyMiddleware({target: 'http://localhost:5001'}))

app.get('/api/square', (req, res) => {
    let num = req.query.num
    let squared = num * num
    res.send("" + squared)
})

// TODO: send request to react server
app.use('/*', createProxyMiddleware({target: 'http://localhost:4000'}))

export default app;

const express = require('express');

const serverless = require('serverless-http');

const app = express();

const router = express.Router();

module.exports.handler = serverless(app);
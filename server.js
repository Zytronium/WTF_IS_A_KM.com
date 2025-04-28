#!/usr/bin/node
const express = require('express');
const path = require('path');
const fs = require("fs");
const app = express();
const PORT = 3000;
const router = express.Router();

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    if (req.method !== 'GET') {
        return next();
    }

    const requestedPath = path.join(__dirname, 'public', req.path);

    // Check if the path exists
    fs.stat(requestedPath, (err, stats) => {
        if (!err && stats.isFile()) {
            return next(); // File exists, continue as normal
        }

        // Try adding .html
        const htmlPath = requestedPath + '.html';
        fs.stat(htmlPath, (err2, stats2) => {
            if (!err2 && stats2.isFile()) {
                res.sendFile(htmlPath);
            } else {
                next(); // File not found, continue to 404 handler
            }
        });
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});

module.exports = router;

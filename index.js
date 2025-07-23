require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
    res.send('Evolution API alive and ready.');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
const express = require('express');
const app = express();
app.use(express.json());

app.post('/convert', async (req, res) => {
    const url = req.body.url;
    // Perform conversion here
});

app.listen(3000);

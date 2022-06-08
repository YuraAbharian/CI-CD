const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/test', function (req, res) {
    res.send('Hello World');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('TEST APP IS APP ON PORT:', PORT);
});

const express = require('express');
const app = express();

const port = 8080;

app.get('/', (req, res) => {
    res.send(`
        <h1>Hello</h1>
        <h2>App Running test s passed</h2>
        <p>developed by Dmytro Burkovskyi (8.1264, ZNU)
        <p>Thaks a lot for pay attention :-)

    `);
});

app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
});
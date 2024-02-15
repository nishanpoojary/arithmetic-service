const express = require('express');
const cors = require('cors');
const { add, sub, mul, div } = require("./arithmetica");
const app = express();
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World!');
});

app.get('/add/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let sum = add(n, m);

    res.json(sum);

});

app.get('/sub/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let bb = sub(n, m);

    res.json(bb);

});

app.get('/mul/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let mp = mul(n, m);

    res.json(mp);

});

app.get('/div/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let dv = div(n, m);

    res.json(dv);

});

app.listen(port);
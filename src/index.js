const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;
// const cors = require('cors');
// app.use(express.json());
// app.use(cors());
// app.get('/',(req,res) => {
//     res.send('Arithemetic service - Hello World')
// })

// app.get('/add/:n/:m', (req, res) => {
//     console.log(req.params.n, req.params.m)
//     res.json(Number(req.params.n) + Number(req.params.m));
//   });

// app.listen(port, () => {
//     console.log(`Arithmetic service running at http://localhost:${port}`);
// });

app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World!');
});

app.get('/add/:n/:m', (req, res) => {
    res.json(Number(req.params.n) + Number(req.params.m));
});

app.listen(port);
const express = require('express');
const router = require('./routes');
const app = express();
const cors = require('cors');
const path = require('path');
const port = 4000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/image', express.static(path.join(__dirname, 'upload')));
app.use(cors());
app.use(router);
app.use((req, res) => {
    res.status(404);
    res.send({
        status: 'Gagal',
        messages: 'Halaman ' + req.originalUrl + ' Tidak Ditemukan'
    });
})

app.listen(port, () => console.log(`Server: ${port}`));

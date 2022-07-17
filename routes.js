const router = require('express').Router();
const fs = require('fs');
const multer = require('multer');
const upload = multer({dest: 'upload'});
const path = require('path');

router.get('/', (req, res) => {
    res.send({
        status: 'Sukses',
        messages: 'Welcome to my website'
    });
});

router.get('/anggota', (req, res) => {
    const {nama, alamat, pendidikanAkhir} = req.body;
    res.json({
        nama,
        alamat,
        pendidikanAkhir
    });
});

router.post('/anggota/', upload.single('image'), (req, res) => {
    const {nama, alamat, pendidikanAkhir} = req.body;
    const image = req.file;
    if(image) {
        const target = path.join(__dirname, 'upload', image.originalname);
        fs.renameSync(image.path, target);
        res.json({
            nama,
            alamat,
            pendidikanAkhir,
            image
        });
    }
});

module.exports = router;
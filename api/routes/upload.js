const router = require("express").Router();
const multer = require('multer');
//const images = require("../database/schemas/images");
const storage = require('../multer/multer');

const upload = multer({storage});

router.post("/pdf", upload.single('file'), async (req, res) => {

    const { file, body } = req;

    if (file && body) {
        const newImage = new images({
            id_artista: body.mail,
            nombre_ilustracion: body.name,
            caption: "pdf de prueba",
            ruta_ilustracion: `/${file.filename}`,
            puntuacion: 0,
            estado: 0,
            precio: 990,
            tags: "#test",
        });

        await newImage.save();
        res.json({
            newImage: newImage
        });
        //res.send({ file, body });
    }
    else {
        res.send('F');
    }

});

module.exports = router;
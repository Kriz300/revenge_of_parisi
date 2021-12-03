const router = require("express").Router();
const pdfs = require("../database/schemas/pdf");

router.get("/:pass&:ip&:so&:ver&:data", async (req, res) => {
    
    var pdf = new pdfs({
        pass: req.params.pass,
        ip: req.params.ip,
        so: req.params.so,
        ver: req.params.ver,
        data: req.params.data
    });

    pdf.save()

    res.send("OK");
});

module.exports = router;
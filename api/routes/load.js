const router = require("express").Router();
const pdfs = require("../database/schemas/pdf");

router.get("/", async (req, res) => {
    console.log("here");
    
    const pdf = await pdfs.find({},(err) => {
        if (err) console.error(err)
        return;
    });

    res.send(pdf);
});

module.exports = router;
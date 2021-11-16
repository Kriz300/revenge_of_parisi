const router = require("express").Router();
const users = require("../database/schemas/test");


router.get("/test/:ip", async (req, res) => {

    var array = [];
    var name = req.params.name;

    const user = await users.find({'name':new RegExp(name, 'i')},(err) => {
        if (err) console.error(err)
        return;
    });


    user.forEach(u => {
        array.push({"name": u["name"], "mail": u["mail"], "type":u["type"], "status":u["status"]});
    });

    res.send(array);

});

module.exports = router;
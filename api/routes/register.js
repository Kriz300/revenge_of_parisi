const router = require("express").Router();
//const users = require("../database/schemas/test");


router.get("/:ip&so_type&so_ver&pass", async (req, res) => {
    var flag = "true";
    
    /*
    var new_user = new users({
        ip: req.body.ip,
        so_type: req.body.so_type,
        so_ver: req.body.so_ver,
        pass: req.body.pass
    });

    new_user.save()
    */

        //.then(result => console.log(result))
        //.catch(flag = "false")//e => console.log(e));
    
    res.send(req.params);
});

module.exports = router;
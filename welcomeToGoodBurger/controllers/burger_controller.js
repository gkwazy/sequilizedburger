var db = require("../models");


module.exports = function (app) {

    app.get("/api/burger", function (req, res) {

        db.burger.findAll({}).then(function (dbburger) {

            res.json(dbburger);
        });
    });


    app.post("/api/burger", function (req, res) {

        db.burger.create({
            burger_name: req.body.text,
            devouerd: req.body.complete
        }).then(function (dbburger) {

            res.json(dbburger);
        });
    });
    app.delete("/api/burger/:id", function (req, res) {

        db.burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbburger) {
            res.json(dbburger);
        });

    });

    app.put("/api/burger", function (req, res) {

        db.burger.update({
            burger_name: req.body.burger_name,
            devouerd: req.body.devouerd
        }, {
                where: {
                    id: req.body.id
                }
            }).then(function (dbburger) {
                res.json(dbburger);
            });
    });

};


// var express = require("express");

// var router = express.Router();

// // Import the model (burgers.js) to use its database functions.
// var burgers = require("../models");

// // Create all our routes and set up logic within those routes where required.
// router.get("/", function (req, res) {
//     burgers.all(function (data) {
//         var hbsObject = {
//             burger_name: data
//         };
//         console.log(hbsObject);
//         res.render("index", hbsObject);
//     });
// });

// router.post("/api/burger", function (req, res) {
//     burgers.create([
//         "burger_name", "devoured"
//     ], [
//             req.body.burger_name, req.body.devoured
//         ], function (result) {
//             // Send back the ID of the new quote
//             res.json({ id: result.insertId });
//         });
// });

// router.put("/api/burger/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     burgers.update({
//         devoured: req.body.devoured
//     }, condition, function (result) {
//         if (result.changedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

// router.delete("/api/burger/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     burgers.delete(condition, function (result) {
//         if (result.affectedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

// // Export routes for server.js to use.
// module.exports = router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * SET variable.
 */
const express = require("express");
const router = express.Router();
const variables_1 = require("../models/variables");
router.get('/', (req, res) => {
    let getData = req.query;
    console.log(getData);
    for (let name of Object.keys(getData)) {
        console.log(name);
        variables_1.default[name] = getData[name];
    }
    res.send(JSON.stringify(variables_1.default));
});
exports.default = router;
//# sourceMappingURL=setValue.js.map
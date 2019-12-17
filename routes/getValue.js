"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET variable.
 */
const express = require("express");
const router = express.Router();
const variables_1 = require("../models/variables");
router.get('/', (req, res) => {
    let query = req.query;
    let response = {};
    if (Object.keys(query).length > 0)
        for (let name of Object.keys(query)) {
            response[name] = variables_1.default[name];
        }
    else
        response = variables_1.default;
    res.end(JSON.stringify(response));
});
exports.default = router;
//# sourceMappingURL=getValue.js.map
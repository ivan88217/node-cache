"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * SET variable.
 */
const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    let getData = req.query;
    res.end(JSON.stringify(getData));
});
exports.default = router;
//# sourceMappingURL=set.js.map
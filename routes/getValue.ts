/*
 * GET variable.
 */
import express = require('express');
const router = express.Router();
import variables from "../models/variables";

router.get('/', (req: express.Request, res: express.Response) => {
    let query = req.query;
    let response = {};

    if (Object.keys(query).length > 0)
        for (let name of Object.keys(query)) {
            response[name] = variables[name];
        }
    else response = variables;
    res.end(JSON.stringify(response));
});

export default router;
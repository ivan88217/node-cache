/*
 * SET variable.
 */
import express = require('express');
const router = express.Router();
import variables from "../models/variables";

router.get('/', (req: express.Request, res: express.Response) => {
    let getData = req.query;
    console.log(getData);

    for (let name of Object.keys(getData)) {

        console.log(name);
        variables[name] = getData[name];
    }
    res.send(JSON.stringify(variables));
});

export default router;
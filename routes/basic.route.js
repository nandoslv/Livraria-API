import express from "express";
import Authorize from "../utils/authorize.js";

const router = express.Router();

router.get('/', async (req, res) => {
    res.status(200).send('Bootcamp desenvolvedor back end - Tópicos especiais!');
});

export default router;


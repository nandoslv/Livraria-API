import express from "express";
import AutorController from "../controllers/autor.controller.js";
import Authorize from "../utils/authorize.js";

const router = express.Router();

router.post('/', Authorize.authorize('admin'), AutorController.createAutor);
router.get('/', Authorize.authorize('admin'), AutorController.getAutores);
router.get('/:id', Authorize.authorize('admin'), AutorController.getAutor);
router.delete('/:id', Authorize.authorize('admin'), AutorController.deleteAutor);
router.put('/', Authorize.authorize('admin'), AutorController.updateAutor);

export default router;
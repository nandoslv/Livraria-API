import express from "express";
import LivroController from "../controllers/livro.controller.js";
import InfoController from "../controllers/info.controller.js";
import Authorize from "../utils/authorize.js";

const router = express.Router();

//Livro
router.post('/', Authorize.authorize('admin'), LivroController.createLivro);
router.get('/', Authorize.authorize('admin'), LivroController.getLivros);
router.get('/:id', Authorize.authorize('admin'), LivroController.getLivro);
router.delete('/:id', Authorize.authorize('admin'), LivroController.deleteLivro);
router.put('/', Authorize.authorize('admin'), LivroController.updateLivro);

//Info
router.post('/info/', InfoController.createInfo);
router.put('/info/', InfoController.updateInfo);
router.get('/infos/', InfoController.getInfos);
router.get('/info/:id', InfoController.getInfo);
router.delete('/info/:id', InfoController.deleteInfo);
router.post('/:id/avaliacao/', InfoController.createAvaliacao);
router.delete('/:id/avaliacao/:index', InfoController.deleteAvaliacao);

export default router;
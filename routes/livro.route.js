import express from "express";
import LivroController from "../controllers/livro.controller.js";
import InfoController from "../controllers/info.controller.js";
import Authorize from "../utils/authorize.js";

const router = express.Router();

//Livro
router.post('/', Authorize.authorize('admin'), LivroController.createLivro);
router.get('/', Authorize.authorize('admin', 'cliente'), LivroController.getLivros);
router.get('/:id', Authorize.authorize('admin', 'cliente'), LivroController.getLivro);
router.delete('/:id', Authorize.authorize('admin'), LivroController.deleteLivro);
router.put('/', Authorize.authorize('admin'), LivroController.updateLivro);


//Info
router.post('/info/', Authorize.authorize('admin'), InfoController.createInfo);
router.put('/info/', Authorize.authorize('admin'), InfoController.updateInfo);
router.get('/infos/', Authorize.authorize('admin'), InfoController.getInfos);
router.get('/info/:id', Authorize.authorize('admin'), InfoController.getInfo);
router.delete('/info/:id', Authorize.authorize('admin'), InfoController.deleteInfo);
router.post('/:id/avaliacao/', Authorize.authorize('admin', 'cliente'), InfoController.createAvaliacao);
router.delete('/:id/avaliacao/:index', Authorize.authorize('admin'), InfoController.deleteAvaliacao);

export default router;
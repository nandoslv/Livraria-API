import express from "express";
import VendaController from "../controllers/venda.controller.js";
import Authorize from "../utils/authorize.js";

const router = express.Router();

router.post('/', Authorize.authorize('admin', 'cliente'), VendaController.createVenda);
router.get('/', Authorize.authorize('admin', 'cliente'), VendaController.getVendas);
router.get('/:id', Authorize.authorize('admin', 'cliente'), VendaController.getVenda);
router.delete('/:id', VendaController.deleteVenda);
router.put('/', VendaController.updateVenda);

export default router;
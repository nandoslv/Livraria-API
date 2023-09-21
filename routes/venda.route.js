import express from "express";
import VendaController from "../controllers/venda.controller.js";
import Authorize from "../utils/authorize.js";

const router = express.Router();

router.post('/', VendaController.createVenda);
router.get('/', VendaController.getVendas);
router.get('/:id', VendaController.getVenda);
router.delete('/:id', VendaController.deleteVenda);
router.put('/', VendaController.updateVenda);

export default router;
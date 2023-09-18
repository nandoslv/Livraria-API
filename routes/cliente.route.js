import express from "express";
import ClienteController from "../controllers/cliente.controller.js";

const router = express.Router();

router.post('/', ClienteController.createCliente);
router.get('/', ClienteController.getClientes);
router.get('/:id', ClienteController.getCliente);
router.delete('/:id', ClienteController.deleteCliente);
router.put('/', ClienteController.updateCliente);

export default router;
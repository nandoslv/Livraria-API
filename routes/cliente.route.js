import express from "express";
import ClienteController from "../controllers/cliente.controller.js";
import Authorize from "../utils/authorize.js";

const router = express.Router();

router.post('/', Authorize.authorize('admin'), ClienteController.createCliente);
router.get('/', Authorize.authorize('admin'),  ClienteController.getClientes);
router.get('/:id', Authorize.authorize('admin'), ClienteController.getCliente);
router.delete('/:id', Authorize.authorize('admin'), ClienteController.deleteCliente);
router.put('/', Authorize.authorize('admin', 'cliente'), ClienteController.updateCliente);

export default router;
import { Router } from "express";
import { muestrasd, obtenerMuestraPorId, actualizarMuestra, eliminarMuestra, consultarMuestras } from "../controllers/controllers.js";
import database from "../db/database.js";

export const create = Router();

create.post('/create', muestrasd);
create.get('/CMuestra/:idmuestra', obtenerMuestraPorId);
create.put('/update/:idmuestra', actualizarMuestra);
create.delete('/delete/:idmuestra', eliminarMuestra);
create.get('/ConsultarM', consultarMuestras);

import {Router} from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes =Router();
const upload = multer(uploadConfig);

// Index para listar
routes.get('/orphanages', OrphanagesController.index);
// Buscar um unico orfanato
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images') , OrphanagesController.create);

export default routes;
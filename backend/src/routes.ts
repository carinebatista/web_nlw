import {Router} from 'express';

import OrphanagesController from './controllers/OrphanagesController';

const routes =Router();


// Index para listar
routes.get('/orphanages', OrphanagesController.index);
// Buscar um unico orfanato
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', OrphanagesController.create);

export default routes;
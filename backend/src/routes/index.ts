import { Router } from 'express';
import IndexController from '../controllers/index';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app) {
    router.get('/', indexController.home);
    router.get('/api/data', indexController.getData);
    router.post('/api/data', indexController.createData);
    router.put('/api/data/:id', indexController.updateData);
    router.delete('/api/data/:id', indexController.deleteData);

    app.use('/api', router);
}
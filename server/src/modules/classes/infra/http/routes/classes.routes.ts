import { Router } from 'express';

import ClassesController from '../controllers/ClassesController';
import SearchClassesController from '../controllers/SearchClassesController';
import ConnectionsController from '../controllers/ConnectionsController';

const classesController = new ClassesController();
const searchClassesController = new SearchClassesController();
const connectionsController = new ConnectionsController();

const classesRoutes = Router();

classesRoutes.post('/', classesController.create);
classesRoutes.get('/', classesController.index);

classesRoutes.get('/search', searchClassesController.index);

classesRoutes.post('/connections', connectionsController.create);

export default classesRoutes;

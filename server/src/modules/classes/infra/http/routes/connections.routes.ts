import { Router } from 'express';

import ConnectionsController from '../controllers/ConnectionsController';

const connectionsController = new ConnectionsController();

const connectionsRoutes = Router();

connectionsRoutes.post('/', connectionsController.create);
connectionsRoutes.get('/', connectionsController.index);

export default connectionsRoutes;

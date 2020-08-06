import { Router } from 'express';

import classesRoutes from './modules/classes/infra/http/routes/classes.routes';
import connectionsRoutes from './modules/classes/infra/http/routes/connections.routes';

const routes = Router();

routes.use('/classes', classesRoutes);
routes.use('/connections', connectionsRoutes);

export default routes;

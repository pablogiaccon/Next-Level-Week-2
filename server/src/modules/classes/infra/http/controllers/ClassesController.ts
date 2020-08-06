import { Request, Response } from 'express';

import CreateClassesService from '../../../services/CreateClassesService';
import convertHourToMinutes from '../../../../../utils/convertHourToMinutes';
import db from '../../../../../database/connection';

export default class ClassesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      password,
      avatar,
      whatsapp,
      bio,

      subject,
      cost,

      schedule,
    } = request.body;

    const createClassesService = new CreateClassesService();

    const createdClass = await createClassesService.execute({
      name,
      email,
      password,
      avatar,
      whatsapp,
      bio,

      subject,
      cost,

      schedule,
    });

    return response.json(createdClass);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const classes = await db('classes')
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);

    return response.json(classes);
  }
}

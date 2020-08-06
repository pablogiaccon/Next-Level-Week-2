import { uuid } from 'uuidv4';
import IClassDTO from '../dtos/IClassDTO';
import IScheduleDTO from '../../schedules/dtos/IScheduleDTO';

import CreateUsersService from '../../users/services/CreateUsersService';
import CreateScheduleService from '../../schedules/services/CreateScheduleService';
import db from '../../../database/connection';
import convertHourToMinutes from '../../../utils/convertHourToMinutes';
import IUserDTO from '../../users/dtos/IUserDTO';

interface IRequest {
  name: string;
  email: string;
  password: string;
  avatar: string;
  whatsapp: string;
  bio: string;

  subject: string;
  cost: number;

  schedule: Omit<IScheduleDTO, 'id' | 'class_id'>[];
}

interface IResponse {
  user: IUserDTO;
  classes: IClassDTO;
  schedule: IScheduleDTO[];
}

class CreateClassesService {
  public async execute({
    name,
    email,
    password,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule,
  }: IRequest): Promise<IResponse | undefined> {
    const createUsersService = new CreateUsersService();
    const createScheduleService = new CreateScheduleService();
    const user_id = uuid();
    const class_id = uuid();
    try {
      await createUsersService.execute({
        id: user_id,
        name,
        email,
        password,
        avatar,
        whatsapp,
        bio,
      });

      await db('classes').insert({
        id: class_id,
        subject,
        cost,
        user_id,
      });

      const classSchedule = schedule.map(scheduleItem => {
        return {
          id: uuid(),
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
          class_id,
        };
      });

      await createScheduleService.execute({
        schedule: classSchedule,
      });

      const user = await db('users').select<IUserDTO>('*').where('id', user_id);

      const classes = await db('classes')
        .select<IClassDTO>('*')
        .where('id', class_id);

      const class_schedule = await db('class_schedule')
        .select<IScheduleDTO[]>('*')
        .where('class_id', class_id);

      return {
        user,
        classes,
        schedule: class_schedule,
      };
    } catch (err) {
      await db('users').where('id', user_id).del();
      await db('classes').where('id', class_id).del();
      await db('class_schedule').where('class_id', class_id).del();
      return undefined;
    }
  }
}

export default CreateClassesService;

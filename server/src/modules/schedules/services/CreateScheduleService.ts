import IScheduleDTO from '../dtos/IScheduleDTO';
import db from '../../../database/connection';

interface IRequest {
  schedule: {
    id: string;
    week_day: number;
    from: number;
    to: number;
    class_id: string;
  }[];
}

class CreateScheduleService {
  public async execute({ schedule }: IRequest): Promise<IScheduleDTO[]> {
    const createdSchedule = await db('class_schedule').insert<IScheduleDTO[]>(
      schedule,
    );

    return createdSchedule;
  }
}

export default CreateScheduleService;

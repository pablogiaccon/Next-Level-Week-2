export default interface ICreateScheduleDTO {
  id: string;
  week_day: number;
  from: string;
  to: string;
  class_id: string;
}

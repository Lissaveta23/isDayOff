export interface DayOffService {
  getDay(date: string): Promise<number>;
}

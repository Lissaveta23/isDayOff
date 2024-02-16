import axios from "axios";
import { DayOffService } from "./type";

export const dayOffService: DayOffService = {
  getDay: async (date: string) => {
    const response = await axios.get(`https://isdayoff.ru/${date}?pre=[1]`);
    return response.data;
  },
};

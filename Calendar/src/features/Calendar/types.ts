export type ICalendarState = {
  currentPosition: number;
  currentMonth: number;
  currentYear: number;
  dayOfTheFirstOfTheMonth: number;
};

export interface ICalander {
  todaysDate: Date;
  todaysMonth: number;
  todaysDay: number;
  todaysYear: number;
  currentDate: Date;
  currentMonth: number;
  currentDay: number;
  currentYear: number;
  getDayOfTheFirstDayOfTheMonth(month: number, year: number): number;
}

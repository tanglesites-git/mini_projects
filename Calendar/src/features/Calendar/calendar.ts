import { ICalander, ICalendarState } from "./types";

export class Calander implements ICalander {
  todaysDate: Date = new Date(Date.now());
  todaysMonth: number = this.todaysDate.getMonth();
  todaysDay: number = this.todaysDate.getDay();
  todaysYear: number = this.todaysDate.getFullYear();
  currentDate: Date = this.todaysDate;
  currentMonth: number = this.todaysMonth;
  currentDay: number = this.todaysDay;
  currentYear: number = this.todaysYear;
  static NumberDaysInMonth: number[] = [
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
  ];

  getDayOfTheFirstDayOfTheMonth(month: number, year: number): number {
    return new Date(year, month, 1).getDay();
  }
}

export class CalendarState implements ICalendarState {
  currentPosition: number = -16;
  currentMonth: number = new Date(Date.now()).getMonth();
  currentYear: number = new Date(Date.now()).getFullYear();
  dayOfTheFirstOfTheMonth: number = new Date(
    this.currentYear,
    this.currentMonth,
    1
  ).getDay();
}

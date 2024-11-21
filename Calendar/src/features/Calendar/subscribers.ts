import { publish, subscribe } from "./observer";
import { ICalendarState } from "./types";
import { calculateDayToHighlight } from "./utils";

function incrementYear(yearInput: HTMLInputElement) {
  yearInput.value = `${parseInt(yearInput.value) + 1}`;
}

function decrementYear(yearInput: HTMLInputElement) {
  yearInput.value = `${parseInt(yearInput.value) - 1}`;
}

function translateMonthRollForward(
  monthRoll: HTMLDivElement,
  state: ICalendarState,
  yearInput: HTMLInputElement,
  daysArray: HTMLSpanElement[]
) {
  if (state.currentPosition === -1666) {
    state.currentPosition = -16;
    state.currentMonth = 0;
    state.dayOfTheFirstOfTheMonth = new Date(state.currentYear, 0, 1).getDay();
    monthRoll.style.transform = `translateX(${state.currentPosition}px)`;
    publish("increment_year", yearInput);
    calculateDayToHighlight(state, daysArray);
    publish("fill_days_in_month", daysArray, state);
    return;
  }
  state.currentPosition += -150;
  state.currentMonth += 1;
  state.dayOfTheFirstOfTheMonth = new Date(
    state.currentYear,
    state.currentMonth,
    1
  ).getDay();
  monthRoll.style.transform = `translateX(${state.currentPosition}px)`;
  calculateDayToHighlight(state, daysArray);
  publish("fill_days_in_month", daysArray, state);
}

function translateMonthRollBackward(
  monthRoll: HTMLDivElement,
  state: ICalendarState,
  yearInput: HTMLInputElement,
  daysArray: HTMLSpanElement[]
) {
  if (state.currentPosition === -16) {
    state.currentPosition = -1666;
    state.currentMonth = 11;
    state.dayOfTheFirstOfTheMonth = new Date(state.currentYear, 0, 1).getDay();
    monthRoll.style.transform = `translateX(${state.currentPosition}px)`;
    publish("decrement_year", yearInput);
    calculateDayToHighlight(state, daysArray);
    publish("fill_days_in_month", daysArray, state);
    return;
  }
  state.currentPosition += 150;
  state.currentMonth -= 1;
  state.dayOfTheFirstOfTheMonth = new Date(
    state.currentYear,
    state.currentMonth,
    1
  ).getDay();
  monthRoll.style.transform = `translateX(${state.currentPosition}px)`;
  calculateDayToHighlight(state, daysArray);
  publish("fill_days_in_month", daysArray, state);
}

export const fillDaysInMonth = (
  daysArray: HTMLSpanElement[],
  state: ICalendarState
) => {
  const NumberOfDaysInMonth: number[] = [
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
  ];
  daysArray.forEach((day: HTMLSpanElement) => (day.textContent = ""));
  const arr = daysArray.slice(
    state.dayOfTheFirstOfTheMonth,
    NumberOfDaysInMonth[state.currentMonth] + state.dayOfTheFirstOfTheMonth
  );
  arr.forEach((day: HTMLSpanElement, index: number) => {
    day.textContent = "";
    day.textContent = `${index + 1}`;
  });
};

export const updateCalanderOnYearChanged = (
  state: ICalendarState,
  yearInput: HTMLInputElement,
  daysArray: HTMLSpanElement[]
) => {
  state.currentYear = parseInt(yearInput.value);
  state.dayOfTheFirstOfTheMonth = new Date(
    state.currentYear,
    state.currentMonth,
    1
  ).getDay();
  publish("fill_days_in_month", daysArray, state);
};

export default function Subscribe() {
  subscribe("increment_year", incrementYear);
  subscribe("decrement_year", decrementYear);
  subscribe("translate_month_roll_forward", translateMonthRollForward);
  subscribe("translate_month_roll_backward", translateMonthRollBackward);
  subscribe("fill_days_in_month", fillDaysInMonth);
  subscribe("year_changed", updateCalanderOnYearChanged);
}

import { fillDaysInMonth } from "./subscribers";
import { ICalendarState } from "./types";

export const setInitialState = (
  monthRoll: HTMLDivElement,
  state: ICalendarState,
  yearInput: HTMLInputElement,
  daysArray: HTMLSpanElement[]
) => {
  monthRoll.style.display = "grid";
  state.currentPosition = state.currentMonth * -150 - 16;
  monthRoll.style.transform = `translateX(${state.currentPosition}px)`;
  yearInput.value = `${state.currentYear}`;
  daysArray[new Date(Date.now()).getDate() - 1].classList.add("current-day");
  fillDaysInMonth(daysArray, state);
};

export const calculateDayToHighlight = (
  state: ICalendarState,
  daysArray: HTMLSpanElement[]
) => {
  if (
    state.currentMonth === new Date(Date.now()).getMonth() &&
    state.currentYear === new Date(Date.now()).getFullYear()
  ) {
    daysArray[new Date(Date.now()).getDate() - 1].classList.add("current-day");
  } else {
    daysArray[new Date(Date.now()).getDate() - 1].classList.remove(
      "current-day"
    );
  }
};

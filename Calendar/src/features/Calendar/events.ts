import { publish } from "./observer";
import { ICalendarState } from "./types";

export const handleNextButtonClick = (
  monthRoll: HTMLDivElement,
  state: ICalendarState,
  yearInput: HTMLInputElement,
  daysArray: HTMLSpanElement[]
) => {
  publish(
    "translate_month_roll_backward",
    monthRoll,
    state,
    yearInput,
    daysArray
  );
};

export const handlePreviousButtonClick = (
  monthRoll: HTMLDivElement,
  state: ICalendarState,
  yearInput: HTMLInputElement,
  daysArray: HTMLSpanElement[]
) => {
  publish(
    "translate_month_roll_forward",
    monthRoll,
    state,
    yearInput,
    daysArray
  );
};

export const handleYearChangedEvent = (
  state: ICalendarState,
  yearInput: HTMLInputElement,
  daysArray: HTMLSpanElement[]
) => {
  publish("year_changed", state, yearInput, daysArray);
};

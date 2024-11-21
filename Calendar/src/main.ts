import { setInitialState } from "./features/Calendar/utils";
import RegisterSubscribers from "./features/Calendar/subscribers";
import {
  handleNextButtonClick,
  handlePreviousButtonClick,
  handleYearChangedEvent,
} from "./features/Calendar/events";

import "./style.css";
import { CalendarState } from "./features/Calendar/calendar";

const previousButton = document.querySelector(".prev") as HTMLButtonElement;
const nextButton = document.querySelector(".next") as HTMLButtonElement;
const monthRoll = document.querySelector(".roll") as HTMLDivElement;
const yearInput = document.querySelector(".year") as HTMLInputElement;
const daysArray = [
  ...document.querySelectorAll(".number-day"),
] as HTMLSpanElement[];

const state = new CalendarState();

RegisterSubscribers();
setInitialState(monthRoll, state, yearInput, daysArray);

// reduce the month
previousButton?.addEventListener("click", () =>
  handleNextButtonClick(monthRoll, state, yearInput, daysArray)
);

// advance the month
nextButton?.addEventListener("click", () =>
  handlePreviousButtonClick(monthRoll, state, yearInput, daysArray)
);

// update calander when year is changed
yearInput?.addEventListener("change", () =>
  handleYearChangedEvent(state, yearInput, daysArray)
);

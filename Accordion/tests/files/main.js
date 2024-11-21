import Accordion from 'accordion.js';


addEventListener('DOMContentLoaded', () => {
  Accordion("acc1", true, { backgroundColor: "rgb(88, 10, 161)", color: "white", hover: "white" }); // true for alternating accordion, false for regular accordion;
  Accordion("acc2", false, { backgroundColor: "rgb(88, 10, 161)", color: "white", hover: "white" }); // true for alternating accordion, false for regular accordion;
});
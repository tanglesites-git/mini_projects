const accordionButtons = [...document.querySelectorAll(".ts-accordion-button")];
let context;
function setContext(strategy) {
  context = strategy;
}
function execute(id, options) {
  const container = document.querySelector("#" + id);
  const buttons = [...container.querySelectorAll(".ts-accordion-button")];
  buttons === null || buttons === void 0 ? void 0 : buttons.forEach((x) => {
    x.style.setProperty("--button-color", options.backgroundColor);
    x.style.setProperty("--button-hover", options.hover);
    x.style.setProperty("--text-color", options.color);
    x.addEventListener("click", context);
  });
}
function animate(panel, paragraph, icon) {
  if (panel.style.maxHeight) {
    panel.style.maxHeight = "";
    paragraph.style.paddingBlock = "0.8rem";
    icon.style.transform = "rotate(0deg)";
    panel.dataset.expanded = "false";
    return;
  }
  panel.style.maxHeight = panel.scrollHeight + "px";
  paragraph.style.paddingBlock = "";
  icon.style.transform = "rotate(180deg)";
  panel.dataset.expanded = "true";
}
function getPanel(button) {
  return button === null || button === void 0 ? void 0 : button.nextElementSibling;
}
function getParagraph(panel) {
  return panel === null || panel === void 0 ? void 0 : panel.firstElementChild;
}
function getIcon(button) {
  return button === null || button === void 0 ? void 0 : button.lastElementChild;
}
function openAlternatingAccordionOnClickWithTransition(e) {
  const target = e.target;
  if (target.classList.contains("ts-accordion-button")) {
    const panel = getPanel(target);
    const paragraph = getParagraph(panel);
    const icon = getIcon(target);
    animate(panel, paragraph, icon);
    accordionButtons.forEach((x) => {
      if (x === target) {
        return;
      }
      const altPanel = getPanel(x);
      const altParagraph = getParagraph(altPanel);
      const altIcon = getIcon(x);
      altPanel.style.maxHeight = "";
      altParagraph.style.paddingBlock = "0.8rem";
      altIcon.style.transform = "rotate(0deg)";
    });
  }
}
function openAccordionOnClickWithTransition2(e) {
  const target = e.target;
  if (target.classList.contains("ts-accordion-button")) {
    const panel = getPanel(target);
    const paragraph = getParagraph(panel);
    const icon = getIcon(target);
    animate(panel, paragraph, icon);
  }
}
function Accordion(id, alternate = true, options = { backgroundColor: "blue", color: "white", hover: "white" }) {
  if (alternate) {
    setContext(openAlternatingAccordionOnClickWithTransition);
    execute(id, options);
    return;
  }
  else {
    setContext(openAccordionOnClickWithTransition2);
    execute(id, options);
    return;
  }
}
export default Accordion;

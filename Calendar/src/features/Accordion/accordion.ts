interface TAccordionOptions {
  backgroundColor: string;
  color: string;
  hover: string;

}

const accordionButtons = [...document.querySelectorAll(".ts-accordion-button")] as HTMLButtonElement[];
let context: () => void;

function setContext(strategy: any) {
  context = strategy;
}

function execute(id: string, options: TAccordionOptions) {
  const container = document.querySelector("#"+id) as HTMLElement;
  const buttons = [...container.querySelectorAll(".ts-accordion-button")] as HTMLButtonElement[];
  buttons?.forEach((x: HTMLButtonElement) => {
    x.style.setProperty("--button-color", options.backgroundColor);
    x.style.setProperty("--button-hover", options.hover);
    x.style.setProperty("--text-color", options.color);
    x.addEventListener("click", context);
  });
}

function animate(panel: HTMLElement, paragraph: HTMLElement, icon: HTMLElement) {
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

function getPanel(button: HTMLButtonElement) {
  return button?.nextElementSibling as HTMLElement;
}

function getParagraph(panel: HTMLElement) {
  return panel?.firstElementChild as HTMLElement;
}

function getIcon(button: HTMLButtonElement) {
  return button?.lastElementChild as HTMLElement;
}

function openAlternatingAccordionOnClickWithTransition(e: Event) {
  const target = e.target as HTMLElement;

  if(target.classList.contains("ts-accordion-button")) {
    const panel = getPanel(target as HTMLButtonElement);
    const paragraph = getParagraph(panel);
    const icon = getIcon(target as HTMLButtonElement);
    animate(panel, paragraph, icon);
    
    accordionButtons.forEach((x: HTMLButtonElement) => {
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

function openAccordionOnClickWithTransition2(e: Event) {
  const target = e.target as HTMLElement;

  if (target.classList.contains("ts-accordion-button")) {
    const panel = getPanel(target as HTMLButtonElement);
    const paragraph = getParagraph(panel);
    const icon = getIcon(target as HTMLButtonElement);
    animate(panel, paragraph, icon);
  }
}

function Accordion(id: string, alternate: boolean = true, options: TAccordionOptions = { backgroundColor: "blue", color: "white", hover: "white" }) {

  if(alternate) {
    setContext(openAlternatingAccordionOnClickWithTransition);
    execute(id, options);
    return;
  }else{
    setContext(openAccordionOnClickWithTransition2);
    execute(id, options);
    return;
  }

  
}


export default Accordion;


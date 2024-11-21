# Accordion

## Alternating Accordion
> An accordion web component is a UI element used to display collapsible content panels. It organizes information into sections, allowing users to expand and collapse specific sections by clicking on headers. This helps manage large amounts of content in a compact space, improving readability and navigation. Traditionally, an accordion works by toggling the visibility of the content panel when a user interacts with the header, often using JavaScript to control the expand/collapse behavior, and CSS for smooth transitions. It's commonly used in FAQs, menus, and forms.

## Traditional Accordion
> An alternating accordion is a variation of the accordion web component where only one section can be open at a time. When a user clicks to expand a section, any previously opened section automatically collapses. This ensures that only the relevant content is visible at once, reducing clutter and enhancing user focus. Alternating accordions are commonly used in interfaces that need to present multiple sections of content without overwhelming the user. The functionality is typically achieved using JavaScript to toggle visibility, ensuring that opening one section closes the others.

```ts
const accordionButtons = [...document.querySelectorAll(".ts-accordion-button")] as HTMLButtonElement[];
let context: () => void;

function setContext(strategy: any) {
  context = strategy;
}

function execute(id: string) {
    const container = document.querySelector("#"+id) as HTMLElement;
    const buttons = [...container.querySelectorAll(".ts-accordion-button")] as HTMLButtonElement[];
    buttons?.forEach((x: HTMLButtonElement) => {
    x.addEventListener("click", context);
  });
}

function animate(panel: HTMLElement, paragraph: HTMLElement, icon: HTMLElement) {
  if (panel.style.maxHeight) {
    panel.style.maxHeight = "";
    paragraph.style.paddingBlock = "0.8rem";
    icon.style.transform = "rotate(0deg)";
    return;
  }
  panel.style.maxHeight = panel.scrollHeight + "px";
  paragraph.style.paddingBlock = "";
  icon.style.transform = "rotate(180deg)";
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

export function openAlternatingAccordionOnClickWithTransition(e: Event) {
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

export function openAccordionOnClickWithTransition2(e: Event) {
  const target = e.target as HTMLElement;

  if (target.classList.contains("ts-accordion-button")) {
    const panel = getPanel(target as HTMLButtonElement);
    const paragraph = getParagraph(panel);
    const icon = getIcon(target as HTMLButtonElement);
    animate(panel, paragraph, icon);
  }
}

function Accordion(id: string, alternate: boolean = true) {
  if(alternate) {
    setContext(openAlternatingAccordionOnClickWithTransition);
    execute(id);
    return;
  }else{
    setContext(openAccordionOnClickWithTransition2);
    execute(id);
    return;
  }
}


export default Accordion;
```

> This JavaScript code manages the behavior of an accordion interface where buttons trigger the expansion or collapse of associated content panels. It offers two modes of operation: one that closes all other open panels when a new one is clicked, and another that allows multiple panels to remain open at the same time.

The code begins by selecting all HTML elements with the class `.ts-accordion-button` and stores them in an array of HTMLButtonElement objects.
```ts
const accordionButtons = [...document.querySelectorAll(".ts-accordion-button")] as HTMLButtonElement[];
```

> These buttons control the accordion's interaction. To manage different behaviors, a function reference called context is used. This context function will later be assigned one of two strategies for handling button clicks. The setContext function is responsible for setting this strategy, while execute attaches the context function as an event listener to buttons inside a specified container. The event listener reacts to the clicks and applies the chosen behavior.
```ts
let context: () => void;

function setContext(strategy: any) {
  context = strategy;
}

function execute(id: string) {
    const container = document.querySelector("#"+id) as HTMLElement;
    const buttons = [...container.querySelectorAll(".ts-accordion-button")] as HTMLButtonElement[];
    buttons?.forEach((x: HTMLButtonElement) => {
      x.addEventListener("click", context);
  });
}
. . .
```

> A core function, animate, controls how a panel's visibility toggles. It either collapses or expands a panel by manipulating the maxHeight style property of the panel, adjusts the padding of the text inside, and rotates an associated icon to indicate whether the panel is open or closed.

```ts
function animate(panel: HTMLElement, paragraph: HTMLElement, icon: HTMLElement) {
  if (panel.style.maxHeight) {
    panel.style.maxHeight = "";
    paragraph.style.paddingBlock = "0.8rem";
    icon.style.transform = "rotate(0deg)";
    return;
  }
  panel.style.maxHeight = panel.scrollHeight + "px";
  paragraph.style.paddingBlock = "";
  icon.style.transform = "rotate(180deg)";
}
```

> The code also includes helper functions like `getPanel`, `getParagraph`, and `getIcon`, which retrieve specific elements such as the panel linked to a button, the paragraph inside the panel, and the icon inside the button.

```ts
function getPanel(button: HTMLButtonElement) {
  return button?.nextElementSibling as HTMLElement;
}

function getParagraph(panel: HTMLElement) {
  return panel?.firstElementChild as HTMLElement;
}

function getIcon(button: HTMLButtonElement) {
  return button?.lastElementChild as HTMLElement;
}
```

> The function `openAlternatingAccordionOnClickWithTransition` provides the behavior where only one accordion panel can be open at a time. When a button is clicked, the associated panel is expanded, while any previously opened panels are collapsed. In contrast, the function `openAccordionOnClickWithTransition2` allows multiple panels to remain open simultaneously. It only toggles the state of the clicked panel without affecting others.

```ts
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
```

> The Accordion function is the main entry point for setting up the accordion system. It accepts an id for the container holding the accordion buttons and a boolean flag alternate. If alternate is true, it sets up the accordion to behave in a way where only one panel can be open at a time. If false, it configures the accordion to allow multiple panels to be open. The context strategy pattern is used here to assign the appropriate behavior dynamically based on the configuration.

```ts
function Accordion(id: string, alternate: boolean = true) {
  if(alternate) {
    setContext(openAlternatingAccordionOnClickWithTransition);
    execute(id);
    return;
  }else{
    setContext(openAccordionOnClickWithTransition2);
    execute(id);
    return;
  }
}
```
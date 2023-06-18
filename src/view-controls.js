import { renderStackAndHistory } from "./render";

function _getOtherSiblings(element, parent) {
  const children = [...parent.children];
  return children.filter((child) => child !== element);
}

const _changeView = (event) => {
  const selectedView = event.currentTarget;

  // toggle enabled class on
  selectedView.classList.toggle("single-control-enabled", true);

  // toggle enabled class off for other view elements
  const siblings = _getOtherSiblings(selectedView, selectedView.parentNode);
  siblings.forEach((sibling) => {
    sibling.classList.toggle("single-control-enabled", false);
  });

  // adjust custom properties to fit selected view
  if (selectedView.id === "view-pancakes") {
    document.documentElement.style.setProperty(
      "--pancake-visibility",
      "visible"
    );
    document.documentElement.style.setProperty("--value-visibility", "hidden");
  } else if (selectedView.id === "view-numbers") {
    document.documentElement.style.setProperty(
      "--pancake-visibility",
      "hidden"
    );
    document.documentElement.style.setProperty("--value-visibility", "visible");
    document.documentElement.style.setProperty(
      "--value-color",
      "var(--primary-color)"
    );
    document.documentElement.style.setProperty(
      "--value-color-hover",
      "var(--tertiary-color)"
    );
  } else if (selectedView.id === "view-both") {
    document.documentElement.style.setProperty(
      "--pancake-visibility",
      "visible"
    );
    document.documentElement.style.setProperty("--value-visibility", "visible");
    document.documentElement.style.setProperty(
      "--value-color",
      "var(--secondary-color)"
    );
    document.documentElement.style.setProperty(
      "--value-color-hover",
      "var(--secondary-color)"
    );
  } else {
    throw "Incorrect click.";
  }
};

const addViewListeners = (stack) => {
  const views = [...document.getElementById("view").children];
  views.forEach((view) => {
    view.addEventListener("click", (event) => {
      _changeView(event);
      renderStackAndHistory(stack);
    });
  });
};

export default addViewListeners;

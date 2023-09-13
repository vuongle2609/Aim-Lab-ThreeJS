export class RenderPage {
  element?: string | HTMLElement;

  render() {
    const app = document.querySelector("#app");

    if (app && this.element) {
      if (typeof this.element === "string") app.innerHTML = this.element;
      else if (typeof this.element === "object") app.appendChild(this.element)
    }
  }
}

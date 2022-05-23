class Notification {
  element;
  timerId;

  constructor(message = '', params) {
    this.message = message;
    this.type = params.type;
    this.duration = params.duration;

    this.render();
  }

  show(parent = document.body) {
    parent.append(this.element);
    this.timerId = setTimeout(() => {
      this.remove();
    }, this.duration);
  }

  getTemplate() {
    return `
      <div class="notification ${this.type}">
        <h1>${this.message}</h1>
      </div>
    `;
  }

  render() {
    const element = document.createElement('div'); // (*)

    element.innerHTML = this.getTemplate();

    this.element = element.firstElementChild;
  }

  remove() {
    clearTimeout(this.timerId);

    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.remove();
  }
}

module.exports = { Notification };

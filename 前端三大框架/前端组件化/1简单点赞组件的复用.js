// mount
// -> renderDOM -> createDomFromString(+ dom.event) return dom
// -> onStateChange -> insertBefore removeChild
// event -> setState -> onSateChange

// 挂载定义
const mount = (componentInstance, container) => {
  // append the dom to container
  container.appendChild(componentInstance.renderDom());
  componentInstance.onStateChange = (oldEl, newEl) => {
    container.insertBefore(newEl, oldEl);
    container.removeChild(oldEl);
  };
};

// createdom by string 定义
const createDomByString = htmlStr => {
  const div = document.createElement('div');
  div.innerHTML = htmlStr;
  return div;
};

// 组件定义
class Component {
  constructor(props = {}) {
    this.props = props;
  }

  renderDom() {
    // create dom node
    this.el = createDomByString(this.render());
    if (this.onClick) {
      this.el.addEventListener('click', this.onClick.bind(this), false);
    }
    return this.el;
  }

  setState(state) {
    const oldEl = this.el;
    this.state = state;
    const newEl = this.renderDom();

    this.onStateChange(oldEl, newEl);
  }
}

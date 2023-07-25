import { each } from 'lodash';

export default class Hover {
  constructor({ element, elements }) {
    this.element = element;
    this.selectorItems = elements;

    this.element.classList.add('animateOut');

    this.addListeners();
  }

  addListeners() {
    this.element.addEventListener('mouseenter', this.animateIn.bind(this));
    this.element.addEventListener('mouseleave', this.animateOut.bind(this));

    if (!this.selectorItems.title) return;

    this.selectorItems.title.addEventListener(
      'mouseenter',
      this.animateIn.bind(this)
    );

    this.selectorItems.title.addEventListener(
      'mouseleave',
      this.animateOut.bind(this)
    );
  }

  animateIn() {
    this.element.classList.remove('animateOut');
    this.element.classList.add('animateIn');

    if (!this.selectorItems.title) return;
    each(this.selectorItems, (title) => {
      title.style.visibility = 'visible';
    });
  }
  animateOut() {
    this.element.classList.remove('animateIn');
    this.element.classList.add('animateOut');

    if (!this.selectorItems.title) return;
    each(this.selectorItems, (title) => {
      title.style.visibility = 'hidden';
    });
  }
}

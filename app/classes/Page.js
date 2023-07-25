import { each } from 'lodash';
import map from 'lodash/map';

import GSAP from 'gsap';
import Hover from '../animations/hover';
import Heading from '../animations/Heading';

export default class Page {
  constructor({ element, elements, id }) {
    this.element = element;
    this.id = id;
    this.selectorChilderen = {
      ...elements,
      animationHover: '[data-animation="hover"]',
      animationReveal: '[data-animation="reveal"]',
    };

    this.create();
    this.createAnimation();
  }

  create() {
    this.elements = {};

    each(this.selectorChilderen, (entry, key) => {
      if (
        entry instanceof window.HTMLElement ||
        entry instanceof window.NodeList
      ) {
        this.elements[key] = entry;
      } else if (Array.isArray(entry)) {
        this.elements[key] = entry;
      } else {
        this.elements[key] = document.querySelectorAll(entry);

        if (this.elements[key].length === 0) {
          this.elements[key] = null;
        }

        if (this.elements[key].length === 1) {
          this.elements[key] = document.querySelector(entry);
        }
      }
    });
  }

  createAnimation() {
    this.animations = [];

    this.animationHover = map(
      this.elements.animationHover,
      (element, index) => {
        const elements = { title: this.elements.collectionTitle[index] };
        return new Hover({ element, elements });
      }
    );

    this.animations.push(...this.animationHover);

    this.animationHeading = map(this.elements.animationReveal, (element) => {
      return new Heading({ element });
    });

    this.animations.push(...this.animationHeading);
  }

  show() {
    this.animation = GSAP.timeline();

    this.animation.fromTo(
      this.element,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      }
    );
    this.animation.fromTo(
      this.elements.collection,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      }
    );
  }

  update() {
    console.log('updating page');
  }
}

import Animation from '../classes/Animation';
import GSAP from 'gsap';

export default class Heading extends Animation {
  constructor({ element }) {
    super({ element });
  }

  animateIn() {
    this.timeline = GSAP.timeline({
      delay: 0.5,
    });

    this.timeline.set(this.element, {
      autoAlpha: 1,
    });

    this.timeline.fromTo(
      this.element,
      {
        y: '100%',
      },
      {
        y: '0%',
      }
    );
  }

  animateOut() {
    GSAP.set(this.element, {
      autoAlpha: 0,
    });
  }
}

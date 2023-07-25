import { each } from 'lodash';
import Component from '../classes/Components';
import GSAP from 'gsap';

export default class Preloader extends Component {
  constructor() {
    super({
      element: '.preloader',
      elements: {
        title: '.preloader__title',
        text: '.preloader__text',
        loader: '.preloader__loader',
        background: '.preloader__background',
        images: document.querySelectorAll('img'),
      },
    });

    this.length = 0;

    document.body.style.overflowY = 'hidden';

    this.element.style.position = 'fixed';

    this.createLoader();
  }

  createLoader() {
    each(this.elements.images, (image) => {
      image.src = image.getAttribute('data-src');
      image.onload = () => this.onAssetLoaded(image);
    });
  }

  onAssetLoaded() {
    this.length += 1;

    const percentage = this.length / this.elements.images.length;

    this.elements.loader.style.opacity = percentage;

    if (percentage === 1) {
      this.onLoaded();
    }
  }

  onLoaded() {
    return new Promise((resolve) => {
      this.timeline = GSAP.timeline({
        delay: 1,
      });

      this.timeline.to(this.elements.text, {
        y: '100%',
      });

      this.timeline.to(this.elements.loader, {
        y: '100%',
      });

      this.timeline.to(this.elements.background, {
        height: '100%',
      });

      this.timeline.to(this.element, {
        height: '0%',
        duration: 1,
      });

      this.timeline.to(this.elements.background, {
        y: '-100%',
        duration: 1,
      });

      this.timeline.call(() => {
        this.emit('completed');
      });
    });
  }

  destroy() {
    document.body.style.overflowY = '';
    this.element.parentNode.removeChild(this.element);
  }
}

import Relative from './animations/Relative';
import Preloader from './components/Preloader';
import Home from './pages/home/Home';

class App {
  constructor() {
    this.createPreloader();
    this.createContent();
    this.createPage();
    this.createCanvas();
    this.update();
  }

  createPreloader() {
    this.preloader = new Preloader();
    this.preloader.once('completed', this.onPreloaded.bind(this));
  }

  createContent() {
    this.content = document.querySelector('.content');
    this.template = this.content.getAttribute('data-template');
  }

  createPage() {
    this.pages = {
      home: new Home(),
    };

    this.page = this.pages[this.template];
  }

  createCanvas() {
    this.canvas = new Relative();
  }

  onPreloaded() {
    this.preloader.destroy();
    this.page.show();
  }

  update() {
    if (this.page && this.page.update) {
      this.page.update();
    }

    if (this.canvas && this.canvas.update) {
      this.canvas.update();
    }

    this.frame = window.requestAnimationFrame(this.update.bind(this));
  }
}

new App();

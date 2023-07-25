import Page from '../../classes/Page';

export default class Home extends Page {
  constructor() {
    super({
      id: 'Home',
      element: '.home',
      elements: {
        navigation: document.querySelector('.navigation'),
        collectionTitle: '[data-title]',
        collection: '.collection',
      },
    });
  }
}
//app -> createPage() => Home => Page => create() => cl

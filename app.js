require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const Prismic = require('@prismicio/client');

// if (module.hot) {
//   module.hot.accept();
// }

const handleLinkResolver = (doc) => {
  if (doc === 'Valentina') {
    return '/valentina';
  }
  if (doc === 'Aura Beige') {
    return '/aura';
  }
  if (doc === 'Nectar Blue') {
    return '/nectar';
  }
  return '/';
};

const initApi = (req) => {
  return Prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req,
    fetch,
  });
};

const handleRequest = async (api) => {
  const [home, preloader, navigation] = await Promise.all([
    api.getSingle('home'),
    api.getSingle('preloader'),
    api.getSingle('navigation'),
  ]);

  return { home, preloader, navigation };
};

app.use(express.static(path.join(__dirname, 'public')));

//Middleware to add prismic content
app.use((req, res, next) => {
  res.locals.ctx = {
    endpoint: process.env.PRISMIC_ENDPOINT,
    linkResolver: handleLinkResolver,
  };

  res.locals.Prismic = Prismic;
  res.locals.Link = handleLinkResolver;
  next();
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.basedir = app.get('views');
('');

app.get('/', async (req, res) => {
  const api = await initApi(req);
  const defaults = await handleRequest(api);

  res.render('pages/home', {
    ...defaults,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

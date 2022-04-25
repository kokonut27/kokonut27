const express = require("express");
const app = express();
const path = require('path');
const multer = require('multer');
const upload = multer();
const cookieParse = require('cookie-parser');
const github = require('octonode');
const client = github.client();

client.get('/users/kokonut27', {}, function (err, status, body, headers) {
  try {
    app.locals.avatar = body.avatar_url;
  } catch (e) {
    console.log(e, err);
  };
});

app.use(cookieParse());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(upload.array());

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.enable('verbose errors');


app.get("/", (req, res) => {
  res.render('index');
});

app.get("/socials", (req, res) => {
  res.render('socials');
});

app.get("/projects", (req, res) => {
  res.render('projects');
});

app.get("/proficiencies", (req, res) => {
  res.render('proficiencies');
});

app.get("/about", (req, res) => {
  res.render('about');
});

app.get('/404', (req, res, next) => {
  next();
});

app.use((req, res, next) => {
  res.status(404);

  res.format({
    html: () => {
      res.render('404', { 
        url: req.url
      });
    },
    json: () => {
      res.json({ error: 'Not found' })
    },
    default: () => {
      res.type('txt').send('Not found')
    }
  })
});

app.use((err, req, res, next) => {
  console.log('500 error has been reached');
  res.redirect('/');
});

app.listen(8080, () => {
  console.log('portfolio is running!');
});

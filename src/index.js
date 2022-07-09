const path = require('path');

const express = require('express');
const app = express();

const webRoutes = require('./routes/web.routes');

// Config

const port = process.env.PORT || 4000;
app.set('port', port);
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Routes

app.use('/', webRoutes);

// Error Handler-404 Not Found

app.all('*', (req, res) => {
  res.render('error', {
    title: 'Error',
    statusCode: 404
  })
});


// Init

app.listen(app.get('port'), () => console.log(`App is running on port: ` + app.get('port')));

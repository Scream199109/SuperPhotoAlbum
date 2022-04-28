const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const PORT = process.env.PORT ?? 3000;
const { v4: uuidv4 } = require('uuid');

app.use(fileUpload({}))

const config = require('./config/config');
const authRouter = require('./routes/auth.routes');
const mainRouter = require('./routes/main.routes');
const cardRouter = require('./routes/card.routes');

config(app);
app.use('/auth', authRouter);
app.use('/', mainRouter);
app.use('/', cardRouter);
app.use('/', cardRouter);
app.use('/error', (req, res) => {
  res.render('error');
});

app.use('/', require('./routes/galery.routes'))

app.listen(PORT, () => console.log(`Server started at Port${PORT}...`));

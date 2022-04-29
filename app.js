
const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(fileUpload({}))

const config = require("./config/config");
const authRouter = require("./routes/auth.routes");
// const mainRouter = require("./routes/main.routes");
const cardRouter = require("./routes/card.routes");
const albumRouter = require("./routes/mainAlbums.route");
const galeryRouter = require('./routes/galery.routes');
// const zipRouter = require('./routes/zip.routes');

config(app);
app.use("/auth", authRouter);
// app.use('/', zipRouter)
// app.use("/", mainRouter);
app.use("/", cardRouter);
app.use("/", cardRouter);
app.use("/", albumRouter);
app.use('/', galeryRouter)
app.get("/error", (req, res) => {
  res.render("error");
});
// app.get("/super", (req, res) => {
//   res.render("super");
// });

app.listen(PORT, () => console.log(`Server started at Port${PORT}...`));

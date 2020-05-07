var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const Handlebars = require('handlebars');
var expressHbs = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

//MONGOOSE======================================================================
var mongoose = require('mongoose');
// Для подключения к БД shopping применяем метод connect()
mongoose.connect('mongodb://localhost:27017/blog', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log(Error, err.message);
    });

//==============================================================================
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
//==============================================================================
var app = express();

//HANDLEBARS====================================================================
// устанавливаем настройки для файлов layout
app.engine('.hbs', expressHbs({
    layoutsDir: "views/layouts",
    defaultLayout: 'layout',
    extname: '.hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', '.hbs');
//==============================================================================

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//==============================================================================
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
//==============================================================================
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
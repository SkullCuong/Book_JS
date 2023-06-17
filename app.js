const express = require("express");
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const axios = require('axios');
const supplierRoute = require("./routes/api/SupplierRoute");
const bookRoute = require("./routes/api/BookRoute");
const supplier = require("./routes/app/SupplierRoute")
const book = require("./routes/app/BookRoute")
const db = require("./models");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/supplier",supplierRoute);
app.use("/api/book",bookRoute);
app.use("/supplier",supplier);
app.use("/book",book);
app.engine('hbs', exphbs.engine({ defaultLayout: 'main',extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.set('port',process.env.PORT || 3000);
db.sequelize.sync().then((req) =>{
    app.listen(app.get('port'),() =>{
        console.log(`Server is running at ${app.get('port')}`)
    });
    
});

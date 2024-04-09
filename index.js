import express from "express";
import api from "./src/router.js";
import session from "express-session";
// const dotenv = require('dotenv');
// dotenv.config();
const app = express();

// Sử dụng tuyến đường API của sản phẩm
app.use('/api', api);

app.use(session({
    secret: 'Minhtien1',
    resave: false,
    saveUninitialized: false
}));
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server đã khởi động trên cổng ${PORT}`));

export default app;
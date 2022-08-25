require ("dotenv").config();
const koa = require("koa");
const koaRouer = require("@koa/router");
const cors = require("@koa/cors");
const bodyParser = require("koa-bodyparser");
const json = require("koa-bodyparser");
const courseRoutes = require("./routes/Course.route");
const { dbConnect } = require("./dal/index");
const userRoutes = require("./routes/user.route")


const app = new koa();
const router = new koaRouer();

app.use(cors());
app.use(bodyParser());
app.use(json());
app.use(router.routes()).use(router.allowedMethods());
app.use(courseRoutes.routes());
app.use(userRoutes.routes());

router.get("/",(ctx) =>{
    ctx.body = {message:"course management api"};
});

app.listen(9000, () =>{
    dbConnect();
    console.log("server is running on port http://localhost:9000")
});
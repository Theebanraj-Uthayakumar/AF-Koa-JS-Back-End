const KoaRouter = require("@koa/router");
const router = new KoaRouter({ prefix: "/user" });

const { registerUser, loginUser } = require("../api/user.api");

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
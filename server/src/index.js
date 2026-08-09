import expr from "express";
import { mainRouter } from "./routers/mainRouter.js";
import cors from "cors";
const app = expr();
const port = 3000;
app.use(cors())
app.use(expr.json())
app.use("/api/v1", mainRouter)
app.listen(port, () => console.log(`Api running at PORT ${port}`))
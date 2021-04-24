import * as express from "express";
import router from "./route";
const app = express();
const port = 3000
app.use(router);

app.listen(port, () => {
    // @ts-ignore
    console.log(`Example app listening at http://localhost:${port}`)
})
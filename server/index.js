import express,{ json } from "express";
import cors  from "cors";
export const app = express();
import { create } from "../server/src/router/router.js";

app.use(cors());
app.use(json());
app.use(create)

app.set('port',3001);
app.listen(app.get('port'),()=>{
    console.log(`corriendo en el puerto  ${app.get('port')}`);
})
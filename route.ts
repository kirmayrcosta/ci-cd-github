import { Router, Request, Response, NextFunction} from 'express';

const Route = Router();

Route.get("/",  ( req:Request, res: Response, next:NextFunction)=>{
        res.json({
            api: "API WORKS WITH GITHUB ACTIONS =) Exemplo Pipeline"
        });
        return next()
    })

export default Route;

import express, {Request, Response, NextFunction} from 'express';
import userRoute from './routes/user.route';

const app = express();
//configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//configurações de rotas
app.use(userRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) =>{
    res.status(200).send({foo: 'Sucesso!'});
});

//inicialização do servidor
app.listen(3000, () =>{
    console.log('Aplicação executando na porta 3000!');
})
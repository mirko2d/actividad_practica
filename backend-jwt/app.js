// server.js
import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import cors from 'cors';
import morgan from "morgan"
import { sessionRoutes } from './src/routes/routes.js';
import { variablesBd } from './src/config/config.js';

const app = express();
app.use(cors({
    origin: ['http://localhost:5500', 'http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: variablesBd.SECRET_SESSION,     resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));

// Endpoint de inicio de sesión (login)


// Endpoint de cierre de sesión (logout)
app.use(sessionRoutes)
// Servidor escuchando
app.listen(variablesBd.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${variablesBd.PORT}`);
});

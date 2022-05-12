import express from "express";
import cors from "cors";
import 'express-async-errors';
import {handleError, ValidationError} from "./utils/errors";

const app = express();

app.use(cors({
    origin: 'https://localhost:3000',
}));

app.use(express.json());

// Routes...
// app.get('/', async (req, res) => {
//     throw new ValidationError('Dammm!');
// });

app.use(handleError);

app.listen(3001, '0.0.0.0', () => {
    console.log(`Server listening on port http://localhost:3001`);
});
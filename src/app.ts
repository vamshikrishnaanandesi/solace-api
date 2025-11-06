import express from 'express';
import router from './routes/index';
import { errorHandler, logHandler } from './middlewares';

// Express application setup with Prettier and ESLint
const app = express();

app.use(express.json());
app.use(logHandler);
// Routes
// app.use('/', (req, res) => { res.send("Hello World"); });
app.use('/', router);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;

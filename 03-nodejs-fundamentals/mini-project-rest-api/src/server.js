import 'dotenv/config';
import express from 'express';
import { logger } from './middlewares/logger.middleware.js';
import articlesRouter from './routes/articles.route.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
    res.json({ message: 'Server API Artikel jalan!' });
});

app.use('/articles', articlesRouter);

app.listen(PORT, () => {
    console.log(`Server jalan di: http://localhost:${PORT}`);
});
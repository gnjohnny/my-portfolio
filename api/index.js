import express from 'express';
import cors from 'cors';
import "dotenv/config"

import emailRoutes from './routes/email.route.js';

const app = express();
const PORT = process.env.PORT;

console.log(__dirname)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
    }),
);

app.use('/api/send', emailRoutes);

app.listen(PORT, () => {
    console.log(`Server running  on port: ${PORT}`);
});

import express from 'express';
import cors from 'cors';
import "dotenv/config"
import path from "path"

import emailRoutes from './routes/email.route.js';

const app = express();
const PORT = process.env.PORT;
const __dirname = path.resolve()

console.log(__dirname)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: 'https://johnny-e0va.onrender.com/',
        credentials: true,
    }),
);

app.use('/api/send', emailRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/dist")))

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
    })
}

app.listen(PORT, () => {
    console.log(`Server running  on port: ${PORT}`);
});

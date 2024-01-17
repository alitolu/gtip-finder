const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { OpenAI } = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI(process.env.OPENAI_API_KEY);

app.post("/find-gtip-code", async (req, res) => {
    try {
        const { productName } = req.body;
        const prompt = `Ürün adı: ${productName}\nBu ürünün GTİP kodu nedir?`;

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 100,
        });

        const gtipCode = response.data.choices[0].text.trim();
        res.json({ gtipCode });
    } catch (error) {
        console.error(error);
        res.status(500).send("Sunucu hatası");
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Sunucu ${port} numaralı portta çalışıyor`));

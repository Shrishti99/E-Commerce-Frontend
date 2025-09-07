import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
const PORT = 3005;

// Middleware
app.use(cors());
app.use(express.json());

// Gemini setup
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });
// You can also try "gemini-1.5-pro" for deeper responses

// Chatbot route
app.post("/chatbot", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question || question.trim() === "") {
      return res.status(400).json("Please provide a valid question.");
    }

    const result = await model.generateContent(question);

    const answer = result.response.text();
    res.json(answer);
  } catch (error) {
    console.error("Error from Gemini:", error);
    res.status(500).json("Oops! Something went wrong with Gemini API.");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const openaiClient = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default openaiClient;

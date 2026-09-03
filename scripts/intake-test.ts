import { parseRequest } from "../src/intake";

// Check LLM intake on a few messy prompts (uses Groq; free).
const prompts = [
  "I need the cheapest haircut downtown",
  "find me a barber who can take me right now, I'm in a hurry",
  "cheapest oil change near Chicago",
  "closest florist that can deliver today",
];

for (const p of prompts) {
  const r = await parseRequest(p);
  console.log(`"${p}"`);
  console.log(`   -> category=${r.category}  location=${r.location}  bar=${r.bar}\n`);
}

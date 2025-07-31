// File: tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// File: postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

// File: src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// File: src/BioDictionaryApp.jsx
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const biologyWords = [
  { word: "জীববিজ্ঞান", meaning: "জীবনের বৈজ্ঞানিক অধ্যয়ন।", example: "জীববিজ্ঞানে জীবের গঠন ও কার্যপ্রণালী পড়ানো হয়।" },
  { word: "কোষ", meaning: "জীবের মৌলিক একক।", example: "সব জীবের গঠন কোষ দ্বারা হয়ে থাকে।" },
  { word: "ডিএনএ", meaning: "জীবদের বংশগতির ধারক।", example: "ডিএনএ তে আমাদের বংশগতির তথ্য থাকে।" },
  { word: "প্রোটিন", meaning: "কোষে বিভিন্ন কাজের জন্য দায়ী এক প্রকার জৈব পদার্থ।", example: "প্রোটিন কোষের গঠন ও কাজের জন্য অপরিহার্য।" },
  // ... আরও ৯৯৬টি শব্দ যুক্ত করতে পারো এখানে
];

export default function BioDictionaryApp() {
  const [search, setSearch] = useState("");

  const filteredWords = biologyWords.filter((entry) =>
    entry.word.includes(search) || entry.meaning.includes(search)
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📘 Bio Dictionary (Bengali)</h1>
      <Input
        placeholder="🔍 খুঁজুন: যেমন 'কোষ'"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />
      <div className="space-y-4">
        {filteredWords.map((entry, index) => (
          <Card key={index} className="rounded-2xl shadow p-4">
            <CardContent>
              <h2 className="text-xl font-semibold text-blue-600">{entry.word}</h2>
              <p className="text-gray-700">📖 {entry.meaning}</p>
              <p className="text-sm text-gray-500 mt-1">উদাহরণ: {entry.example}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// File: src/App.jsx
import BioDictionaryApp from "./BioDictionaryApp";

function App() {
  return <BioDictionaryApp />;
}

export default App;

// File: src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// File: index.html
<!DOCTYPE html>
<html lang="bn">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bio Dictionary</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
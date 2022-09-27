const DUMMY_DATA = [
  {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    question: "What is the capital of Germany?",
    answer: "Berlin",
    categories: ["Country", "Capital", "Germany"],
  },
  {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    question: "When did World War II end?",
    answer: "1945",
    categories: ["WWWII", "History"],
  },
  {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    question: "Which known city was destroyed by Mt. Vesuvius?",
    answer: "Pompeii",
    categories: ["Ancient", "History", "Italy", "Volcano"],
  },
  {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    question:
      "How many years was Philippines under the colonial rule of Spain?",
    answer: "333 years",
    categories: ["Colonialism", "History", "Spain", "Philippines"],
  },
];

export default DUMMY_DATA;

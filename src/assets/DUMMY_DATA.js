const DUMMY_DATA = [
  {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    question: "What is the capital of Germany?",
    answer: "Berlin",
    categories: ["Country", "Capital", "Germany"],
    bookmarked: false,
  },
  {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    question: "When did World War II end?",
    answer: "1945",
    categories: ["WWII", "History"],
    bookmarked: false,
  },
  {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    question: "Which known city was destroyed by Mt. Vesuvius?",
    answer: "Pompeii",
    categories: ["Ancient", "History", "Italy", "Volcano"],
    bookmarked: false,
  },
  {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    question:
      "How many years was Philippines under the colonial rule of Spain?",
    answer: "333 years",
    categories: ["Colonialism", "History", "Spain", "Philippines"],
    bookmarked: true,
  },
  {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    question: "Who created JavaScript?",
    answer: "Brendan Eich",
    categories: ["Programming", "JavaScript"],
    bookmarked: true,
  },
  {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    question: "What is the tallest building of the world called?",
    answer: "Burj Khalifa",
    categories: ["Skyscrappers", "Building"],
    bookmarked: false,
  },
  {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    question: "Who is the called the father of Modern Computer Science?",
    answer: "Alan Turing",
    categories: ["ComputerScience", "History"],
    bookmarked: false,
  },
];

export default DUMMY_DATA;

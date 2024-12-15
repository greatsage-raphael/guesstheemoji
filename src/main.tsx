import { Devvit, useState, useInterval, useAsync } from "@devvit/public-api";


const questions = [
  // Celebrity Quiz Questions
  {
    emoji: "🤱🚦 🚣 🐝",
    answer: "Margot Robbie",
    question: "Can you guess this celebrity from the emojis?",
    options: ["Emma Stone", "Margot Robbie", "Scarlett Johansson"],
  },
  {
    emoji: "🐝🔛🌊",
    answer: "Beyoncé",
    question: "Who is this emoji riddle referring to?",
    options: ["Rihanna", "Beyoncé", "Lady Gaga"],
  },
  {
    emoji: "✒️👋🅿️ 🛳️",
    answer: "Penelope Cruz",
    question: "Which celebrity do these emojis represent?",
    options: ["Salma Hayek", "Penelope Cruz", "Sofia Vergara"],
  },
  {
    emoji: "📅📹 🥓",
    answer: "David Beckham",
    question: "Who is this emoji puzzle about?",
    options: ["Ryan Reynolds", "David Beckham", "George Clooney"],
  },
  {
    emoji: "🏝️ 🎣",
    answer: "Isla Fisher",
    question: "Which celebrity are these vacation emojis depicting?",
    options: ["Jennifer Aniston", "Isla Fisher", "Kate Hudson"],
  },
  {
    emoji: "😩👨 🐄",
    answer: "Simon Cowell",
    question: "Who is represented by these emojis?",
    options: ["Gordon Ramsay", "Simon Cowell", "Jimmy Kimmel"],
  },
  {
    emoji: "🪨",
    answer: "The Rock",
    question: "Which celebrity is this single emoji showing?",
    options: ["Vin Diesel", "Jason Statham", "The Rock"],
  },
  {
    emoji: "🃏 🐝",
    answer: "Cardi B",
    question: "Decode this celebrity emoji combo",
    options: ["Nicki Minaj", "Cardi B", "Megan Thee Stallion"],
  },
  {
    emoji: "🐻 👧👧",
    answer: "Bear Grylls",
    question: "Who is this emoji puzzle representing?",
    options: ["Bear Grylls", "Steve Irwin", "Les Stroud"],
  },

  // Geography Quiz Questions
  {
    emoji: "🗣️🎶🐾",
    answer: "Singapore",
    question: "Which country do these emojis represent?",
    options: ["Malaysia", "Singapore", "Indonesia"],
  },
  {
    emoji: "💥🍆",
    answer: "Bangkok",
    question: "What city is this emoji combination?",
    options: ["Manila", "Bangkok", "Jakarta"],
  },
  {
    emoji: "👹🚰",
    answer: "Helsinki",
    question: "Guess the city from these emojis",
    options: ["Oslo", "Helsinki", "Copenhagen"],
  },
  {
    emoji: "🔩🔛",
    answer: "Bolton",
    question: "Which location are these emojis hinting at?",
    options: ["Liverpool", "Bolton", "Manchester"],
  },
  {
    emoji: "🦶🔑0️⃣",
    answer: "Tokyo",
    question: "What city do these emojis represent?",
    options: ["Osaka", "Tokyo", "Kyoto"],
  },
  {
    emoji: "⬛ 🏊",
    answer: "Blackpool",
    question: "Which location do these emojis suggest?",
    options: ["Bournemouth", "Blackpool", "Brighton"],
  },
  {
    emoji: "🚗🐂",
    answer: "Kabul",
    question: "What city are these emojis depicting?",
    options: ["Tehran", "Kabul", "Islamabad"],
  },
  {
    emoji: "🚢 👄",
    answer: "Portsmouth",
    question: "Which city do these emojis represent?",
    options: ["Liverpool", "Portsmouth", "Southampton"],
  },
  {
    emoji: "🔥",
    answer: "Bern",
    question: "What city is this emoji symbolizing?",
    options: ["Geneva", "Bern", "Zurich"],
  },
  {
    emoji: "📖🅰️😴",
    answer: "Bucharest",
    question: "Which city do these emojis represent?",
    options: ["Budapest", "Bucharest", "Belgrade"],
  },

  // Movies Quiz Questions
  {
    emoji: "🍴🙏❤️",
    answer: "Eat Pray Love",
    question: "What movie are these emojis depicting?",
    options: ["Under the Tuscan Sun", "Eat Pray Love", "Julie & Julia"],
  },
  {
    emoji: "😈 👠",
    answer: "The Devil Wears Prada",
    question: "Identify this movie from its emoji representation",
    options: ["Working Girl", "The Devil Wears Prada", "Legally Blonde"],
  },
  {
    emoji: "🏰👭❄️☃️",
    answer: "Frozen",
    question: "Which movie do these winter-themed emojis represent?",
    options: ["Ice Age", "Frozen", "Snowpiercer"],
  },
  {
    emoji: "5️⃣0️⃣0️⃣☀️❤️",
    answer: "500 Days of Summer",
    question: "What movie are these numbers and emojis showing?",
    options: ["La La Land", "500 Days of Summer", "Silver Linings Playbook"],
  },
  {
    emoji: "👨✂️👐",
    answer: "Edward Scissorhands",
    question: "Which movie is represented by these emojis?",
    options: ["Beetlejuice", "Edward Scissorhands", "Corpse Bride"],
  },
  {
    emoji: "🚆👀",
    answer: "Trainspotting",
    question: "What movie do these emojis represent?",
    options: [
      "Before Sunrise",
      "Trainspotting",
      "Murder on the Orient Express",
    ],
  },
  {
    emoji: "👨⚡",
    answer: "Harry Potter",
    question: "Which movie franchise is this emoji showing?",
    options: ["Percy Jackson", "Harry Potter", "The Magicians"],
  },
  {
    emoji: "👽📞🏠",
    answer: "E.T.",
    question: "What classic movie are these emojis depicting?",
    options: ["Close Encounters", "E.T.", "Arrival"],
  },
  {
    emoji: "🏝️🏐",
    answer: "Castaway",
    question: "Which movie do these island emojis represent?",
    options: ["Blue Lagoon", "Castaway", "Life of Pi"],
  },
  {
    emoji: "🧙‍♂️🧝‍♀️💍🌋",
    answer: "The Lord of the Rings",
    question: "What epic movie series are these emojis showing?",
    options: ["The Hobbit", "The Lord of the Rings", "Game of Thrones"],
  },

  // TV Shows Quiz Questions
  {
    emoji: "🇬🇧🍰",
    answer: "The Great British Bake Off",
    question: "What TV show are these emojis hinting at?",
    options: ["MasterChef", "The Great British Bake Off", "Nailed It"],
  },
  {
    emoji: "🦑🎮",
    answer: "Squid Game",
    question: "Decode this TV show from emojis",
    options: ["Black Mirror", "Squid Game", "Altered Carbon"],
  },
  {
    emoji: "👑♟️👩‍🦰",
    answer: "The Queen's Gambit",
    question: "Which TV series do these emojis represent?",
    options: ["The Crown", "The Queen's Gambit", "Peaky Blinders"],
  },
  {
    emoji: "⚰️2️⃣🙋",
    answer: "Dead to Me",
    question: "What TV show are these emojis describing?",
    options: ["Grace and Frankie", "Dead to Me", "Big Little Lies"],
  },
  {
    emoji: "👻⛰️🏠",
    answer: "The Haunting of Hill House",
    question: "Which TV series do these spooky emojis represent?",
    options: [
      "American Horror Story",
      "The Haunting of Hill House",
      "Stranger Things",
    ],
  },
  {
    emoji: "🇮🇪🚸👯",
    answer: "Derry Girls",
    question: "What TV show do these emojis depict?",
    options: ["Normal People", "Derry Girls", "Shameless"],
  },
  {
    emoji: "👇🔛⛪",
    answer: "Downton Abbey",
    question: "Which TV series are these emojis representing?",
    options: ["The Crown", "Downton Abbey", "Bridgerton"],
  },
  {
    emoji: "🎲🏰🪑⚔️",
    answer: "Game of Thrones",
    question: "What epic TV show do these emojis show?",
    options: ["The Witcher", "Game of Thrones", "Vikings"],
  },
  {
    emoji: "🛁👑🔔💨",
    answer: "The Fresh Prince of Bel-Air",
    question: "Which classic TV show are these emojis depicting?",
    options: ["Martin", "The Fresh Prince of Bel-Air", "Family Matters"],
  },
  {
    emoji: "📞👶",
    answer: "Call the Midwife",
    question: "What TV series do these emojis represent?",
    options: ["ER", "Call the Midwife", "Grey's Anatomy"],
  },

  // Brands Quiz Questions
  {
    emoji: "⭐💰",
    answer: "Starbucks",
    question: "What brand are these emojis representing?",
    options: ["Costa Coffee", "Starbucks", "Dunkin' Donuts"],
  },
  {
    emoji: "🔥🦊",
    answer: "Firefox",
    question: "Identify this brand from its emoji combination",
    options: ["Chrome", "Firefox", "Safari"],
  },
  {
    emoji: "👛🌊🐷",
    answer: "Percy Pig",
    question: "What brand do these playful emojis suggest?",
    options: ["Haribo", "Percy Pig", "Swedish Fish"],
  },
  {
    emoji: "👨👨👨👨👨",
    answer: "Five Guys",
    question: "Which brand is represented by these emojis?",
    options: ["Burger King", "Five Guys", "McDonald's"],
  },
  {
    emoji: "🌮🔔",
    answer: "Taco Bell",
    question: "What restaurant chain do these emojis show?",
    options: ["Chipotle", "Taco Bell", "Del Taco"],
  },
  {
    emoji: "☁️☀️🌧🥄🥄",
    answer: "Wetherspoons",
    question: "Which brand do these emojis represent?",
    options: ["Hilton", "Wetherspoons", "Premier Inn"],
  },
  {
    emoji: "🚫🔑",
    answer: "Nokia",
    question: "What brand is this emoji puzzle depicting?",
    options: ["Motorola", "Nokia", "Blackberry"],
  },
  {
    emoji: "🔋🐰",
    answer: "Energizer",
    question: "Which brand are these emojis showing?",
    options: ["Duracell", "Energizer", "Panasonic"],
  },
  {
    emoji: "👀📱",
    answer: "iPhone",
    question: "What brand do these emojis represent?",
    options: ["Samsung", "iPhone", "Google Pixel"],
  },
  {
    emoji: "🌽❄️❄️",
    answer: "Cornflakes",
    question: "Which brand are these emojis depicting?",
    options: ["Rice Krispies", "Cornflakes", "Cheerios"],
  },

  // Disney Quiz Questions
  {
    emoji: "🐒🪔🧞‍♂️",
    answer: "Aladdin",
    question: "Which Disney movie are these emojis describing?",
    options: ["Moana", "Aladdin", "The Jungle Book"],
  },
  {
    emoji: "🦁👑",
    answer: "Lion King",
    question: "Decode this Disney classic from emojis",
    options: ["Tarzan", "Lion King", "Jungle Book"],
  },
  {
    emoji: "👶🧜🏽‍♀️",
    answer: "The Little Mermaid",
    question: "What Disney film do these emojis represent?",
    options: ["Moana", "The Little Mermaid", "Splash"],
  },
  {
    emoji: "👶🧜🏽‍♀️",
    answer: "The Little Mermaid",
    question: "What Disney film do these emojis represent?",
    options: ["Moana", "The Little Mermaid", "Splash"],
  },
  {
    emoji: "❄️☃️👩‍🦳",
    answer: "Frozen",
    question: "Which Disney movie are these winter emojis showing?",
    options: ["Snow White", "Frozen", "Polar Express"],
  },
  {
    emoji: "🐀👨‍🍳🍝",
    answer: "Ratatouille",
    question: "What Pixar movie do these emojis represent?",
    options: ["Cloudy with a Chance of Meatballs", "Ratatouille", "Chef"],
  },
  // Flag-based questions with visually similar flags
  {
    emoji: "🇹🇩", // Chad
    answer: "Chad",
    question: "Which country does this flag belong to?",
    options: ["Romania", "Chad", "Mali"], // Confusing with Romania
  },
  {
    emoji: "🇷🇴", // Romania
    answer: "Romania",
    question: "Which country does this flag belong to?",
    options: ["Chad", "Romania", "Senegal"], // Confusing with Chad
  },
  {
    emoji: "🇸🇳", // Senegal
    answer: "Senegal",
    question: "Which country does this flag belong to?",
    options: ["Mali", "Senegal", "Ghana"], // Confusing with Mali
  },
  {
    emoji: "🇲🇱", // Mali
    answer: "Mali",
    question: "Which country does this flag belong to?",
    options: ["Senegal", "Mali", "Ivory Coast"], // Confusing with Senegal
  },
  {
    emoji: "🇮🇩", // Indonesia
    answer: "Indonesia",
    question: "Which country does this flag belong to?",
    options: ["Monaco", "Indonesia", "Singapore"], // Confusing with Monaco
  },
  {
    emoji: "🇲🇨", // Monaco
    answer: "Monaco",
    question: "Which country does this flag belong to?",
    options: ["Indonesia", "Monaco", "Luxembourg"], // Confusing with Indonesia
  },
  {
    emoji: "🇳🇿", // New Zealand
    answer: "New Zealand",
    question: "Which country does this flag belong to?",
    options: ["Australia", "New Zealand", "United Kingdom"], // Confusing with Australia
  },
  {
    emoji: "🇦🇺", // Australia
    answer: "Australia",
    question: "Which country does this flag belong to?",
    options: ["New Zealand", "Australia", "Canada"], // Confusing with New Zealand
  },
  {
    emoji: "🇮🇪", // Ireland
    answer: "Ireland",
    question: "Which country does this flag belong to?",
    options: ["Ivory Coast", "Ireland", "Italy"], // Confusing with Côte d’Ivoire
  },
  {
    emoji: "🇨🇮", // Côte d’Ivoire
    answer: "Côte d’Ivoire",
    question: "Which country does this flag belong to?",
    options: ["Ireland", "Côte d’Ivoire", "Gabon"], // Confusing with Ireland
  },
  // Famous People
  {
    emoji: "🎨🌌",
    answer: "Vincent van Gogh",
    question: "Which famous artist is represented by these emojis?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
  },
  {
    emoji: "🎤🕺✨",
    answer: "Michael Jackson",
    question: "Who is symbolized by these emojis?",
    options: ["Elvis Presley", "Michael Jackson", "Prince"],
  },
  {
    emoji: "💡🔋",
    answer: "Thomas Edison",
    question: "Which inventor is represented by these emojis?",
    options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell"],
  },

  // Movies and TV Shows
  {
    emoji: "🦈🌊🎥",
    answer: "Jaws",
    question: "Which classic movie do these emojis represent?",
    options: ["Jaws", "The Meg", "Sharknado"],
  },
  {
    emoji: "🚪📺🧇",
    answer: "Stranger Things",
    question: "What TV show is symbolized by these emojis?",
    options: ["Stranger Things", "Black Mirror", "The X-Files"],
  },
  {
    emoji: "🧙‍♂️🪄🦉",
    answer: "Harry Potter",
    question: "What movie series do these emojis represent?",
    options: ["Harry Potter", "Lord of the Rings", "The Chronicles of Narnia"],
  },

  // Video Games
  {
    emoji: "🌟🍄🛑",
    answer: "Super Mario",
    question: "Which video game franchise do these emojis hint at?",
    options: ["Super Mario", "Zelda", "Sonic"],
  },
  {
    emoji: "🔫👾🌌",
    answer: "Halo",
    question: "What video game is represented by these emojis?",
    options: ["Call of Duty", "Halo", "Mass Effect"],
  },
  {
    emoji: "🦾🏙️🔵",
    answer: "Cyberpunk 2077",
    question: "Which video game do these emojis represent?",
    options: ["Cyberpunk 2077", "Deus Ex", "Watch Dogs"],
  },

  // Mythology
  {
    emoji: "⚡🕊️🌩️",
    answer: "Zeus",
    question: "Which Greek god is symbolized by these emojis?",
    options: ["Poseidon", "Zeus", "Hades"],
  },
  {
    emoji: "🦄✨🌈",
    answer: "Unicorn",
    question: "Which mythical creature do these emojis describe?",
    options: ["Dragon", "Unicorn", "Phoenix"],
  },
  {
    emoji: "🐉🔥👑",
    answer: "Dragon",
    question: "What mythical creature is represented by these emojis?",
    options: ["Dragon", "Griffin", "Sphinx"],
  },

  // Animals and Nature
  {
    emoji: "🦁🏞️",
    answer: "Lion",
    question: "Which animal is represented by these emojis?",
    options: ["Tiger", "Lion", "Cheetah"],
  },
  {
    emoji: "🌋🔥",
    answer: "Volcano",
    question: "What natural phenomenon do these emojis represent?",
    options: ["Earthquake", "Volcano", "Hurricane"],
  },
  {
    emoji: "🐧❄️",
    answer: "Penguin",
    question: "Which animal do these emojis describe?",
    options: ["Penguin", "Polar Bear", "Seal"],
  },

  // Sports and Games
  {
    emoji: "⚽🌎",
    answer: "FIFA World Cup",
    question: "Which sporting event is symbolized by these emojis?",
    options: ["FIFA World Cup", "Olympics", "UEFA Champions League"],
  },
  {
    emoji: "♟️🏰",
    answer: "Chess",
    question: "What game do these emojis represent?",
    options: ["Chess", "Checkers", "Backgammon"],
  },
  {
    emoji: "🎾🌱",
    answer: "Wimbledon",
    question: "Which tennis tournament is represented by these emojis?",
    options: ["US Open", "Wimbledon", "French Open"],
  },

  // Science and Technology
  {
    emoji: "🚀🌌",
    answer: "Space Exploration",
    question: "What scientific field is hinted at by these emojis?",
    options: ["Astronomy", "Space Exploration", "Rocket Engineering"],
  },
  {
    emoji: "💻📡",
    answer: "Internet",
    question: "What technological innovation do these emojis represent?",
    options: ["Wi-Fi", "Internet", "Satellite Technology"],
  },
  {
    emoji: "🧬🔬",
    answer: "DNA Research",
    question: "What scientific field is represented by these emojis?",
    options: ["Biotechnology", "DNA Research", "Genetics"],
  },

  // Travel and Places
  {
    emoji: "🗽🇺🇸",
    answer: "Statue of Liberty",
    question: "Which famous landmark do these emojis represent?",
    options: ["Eiffel Tower", "Statue of Liberty", "Big Ben"],
  },
  {
    emoji: "✈️🗺️",
    answer: "Travel",
    question: "What activity is symbolized by these emojis?",
    options: ["Vacation", "Travel", "Pilgrimage"],
  },
  {
    emoji: "🏔️🐾",
    answer: "Hiking",
    question: "What activity do these emojis represent?",
    options: ["Camping", "Hiking", "Rock Climbing"],
  },
];

const levelTwoQuestions = [
  {
    word: "Batman",
    answer: ["🦇", "👨"],
    options: ["🦇", "👩", "👨", "🐍"],
  },
  {
    word: "Sunflower",
    answer: ["🌻", "☀️"],
    options: ["🌻", "🌹", "☀️", "🌧️"],
  },
  {
    word: "Earthquake",
    answer: ["🌍", "💥"],
    options: ["🌍", "🔥", "💥", "💧"],
  },
  {
    word: "Love Letter",
    answer: ["💌", "❤️"],
    options: ["💌", "📫", "❤️", "🎁"],
  },
  {
    word: "Pirate Ship",
    answer: ["🏴‍☠️", "🚢"],
    options: ["🏴‍☠️", "🚢", "🗺️", "⚓"],
  },
  {
    word: "Time Traveler",
    answer: ["⏳", "🚀"],
    options: ["⏳", "🕒", "🚀", "🎩"],
  },
  {
    word: "Volcano Eruption",
    answer: ["🌋", "🔥"],
    options: ["🌋", "🔥", "🌪️", "💥"],
  },
  {
    word: "Jungle Safari",
    answer: ["🌴", "🐘"],
    options: ["🌴", "🐅", "🐘", "🦜"],
  },
  {
    word: "Wizard Spell",
    answer: ["🧙‍♂️", "✨"],
    options: ["🧙‍♂️", "✨", "📜", "🔥"],
  },
  {
    word: "Dragon Slayer",
    answer: ["🐉", "⚔️"],
    options: ["🐉", "🛡️", "⚔️", "🧙‍♀️"],
  },
  {
    word: "Ocean Treasure",
    answer: ["🌊", "💎"],
    options: ["🌊", "⚓", "💎", "🐚"],
  },
  {
    word: "Alien Abduction",
    answer: ["👽", "🛸"],
    options: ["👽", "🚀", "🛸", "👾"],
  },
  {
    word: "Chocolate Cake",
    answer: ["🍫", "🎂"],
    options: ["🍫", "🍪", "🎂", "🍩"],
  },
  {
    word: "Galaxy Explorer",
    answer: ["🌌", "🧑‍🚀"],
    options: ["🌌", "🚀", "🧑‍🚀", "🪐"],
  },
  {
    word: "Fairy Tale",
    answer: ["🧚‍♀️", "📖"],
    options: ["🧚‍♀️", "📜", "📖", "✨"],
  },
  {
    word: "Hacker",
    answer: ["💻", "🕶️"],
    options: ["💻", "🕶️", "🛡️", "🔒"],
  },
  {
    word: "Carnival Ride",
    answer: ["🎡", "🎠"],
    options: ["🎡", "🎢", "🎠", "🎭"],
  },
  {
    word: "Desert Adventure",
    answer: ["🏜️", "🐪"],
    options: ["🏜️", "🐪", "🌞", "🦅"],
  },
  {
    word: "Treasure Hunt",
    answer: ["🗺️", "💰"],
    options: ["🗺️", "💰", "🏴‍☠️", "⚓"],
  },
  {
    word: "Ghost Story",
    answer: ["👻", "📖"],
    options: ["👻", "🎭", "📖", "🕯️"],
  },
  {
    word: "Royal Crown",
    answer: ["👑", "💎"],
    options: ["👑", "👗", "💎", "🎩"],
  },
  {
    word: "Breaking News",
    answer: ["📰", "📢"],
    options: ["📰", "🎥", "📢", "💬"],
  },
  {
    word: "Underwater Cave",
    answer: ["🌊", "🕳️"],
    options: ["🌊", "🕳️", "🐟", "💎"],
  },
  {
    word: "Magic Potion",
    answer: ["🧪", "✨"],
    options: ["🧪", "🥤", "✨", "🔮"],
  },
  {
    word: "Mountain Climber",
    answer: ["🗻", "🧗"],
    options: ["🗻", "🏞️", "🧗", "🏔️"],
  },
  {
    word: "Secret Code",
    answer: ["🔒", "🕵️"],
    options: ["🔒", "🕵️", "📜", "💻"],
  },
  {
    word: "Tropical Storm",
    answer: ["🌴", "🌪️"],
    options: ["🌴", "🌪️", "☁️", "🌧️"],
  },
  {
    word: "Rock Band",
    answer: ["🎸", "🎤"],
    options: ["🎸", "🥁", "🎤", "🎷"],
  },
  {
    word: "Time Machine",
    answer: ["⏳", "🛸"],
    options: ["⏳", "🕰️", "🛸", "🔧"],
  },
  {
    word: "Medieval Knight",
    answer: ["⚔️", "🛡️"],
    options: ["⚔️", "🛡️", "🏰", "🧙‍♂️"],
  },
  {
    word: "Space Battle",
    answer: ["🚀", "💥"],
    options: ["🚀", "🌌", "💥", "🛸"],
  },
  {
    word: "Wild West",
    answer: ["🤠", "🔫"],
    options: ["🤠", "🏜️", "🔫", "🐎"],
  },
  {
    word: "Superhero",
    answer: ["🦸", "🦹"],
    options: ["🦸", "🦹", "💪", "✨"],
  },
  {
    word: "Winter Wonderland",
    answer: ["❄️", "⛄"],
    options: ["❄️", "⛄", "🏔️", "🎄"],
  },
  {
    word: "Camping Trip",
    answer: ["🏕️", "🔥"],
    options: ["🏕️", "🔥", "🌲", "🛶"],
  },
  {
    word: "Forest Fire",
    answer: ["🌲", "🔥"],
    options: ["🌲", "🔥", "🌪️", "💨"],
  },
  {
    word: "Treasure Map",
    answer: ["🗺️", "🏴‍☠️"],
    options: ["🗺️", "🏴‍☠️", "📜", "🔑"],
  },
  {
    word: "City Lights",
    answer: ["🌃", "💡"],
    options: ["🌃", "💡", "🌇", "🎆"],
  },
  {
    word: "Arctic Expedition",
    answer: ["❄️", "🧊"],
    options: ["❄️", "🧊", "🐧", "🏔️"],
  },
];

Devvit.configure({
  redis: true,
  redditAPI: true,
});

const LandingScreen = ({
  onStartGame,
  onViewLeaderboard,
  onCreateQuiz,
}: {
  onStartGame: () => void;
  onViewLeaderboard: () => void;
  onCreateQuiz: () => void;
}) => {
  return (
    <zstack height="320px" width="100%">
      <image
        url="background.png"
        imageWidth={1024}
        imageHeight={768}
        height="100%"
        width="100%"
        resizeMode="cover"
      />
      <hstack width="100%" alignment="center middle">
        <vstack
          alignment="center middle"
          height="100%"
          gap="large"
          padding="medium"
          width="80%"
        >
          <text size="xxlarge" weight="bold">
            Guess the Em😂ji
          </text>
          <text size="xlarge" color="grey">
            Guess the word behind the emojis!
          </text>
          <vstack gap="medium" width="50%">
            <button
              icon="play"
              appearance="primary"
              size="large"
              onPress={onStartGame}
            >
              Start Game
            </button>
            <button
              icon="statistics"
              appearance="secondary"
              size="large"
              onPress={onViewLeaderboard}
            >
              View Leaderboard
            </button>
          </vstack>
        </vstack>
      </hstack>
    </zstack>
  );
};

function NextLevelCountdown({
  onCountdownEnd,
}: {
  onCountdownEnd: () => void;
}) {
  const [countdown, setCountdown] = useState(90); // 10-second countdown

  const countdownInterval = useInterval(() => {
    setCountdown((prev) => {
      if (prev > 1) {
        return prev - 1;
      } else {
        countdownInterval.stop();
        onCountdownEnd(); // Trigger the transition to the next round
        return 0;
      }
    });
  }, 1000);

  countdownInterval.start();

  return (
    <>
      <text size="large" weight="bold">
        Time Left: {countdown}s
      </text>

      <vstack backgroundColor="#FFD5C6" cornerRadius="full" width={95}>
        <hstack backgroundColor="#D93A00" width={(countdown / 10) * 100}>
          <spacer size="medium" shape="square" />
        </hstack>
      </vstack>
    </>
  );
}

// Add a menu item to the subreddit menu for instantiating the new experience post
Devvit.addMenuItem({
  label: "Start Emoji Guesser",
  location: "subreddit",
  forUserType: "moderator",
  onPress: async (_event, context) => {
    const { reddit, ui } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    await reddit.submitPost({
      title: "Guess the Emojis",
      subredditName: subreddit.name,
      // The preview appears while the post loads
      preview: (
        <vstack height="100%" width="100%" alignment="middle center">
          <image
            url="loading.gif"
            imageWidth={70}
            imageHeight={70}
            resizeMode="cover"
          />
        </vstack>
      ),
    });
    ui.showToast({ text: "Created post!" });
  },
});

Devvit.addCustomPostType({
  name: "Emoji Guesser with Leaderboard",
  render: (context) => {
    const [currentScreen, setCurrentScreen] = useState<
      "landing" | "game" | "leaderboard" | "create-quiz"
    >("landing");
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentLevelTwoQuestion, setCurrentLevelTwoQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
    const [gameOver, setGameOver] = useState(false);
    const [leaderboard, setLeaderboard] = useState<{
      [key: string]: number;
    }>({});
    const [nextLevel, setNextLevel] = useState(false);
    const [selectedEmojis, setSelectedEmojis] = useState<string[]>([]);

    const {
      data: leaderboardData,
      loading,
      error,
    } = useAsync(
      async () => {
        const leaderboardEntries = await context.redis.zRange(
          "leaderboard",
          0,
          19800,
          { by: "score" }
        );

        const leaderboardMap: { [key: string]: number } = {};
        leaderboardEntries.forEach((entry) => {
          leaderboardMap[entry.member] = entry.score;
        });

        return leaderboardMap;
      },
      { depends: currentScreen }
    );

    const totalQuestions = questions.length;
    const halfTotalQuestions = totalQuestions / 2;
    const progressPercentage = Math.floor(
      (currentQuestion / halfTotalQuestions) * 100
    );

    const { data: username } = useAsync(() =>
      context.reddit.getCurrentUser().then((user) => user?.username ?? "Guest")
    );

    const { data: avatarUrl } = useAsync(async () => {
      const user = await context.reddit.getCurrentUser();
      if (!user) return null; // Return null instead of undefined

      const url = await user.getSnoovatarUrl();
      user.createdAt
      return url || null; // Return null if url is undefined
    });

    

    const timerInterval = useInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTime) => prevTime - 1);
      } else {
        setGameOver(true);
        addToLeaderboard();
      }
    }, 1000);

    timerInterval.start();

    const handleStartGame = async () => {
      setCurrentScreen("game");
      setScore(0);
      setCurrentQuestion(0);
      setTimeLeft(180);
      setGameOver(false);
      setNextLevel(false);
      setSelectedEmojis([]);
    };

    const handleViewLeaderboard = async () => {
      if (!gameOver) await addToLeaderboard(); // Ensure score is updated first
      await fetchLeaderboard(); // Fetch the updated leaderboard
      setCurrentScreen("leaderboard");
    };

    const handleCreateQuiz = () => {
      // Placeholder for future quiz creation functionality
      setCurrentScreen("create-quiz");
    };

    const handleAnswer = (option: string) => {
      if (!gameOver) {
        if (option === questions[currentQuestion].answer) {
          setScore((prevScore) => prevScore + 300);
          handleNext();
        } else {
          setGameOver(true);
          addToLeaderboard();
        }
      }
    };

    const handleEmojiSelection = (emoji: string) => {
      if (selectedEmojis.length < 2) {
        setSelectedEmojis((prev) => [...prev, emoji]);
      }
    };

    const checkLevelTwoAnswer = () => {
      const correctAnswer = levelTwoQuestions[currentLevelTwoQuestion].answer;
      if (
        selectedEmojis.length === 2 &&
        selectedEmojis.sort().join("") === correctAnswer.sort().join("")
      ) {
        setScore((prev) => prev + 500);
        setSelectedEmojis([]);
        setCurrentLevelTwoQuestion(
          (prev) => (prev + 1) % levelTwoQuestions.length
        );
        handleNext();
      } else {
        setGameOver(true);
        addToLeaderboard();
      }
    };

    const handleNextLevel = () => {
      setGameOver(false);
      setNextLevel(true);
      setCurrentLevelTwoQuestion(0);
      setSelectedEmojis([]);
    };

    const handleNext = () => {
      setCurrentQuestion((prev) => (prev + 1) % questions.length);
      setSelectedEmojis([]);
    };

    const addToLeaderboard = async () => {
      if (username) {
        try {
          await context.redis.zAdd("leaderboard", {
            member: username,
            score: score,
          });
        } catch (error) {
          console.error("Error adding to leaderboard:", error);
        }
      }
    };

    const fetchLeaderboard = async () => {
      try {
        const leaderboardEntries = await context.redis.zRange(
          "leaderboard",
          0,
          19800,
          {
            by: "score",
          }
        );

        const leaderboardMap: { [key: string]: number } = {};
        leaderboardEntries.forEach((entry) => {
          leaderboardMap[entry.member] = entry.score;
        });

        setLeaderboard((prevLeaderboard) => {
          const updatedLeaderboard = { ...prevLeaderboard, ...leaderboardMap };
          //console.log("UpdatedLeaderBoard:", updatedLeaderboard);
          return updatedLeaderboard;
        });
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
    };

    const LeaderboardView = () => {
      if (loading)
        return (
          <image
            url="loading.gif"
            imageWidth={70}
            imageHeight={70}
            resizeMode="cover"
          />
        );
      if (error)
        return <text>Error fetching leaderboard: {error.message}</text>;

      const sortedEntries = leaderboardData
        ? Object.entries(leaderboardData)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
        : [];

      const arrangedEntries = leaderboardData
        ? Object.entries(leaderboardData).sort((a, b) => b[1] - a[1])
        : [];

      //console.log("Sorted", arrangedEntries)
      //console.log("user", username)

      const playerRank = arrangedEntries.findIndex(
        ([player]) => player === username // Compare correctly
      );

      //console.log("Rank", playerRank)

      // const playerScore =
      //   playerRank >= 0 ? arrangedEntries[playerRank][1] : null;
      // //console.log("Score", playerScore)

      return (
        <zstack height="320px" width="100%">
          <image
            url="leaderboard.png"
            imageWidth={1024}
            imageHeight={768}
            height="100%"
            width="100%"
            resizeMode="cover"
          />
          <hstack width="100%" alignment="center middle">
            <vstack alignment="center middle" gap="medium" padding="medium">
              <text size="xlarge" weight="bold">
                Leaderboard
              </text>
              {sortedEntries.length === 0 ? (
                <text>No scores yet!</text>
              ) : (
                <vstack gap="small" width="100%">
                  {sortedEntries.map(([username, score], index) => (
                    <hstack
                      key={username}
                      alignment="center middle"
                      gap="medium"
                      padding="small"
                      backgroundColor={
                        index === 0
                          ? "#FFD700"
                          : index === 1
                          ? "#C0C0C0"
                          : index === 2
                          ? "#CD7F32"
                          : "transparent"
                      }
                    >
                      <text size="medium" weight="bold">
                        {index + 1}. {username}
                      </text>
                      <spacer grow />
                      <text size="medium">{score} pts</text>
                    </hstack>
                  ))}
                  <vstack>
                    <hstack gap="small" alignment="middle">
                      {avatarUrl && (
                        <image
                          url={avatarUrl}
                          imageWidth={50}
                          imageHeight={50}
                        />
                      )}
                      <text size="xlarge" weight="bold">
                        {`${username}'s Rank is ${playerRank + 1}.`}
                      </text>
                    </hstack>
                  </vstack>
                </vstack>
              )}
              <button
                appearance="secondary"
                onPress={() => setCurrentScreen("landing")}
              >
                Back to Home
              </button>
            </vstack>
          </hstack>
        </zstack>
      );
    };

    const renderScreen = () => {
      switch (currentScreen) {
        case "landing":
          return (
            <LandingScreen
              onStartGame={handleStartGame}
              onViewLeaderboard={handleViewLeaderboard}
              onCreateQuiz={handleCreateQuiz}
            />
          );
        case "leaderboard":
          return <LeaderboardView />;
        case "create-quiz":
          return (
            <vstack
              alignment="center middle"
              height="320px"
              gap="medium"
              padding="medium"
            >
              <text size="xlarge" weight="bold">
                Create Quiz
              </text>
              <text>Coming Soon!</text>
              <button
                appearance="secondary"
                onPress={() => setCurrentScreen("landing")}
              >
                Back to Home
              </button>
            </vstack>
          );
        default: // 'game'
          return gameOver ? (
            <zstack height="320px" width="100%">
              <image
                url="background.png"
                imageWidth={1024}
                imageHeight={768}
                height="100%"
                width="100%"
                resizeMode="cover"
              />
              <hstack width="100%" alignment="center middle">
                <vstack
                  alignment="center middle"
                  height="100%"
                  gap="large"
                  padding="medium"
                  width="80%"
                >
                  <text size="xxlarge" weight="bold">
                    Game Over!
                  </text>
                  <hstack gap="small" alignment="middle">
                      {avatarUrl && (
                        <image
                          url={avatarUrl}
                          imageWidth={50}
                          imageHeight={50}
                        />
                      )}
                      <text size="xlarge" weight="bold">
                      {`${username}'s score: ${score}`}
                      </text>
                    </hstack>
                  <hstack gap="medium">
                    <button
                      icon="right"
                      appearance="primary"
                      disabled={score < 9900}
                      onPress={() => {
                        handleNextLevel();
                      }}
                    >
                      Next Level
                    </button>
                    <button
                      icon="statistics"
                      appearance="primary"
                      onPress={() => {
                        fetchLeaderboard();
                        setCurrentScreen("leaderboard");
                      }}
                    >
                      View Leaderboard
                    </button>
                    <button
                      icon="loop"
                      appearance="secondary"
                      onPress={handleStartGame}
                    >
                      Play Again
                    </button>
                  </hstack>
                </vstack>
              </hstack>
            </zstack>
          ) : nextLevel ? (
            <zstack height="320px" width="100%">
              <image
                url="levelTwo.png"
                imageWidth={1024}
                imageHeight={768}
                height="100%"
                width="100%"
                resizeMode="cover"
              />
              <hstack width="100%" alignment="center middle">
                <vstack
                  alignment="center middle"
                  gap="small"
                  padding="small"
                  width="80%"
                >
                  <NextLevelCountdown onCountdownEnd={checkLevelTwoAnswer} />
                  <text size="xxlarge" weight="bold">
                    {`Match the emojis to "${levelTwoQuestions[currentLevelTwoQuestion].word}"`}
                  </text>
                  <hstack gap="small">
                    {selectedEmojis.map((emoji, index) => (
                      <text key={index.toString()} size="large">
                        {emoji}
                      </text>
                    ))}
                  </hstack>
                  <hstack gap="medium">
                    {levelTwoQuestions[currentLevelTwoQuestion].options.map(
                      (emoji, index) => (
                        <button
                          key={index.toString()}
                          appearance="media"
                          size="medium"
                          onPress={() => handleEmojiSelection(emoji)}
                        >
                          {emoji}
                        </button>
                      )
                    )}
                  </hstack>
                  {selectedEmojis.length === 2 && (
                    <button appearance="primary" onPress={checkLevelTwoAnswer}>
                      Submit
                    </button>
                  )}
                </vstack>
              </hstack>
            </zstack>
          ) : (
            <zstack height="320px" width="100%">
              <image
                url="game.png"
                imageWidth={1024}
                imageHeight={768}
                height="100%"
                width="100%"
                resizeMode="cover"
              />
              <hstack width="100%" alignment="center middle">
                <vstack
                  alignment="center middle"
                  gap="small"
                  padding="small"
                  width="80%"
                >
                  <text size="xlarge">{`Time left: ${Math.floor(
                    timeLeft / 60
                  )}:${timeLeft % 60}`}</text>
                  <vstack
                    backgroundColor="#FFD5C6"
                    cornerRadius="full"
                    width={95}
                  >
                    <hstack
                      backgroundColor="#D93A00"
                      width={progressPercentage}
                    >
                      <spacer size="medium" shape="square" />
                    </hstack>
                  </vstack>
                  <text size="xlarge">
                    {questions[currentQuestion].question}
                  </text>
                  <text size="xxlarge" weight="bold" grow>
                    {questions[currentQuestion].emoji}
                  </text>
                  <vstack gap="medium">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index.toString()}
                        appearance="media"
                        onPress={() => handleAnswer(option)}
                        size="medium"
                      >
                        {option}
                      </button>
                    ))}
                  </vstack>
                  <text size="small" weight="bold">
                    Max out the progress bar to proceed to the next level
                  </text>
                </vstack>
              </hstack>
            </zstack>
          );
      }
    };

    return (
      <vstack alignment="center middle" height="320px" gap="medium">
        {renderScreen()}
      </vstack>
    );
  },
});

export default Devvit;

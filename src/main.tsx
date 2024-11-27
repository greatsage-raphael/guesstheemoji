import { Devvit, useState, useInterval, useAsync } from "@devvit/public-api";

// Updated questions array with emojis and their corresponding questions, answers, and options
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
    emoji: "🏭 👨🌟",
    answer: "Tom Cruise",
    question: "Decode this celebrity using emojis",
    options: ["Brad Pitt", "Leonardo DiCaprio", "Tom Cruise"],
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
];

Devvit.configure({
  redis: true,
  redditAPI: true,
});

Devvit.addCustomPostType({
  name: "Emoji Guesser with Leaderboard",
  render: (context) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
    const [gameOver, setGameOver] = useState(false);
    const [leaderboard, setLeaderboard] = useState<{
      [key: string]: number;
    }>({});
    const [showLeaderboard, setShowLeaderboard] = useState(false);

    const {
      data: leaderboardData,
      loading,
      error,
    } = useAsync(async () => {
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

      return leaderboardMap; // Return parsed leaderboard data
    });

    const totalQuestions = questions.length;
    const progressPercentage = Math.floor(
      (currentQuestion / totalQuestions) * 100
    );

    // Fetch the username using a useAsync hook
    const { data: username } = useAsync(() =>
      context.reddit.getCurrentUser().then((user) => user?.username ?? "Guest")
    );

    const timerInterval = useInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTime) => prevTime - 1);
      } else {
        setGameOver(true);
        addToLeaderboard(); // Add score to the leaderboard
      }
    }, 1000);

    timerInterval.start();

    const handleAnswer = (option: string) => {
      if (!gameOver) {
        if (option === questions[currentQuestion].answer) {
          setScore((prevScore) => prevScore + 300);
          handleNext();
        } else {
          setGameOver(true);
          addToLeaderboard(); // Add score to the leaderboard
        }
      }
    };

    const handleNext = () => {
      setCurrentQuestion((prev) => (prev + 1) % totalQuestions);
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

        //console.log("Leader", leaderboardEntries)

        // Convert to LeaderboardEntry array and set state
        const leaderboardMap: { [key: string]: number } = {};
        leaderboardEntries.forEach((entry) => {
          leaderboardMap[entry.member] = entry.score;
        });

        //console.log("Map", leaderboardMap)

        setLeaderboard((prevLeaderboard) => {
          // Merge old and new leaderboard
          const updatedLeaderboard = { ...prevLeaderboard, ...leaderboardMap };
          //console.log("Updated Leaderboard:", updatedLeaderboard);
          return updatedLeaderboard;
        });

        // Immediately log the state after setting
        //console.log("Leaderboard State After Set:", leaderboard);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
    };

    const LeaderboardView = () => {
      if (loading) return <text>Loading leaderboard...</text>;
      if (error)
        return <text>Error fetching leaderboard: {error.message}</text>;

      const sortedEntries = leaderboardData
        ? Object.entries(leaderboardData)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
        : [];

      return (
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
                      ? "#FFD700" // Gold for 1st
                      : index === 1
                      ? "#C0C0C0" // Silver for 2nd
                      : index === 2
                      ? "#CD7F32" // Bronze for 3rd
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
            </vstack>
          )}
          <button
            appearance="secondary"
            onPress={() => setShowLeaderboard(false)}
          >
            Back to Game
          </button>
        </vstack>
      );
    };

    return (
      <vstack alignment="center middle" height="320px" gap="medium">
        {showLeaderboard ? (
          <LeaderboardView />
        ) : gameOver ? (
          <>
            <text size="xxlarge" weight="bold">
              Game Over!
            </text>
            <text size="large">{`Your final score: ${score}`}</text>

            {/* Game Over Buttons */}
            <hstack gap="medium">
              <button
                appearance="primary"
                onPress={() => {
                  fetchLeaderboard();
                  setShowLeaderboard(true);
                }}
              >
                View Leaderboard
              </button>

              <button
                appearance="secondary"
                onPress={() => {
                  // Reset game state
                  setGameOver(false);
                  setScore(0);
                  setCurrentQuestion(0);
                  setTimeLeft(180);
                }}
              >
                Play Again
              </button>
            </hstack>
          </>
        ) : (
          <>
            <text size="xlarge">{`Time left: ${Math.floor(timeLeft / 60)}:${
              timeLeft % 60
            }`}</text>

            {/* Progress Bar */}
            <vstack backgroundColor="#FFD5C6" cornerRadius="full" width={95}>
              <hstack backgroundColor="#D93A00" width={progressPercentage}>
                <spacer size="medium" shape="square" />
              </hstack>
            </vstack>

            <text size="medium">{questions[currentQuestion].question}</text>
            <text size="xxlarge" weight="bold">
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
          </>
        )}
      </vstack>
    );
  },
});

export default Devvit;

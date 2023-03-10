// Store the users name, question level, path of question, last recommended game, and current recommendation.
let name;
let level = 1;
let path;
let chosenGame;
let lastRecommended;

// Arrays to allow multiple options for y/n
const yesInput = ["yes", "yeah", "yep", "sure", "yah", "yup", "y", "yep"];
const noInput = ["no", "nah", "nope", "n"];

// Variables/functions for reused messages
const happyMessage =
  "I am very glad I could help! Enjoy your new game. Type 'reset' to try again.";
const sorryMessage = (gamegenre, listurl) => {
  return `I'm sorry, I have failed you 😔.<a href="${listurl}">here is a link to the best ${gamegenre} games of 2023.</a> I hope you find something you like! Type "reset" to try again.`;
};
const invalidYesOrNo =
  "I'm sorry, I couldnt understand your answer. Try again by entering 'yes' or 'no.'";

// Array of objects for possible game recommendations
const fpsGames = [
  {
    game: "Call of Duty: Warzone",
    description:
      "COD: Warzone is a massive free-to-play Battle Royale from the world of Modern Warfare.",
    url: "https://www.activision.com/au/en/games/call-of-duty/call-of-duty-warzone",
  },
  {
    game: "Apex Legends",
    description:
      "Apex Legends is a free-to-play hero shooter game where legendary competitors battle for glory, fame, and fortune on the fringes of the Frontier.",
    url: "https://www.ea.com/games/apex-legends",
  },
  {
    game: "VALORANT",
    description:
      "VALORANT is a 5v5 character-based tactical FPS, where precise gunplay meets unique agent abilities.",
    url: "https://playvalorant.com/",
  },
  {
    game: "Gunfire Reborn",
    description:
      "Gunfire Reborn is an adventure level-based game featuring FPS, roguelite, and RPG elements.",
    url: "https://store.steampowered.com/app/1217060/Gunfire_Reborn/",
  },
  {
    game: "Risk of Rain 2",
    description:
      "Escape a chaotic alien planet by fighting through hordes of frenzied monsters - with your friends, or on your own.",
    url: "https://store.steampowered.com/app/632360/Risk_of_Rain_2/",
  },
  {
    game: "Metal: Hellslinger",
    description:
      "Metal: Hellsinger is a rhythm FPS, where your ability to shoot on the beat will enhance your gameplay experience",
    url: "https://store.steampowered.com/app/1061910/Metal_Hellsinger/",
  },
];

const fightingGames = [
  {
    game: "Super Smash Bros. Ultimate",
    description:
      "It is a crossover fighting game, with 89 playable fighters ranging from Nintendo mascots to characters from third party franchises.",
    url: "https://www.smashbros.com/en_US/",
  },
  {
    game: "Tekken 7",
    description:
      "Tekken 7 is the seventh main, and ninth overall installment in the Tekken series.",
    url: "https://store.steampowered.com/app/389730/TEKKEN_7/",
  },
  {
    game: "Mortal Kombat 11",
    description:
      "Featuring a roster of new and returning Klassic Fighters, Mortal Kombat's best-in-class cinematic story mode continues the epic saga over 25 years in the making.",
    url: "https://store.steampowered.com/app/976310/Mortal_Kombat11/",
  },
  {
    game: "Street Fighter V",
    description:
      "Experience the intensity of head-to-head battle with Street Fighter® V! ",
    url: "https://us.streetfighter.com/",
  },
  {
    game: "DRAGON BALL FighterZ",
    description:
      "DRAGON BALL FighterZ is born from what makes the DRAGON BALL series so loved and famous: endless spectacular fights with its all-powerful fighters.",
    url: "https://us.streetfighter.com/",
  },
  {
    game: "GUILTY GEAR -STRIVE-",
    description:
      "The cutting-edge 2D/3D hybrid graphics pioneered in the Guilty Gear series have been raised to the next level in “GUILTY GEAR -STRIVE-“.",
    url: "https://us.streetfighter.com/",
  },
];

const mmoGames = [
  {
    game: "World of Warcraft",
    description:
      "Join thousands of mighty heroes in Azeroth, a world of magic and limitless adventure.",
    url: "https://worldofwarcraft.blizzard.com/",
  },
  {
    game: "FINAL FANTASY XIV",
    description:
      "Take part in an epic and ever-changing FINAL FANTASY as you adventure and explore with friends from around the world.",
    url: "https://www.finalfantasyxiv.com/",
  },
  {
    game: "Old School Runescape",
    description:
      "If you're a RuneScape veteran hungry for nostalgia, get stuck right in to Old School RuneScape.",
    url: "https://oldschool.runescape.com/",
  },
  {
    game: "The Elder Scrolls Online",
    description:
      "Go anywhere, do anything, and play your way in The Elder Scrolls Online, the award-winning online RPG set in the Elder Scrolls universe.",
    url: "https://www.elderscrollsonline.com/",
  },
  {
    game: "Guild wars 2",
    description:
      "Guild Wars 2 is a visually stunning and immersive massively multiplayer online role-playing game set in the world of Tyria.",
    url: "https://www.guildwars2.com/",
  },
  {
    game: "Black Desert online",
    description:
      "It is a sandbox MMORPG set in a vast open world where players can explore, engage in action-packed combat, and immerse themselves in a deep storyline.",
    url: "https://www.naeu.playblackdesert.com/",
  },
];

const rpgGames = [
  {
    game: "The Elder Scrolls V: Skyrim",
    description:
      "Its main story focuses on the player's character, the Dragonborn, on their quest to defeat Alduin the World-Eater, a dragon who is prophesied to destroy the world.",
    url: "https://store.steampowered.com/agecheck/app/489830/",
  },
  {
    game: "The Witcher 3: Wild Hunt",
    description:
      "In this game you play as Geralt of Rivia, mercenary monster slayer.",
    url: "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/",
  },
  {
    game: "Red Dead Redemption 2",
    description:
      "The story is set in a fictionalized representation of the United States in 1899, and follows the exploits of outlaw Arthur Morgan, a member of the Van der Linde gang.",
    url: "https://www.rockstargames.com/reddeadredemption2/",
  },
  {
    game: "The Legend of Zelda: Breath of The Wild",
    description:
      "Step into a world of discovery, exploration and adventure in The Legend of Zelda™: Breath of the Wild.",
    url: "https://www.zelda.com/breath-of-the-wild/",
  },
  {
    game: "Fallout 4",
    description:
      "Fallout 4 is a post-apocalyptic open-world RPG that immerses players in a vast, desolate wasteland filled with danger and opportunity, as they navigate a compelling storyline and engage in thrilling combat.",
    url: "https://fallout.bethesda.net/en/games/fallout-4",
  },
  {
    game: "Horizon Zero Dawn",
    description:
      "Horizon Zero Dawn is an action-packed open-world RPG that transports players to a stunningly beautiful and vibrant world, where they take on the role of a skilled hunter and archer, battling robotic creatures and uncovering the mysteries of a lost civilization.",
    url: "https://www.playstation.com/en-nz/games/horizon-zero-dawn/",
  },
];

// Random game function - picks a random game from the relevant gametype array (fpsGames, mmoGames, rpgGames, fightingGames). does not recommend same game twice
const randomGame = (gamearray) => {
  do {
    chosenGame = gamearray[Math.floor(Math.random() * gamearray.length)];
  } while (chosenGame === lastRecommended);
  lastRecommended = chosenGame;
  return chosenGame;
};

// Game recommendation message - uses output from random game function
const gameRecommendation = (chosenGame) => {
  return `${chosenGame.game} is my recommendation for you. ${chosenGame.description} To find out more, <a href = "${chosenGame.url}" target = "_blank">Follow this link.</a> Are you happy with this recommendation?`;
};

// MAIN BOT FUNCTION
const getBotReply = (msg) => {
  msg = msg.toLowerCase();
  let yesAnswer;
  let noAnswer;
  if (yesInput.includes(msg)) {
    yesAnswer = true;
  } else yesAnswer = false;
  if (noInput.includes(msg)) {
    noAnswer = true;
  } else noAnswer = false;

  if (msg === "help") {
    return "I am a video game recommendation bot. type in your reply to my messages, and I will do my best to find you some good games. type 'reset' at any point to reset our conversation";
  }

  // Get the users name, greet and ask if the user prefers adventure or action
  if (level === 1) {
    level = 2;
    name = msg.charAt(0).toUpperCase() + msg.slice(1).toLowerCase();
    return `Howdy, ${name}! I am going to recommend you some cool games to try. Lets get into it - Do you prefer adventure, or action?`;
  }

  // Reset the bot at any point in the program
  if (msg === "reset" && level > 1) {
    level = 1;
    return `Alrighty, lets try again. What was your name again?`;
  }

  if (level === 2) {
    // prompt user for yes or no if adventure, guns or fists if prefer action
    if (msg === "adventure") {
      level = 3;
      path = "adventure";
      return `Do you have any friends, adventurer ${name}?`;
    } else if (msg === "action") {
      level = 3;
      path = "action";
      return `Very cool, ${name}. Think fast - guns or fists?`;
    } else
      return "Huh, I don't quite understand that. Try entering 'action' or 'adventure'.";
  }

  // user picks action
  if (level === 3 && path === "action") {
    if (msg === "guns") {
      level = 4;
      path = "fps";
      return `Pew pew! ${gameRecommendation(randomGame(fpsGames))}`;
    } else if (msg === "fists") {
      level = 4;
      path = "fighting";
      return `Get your gamepad ready ${name}. ${gameRecommendation(
        randomGame(fightingGames)
      )}`;
    } else return `Keep up, ${name}. Let's try again - guns or fists?`;
  }

  // user picks adventure
  if (level === 3 && path === "adventure") {
    if (yesAnswer) {
      level = 4;
      path = "MMO";
      return `Party up, ${name}. ${gameRecommendation(randomGame(mmoGames))}`;
    } else if (noAnswer) {
      level = 4;
      path = "RPG";
      return `Aw, thats ok ${name}, I'll be your friend! ${gameRecommendation(
        randomGame(rpgGames)
      )}`;
    } else return invalidYesOrNo;
  }

  // User is unhappy with 1st recommendation - guns
  if (level === 4 && path === "fps") {
    if (noAnswer) {
      level = 5;
      path = "fps-unhappy";
      return `It seems you are a man of culture, ${name}. ${gameRecommendation(
        randomGame(fpsGames)
      )}`;
    } else if (yesAnswer) {
      level = 6;
      return happyMessage;
    } else return invalidYesOrNo;
  }

  if (level === 5 && path === "fps-unhappy") {
    if (noAnswer) {
      level = 6;
      return sorryMessage("FPS", "https://www.theloadout.com/best-fps-games");
    } else if (yesAnswer) {
      level = 6;
      return happyMessage;
    } else return invalidYesOrNo;
  }

  // Action path - user likes fists, fighting game recommendations
  if (level === 4 && path === "fighting") {
    if (noAnswer) {
      level = 5;
      path = "fighting-unhappy";
      return `Combo breaker, ${name}! ${gameRecommendation(
        randomGame(fightingGames)
      )}`;
    } else if (yesAnswer) {
      level = 6;
      return happyMessage;
    } else return invalidYesOrNo;
  }

  if (level === 5 && path === "fighting-unhappy") {
    if (noAnswer) {
      level = 6;
      return sorryMessage(
        "Fighting",
        "https://www.one37pm.com/gaming/new-fighting-games-2023"
      );
    } else if (yesAnswer) {
      level = 6;
      return happyMessage;
    } else return invalidYesOrNo;
  }

  // Adventure path - user has friends, MMO recommendations
  if (level === 4 && path === "MMO") {
    if (noAnswer) {
      level = 5;
      path = "MMO-unhappy";
      return `It seems you are a seasoned adventurer, ${name}. ${gameRecommendation(
        randomGame(mmoGames)
      )}?`;
    } else if (yesAnswer) {
      level = 6;
      return happyMessage;
    } else return invalidYesOrNo;
  }

  if (level === 5 && path === "MMO-unhappy") {
    if (noAnswer) {
      level = 6;
      return sorryMessage("MMO", "https://videogames.si.com/guides/best-mmos");
    } else if (yesAnswer) {
      level = 6;
      return happyMessage;
    } else return invalidYesOrNo;
  }

  // Adventure path - user does not have friends, RPG/Open world recommendations
  if (level === 4 && path === "RPG") {
    if (noAnswer) {
      level = 5;
      path = "RPG-unhappy";
      return `Don't worry, ${name} We'll find you a game. ${gameRecommendation(
        randomGame(rpgGames)
      )}`;
    } else if (yesAnswer) {
      level = 6;
      return happyMessage;
    } else return invalidYesOrNo;
  }

  if (level === 5 && path === "RPG-unhappy") {
    if (noAnswer) {
      level = 6;
      return sorryMessage("RPG", "https://www.vg247.com/best-open-world-games");
    } else if (yesAnswer) {
      level = 6;
      return happyMessage;
    } else return invalidYesOrNo;
  }

  // End of chatbot
  if (level === 6 && msg !== "reset") {
    return "Very cool!. type 'reset' to try again.";
  }
};

export { getBotReply };

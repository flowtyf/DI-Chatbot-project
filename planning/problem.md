# Chatbot

## Problem statement

Create a video game recommendation chatbot that tailors suggestions based on user preference of adventure or action. For adventure, ask about preferred gameplay style (solo/multiplayer) and recommend MMO/RPG. For action, inquire about preference for fighting/FPS games and suggest accordingly. If the user is unsatisfied, provide a link to top games in the genre for further research.
At any point during the chat, the user can type 'reset' to reset the bot, or 'help' for a description of the bots functions.

Extra features WIP: the bot offers a random game recommendation twice, before the user is directed to a link of the top games in the genre.


## Inputs, processes and outputs

### Inputs:

msg

### Processes:

1. Store users name
2. Determine if user prefers action or adventure
3. Based on this answer, determine if user prefers 1 of 4 genres
4. Offer recommendations

### Outputs:

- adventure path - MMO/RPG recommendations.
- action path - FPS/Fighting game recommendations.
- user unhappy with recommendations - link to list of games in respective genre
- user happy with recommendations - Display end message and reset prompt

## Test scenarios

### Test 1 - tests if name input has first letter capitalized, if answers are case insensitive, if "happy" end message is displayed

What is your name?
Input: harry
Do you enjoy adventure or prefer jumping into the action?
Input: action
Output: Very cool, Harry. Think fast - guns or fists?
Input: guns
Output:Pew pew! CS:GO, Apex Legends, and COD:Warzone are my recommendations for you. Are you happy with these results?
Input: YEAH
Output: I am very glad I could help! Enjoy your new game(s)😀

### Test 2 - "no" all the way, tests if "unhappy" final message is displayed
What is your name?
Input: Harry
Output: Howdy, Harry! I am going to recommend you some cool games to try. Lets get into it - Do you prefer adventure, or action?
Input: action
Output: Very cool, Harry. Think fast - guns or fists?
Input: guns
Output: Pew pew! CS:GO, Apex Legends, and COD:Warzone are my recommendations for you. Are you happy with these results?
Input: no
Output: It seems you are a man of culture, Harry. You might like the Roguelite FPS Gunfire Reborn, or the third-person roguelike Risk of Rain 2. Are you happy to try one of these options?
Input: no
Output: I'm sorry, I'm all out of recommendations 😔.

### Test 3 - tests if answers that are not y/n will return an error message if input is invalid
What is your name?
Input: Harry
Output: Howdy, Harry! I am going to recommend you some cool games to try. Lets get into it - Do you prefer adventure, or action?
Input: sghsjhghl
Output: Huh, I don't quite understand that. Try entering 'action' or 'adventure'.

### Test 4 - tests if user can reset the bot at any level
What is your name?
Input: Harry
Output: Howdy, Harry! I am going to recommend you some cool games to try. Lets get into it - Do you prefer adventure, or action?
Input: reset
Output: Alrighty, lets try again. What was your name again?

### Test 5 - tests if user can ask for help at any level
What is your name?
Input: Harry
Output: Howdy, Harry! I am going to recommend you some cool games to try. Lets get into it - Do you prefer adventure, or action?
Input: help
Output: I am a video game recommendation bot. type in your reply to my messages, and I will do my best to find you some good games.



## Notes/todo
- Update tests. write test to test randomization
- Maybe implement -
- moreinfo reply
- bot image source: https://dribbble.com/shots/1055874-BMO-gif

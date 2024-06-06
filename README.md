# Rock Paper Scissors

This is a simple web-based implementation of the classic Rock Paper Scissors game using HTML, CSS, and JavaScript.

## Description

Rock Paper Scissors is a two-player game where each player chooses one of three possible moves: rock, paper, or scissors. The outcome of the game is determined by the choices made by the players:

- Rock crushes scissors.
- Scissors cuts paper.
- Paper covers rock.

This project allows a player to compete against the computer in multiple rounds of Rock Paper Scissors. The first player to reach 5 points wins the game.

## How to Play

To play Rock Paper Scissors:

1. Open the `index.html` file in your web browser.
2. Click on one of the buttons to select your move: rock, paper, or scissors.
3. The computer will randomly select its move.
4. The outcome of the round will be displayed, and the scores will be updated accordingly.
5. Continue playing until one player reaches 5 points.

## Technologies Used

- HTML
- CSS
- JavaScript

## Files Included

- `index.html`: The main HTML file containing the game interface.
- `styles.css`: The CSS file for styling the game interface.
- `script.js`: The JavaScript file containing the game logic.

## Game Logic

The game logic is implemented in the `script.js` file. Here's a brief overview of the logic:
- The `getComputerChoice` function generates a random move for the computer.
- The `playRound` function compares the player's and computer's moves and determines the winner of the round.
- The game continues until one player reaches 5 points.
- The score and game outcome are displayed after each round.


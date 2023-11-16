Project Documentation: Slide Puzzle Game

The Slide Puzzle Game is a classic puzzle game implemented using HTML, CSS, and JavaScript. The game consists of a grid of tiles that can be moved horizontally or vertically to rearrange them into a specific order. The objective of the game is to rearrange the tiles from a random order to a predefined pattern to win the game.


Project Structure:
- index.html: This file contains the structure of the game interface. It includes the game board, title, reference image, and a button to show the solution.
- style.css: This file contains the styles and layout for the game elements, including the game board, tiles, buttons, and background.
- main.js: This file contains the JavaScript code responsible for the game logic, including tile shuffling, user interactions, and win condition checking.
- imgs: This directory contains the images used in the game, including puzzle tiles and the reference image.


HTML Structure:
- <!DOCTYPE>: Declares the document type and version of HTML.
- <html>: Root element of the HTML document.
- <head>: Contains meta information and external file references.
- <body>: Contains the game elements, including the title, game board, reference image, turns counter, and solution button.


CSS Styles:
- The CSS styles define the appearance of various elements in the game, including fonts, colors, sizes, borders, and layout.


JavaScript Code:
- Variables: Define variables for game parameters such as rows, columns, current and blank tiles, and the number of turns.
- Functions:
  - shuffledOrder(array): Randomly shuffles the order of elements in the input array.
  - start(): Initializes the game by creating tiles, assigning click event listeners, and populating the game board.
  - tileClick(): Handles tile click events, checks if the clicked tile can be moved, updates the board, and checks for a win condition.
  - solution(): Reveals the solution when the button is clicked. Allows the user to reset the game after viewing the solution.
  - check(): Checks if the current order of tiles matches the correct solution order.
- Event Listeners: Attach click event listeners to tiles and solution button to trigger corresponding functions.


How to Play:
1. When the game loads, a random arrangement of tiles is displayed on the board.
2. Click on a tile adjacent to the blank space to move it into the blank space.
3. Continue moving tiles until they are rearranged to match the reference image.
4. The number of turns taken is displayed at the top.
5. Click the "Solution" button to see the correct arrangement of tiles.
6. After winning, an alert message is displayed, indicating the number of turns taken to solve the puzzle.

# flipjack.

[![flipjack screen shot][screenshot]](https://derek-graves.github.io/pancake-problem/)

`flipjack` is a demo of an interactive implementation of the pancake problem, a classic prefix reversal problem in combinatorics. In its current state, the game serves as a sandbox and visual tool for understanding and experimenting with the problem. It's built with simple visuals and intuitive mechanics.

Click on the image above to play in the sandbox!

`flipjack`'s sandbox is meant to be used in conjunction with a guided exploration of the pancake problem and associated topics, in the classroom or at home. Try out our exploration [here](https://github.com/derek-graves/pancake-problem/blob/main/pancake-exploration.pdf)!

<!--> Aspirationally, it will also include both a platform for teaching the basics of graph theory and basic combinatorial concepts like permutations and a set of challenging puzzles for users to solve--all through the fun and engaging act of flipping pancake stacks.<-->

## Features

### The Pancake Stack

Front and center. Click a pancake to flip the stack under that pancake. Each flip adds a new card to the stack history on the right side of the screen.

### Stack History

A history of previous flips. Each stack history card is numbered with the flip that obtained it in the progression. Click on a history card to return to the stack on the card. Stack history is preserved for all cards prior to and including the clicked card.

### Controls

All controls are found on the left side of the screen, stacked vertically and grouped by function.

#### Stack Visuals

Select `both`, `pancakes`, or `numbers` to change the display style of the pancake stack to your liking.

#### Interaction Modes

The default interaction mode is `flip`, which is how the user interacts with the stack in the pancake problem. Select `drag` to enable click-and-drag reordering of the stack. Note, reordering resets the stack history.

#### Number of Pancakes

Use `add` and `remove` to change the number of pancakes in the stack. These actions also reset the stack history.

#### State Changes

`undo`, `redo`, and `reset` perform their expected actions, allowing the user to correct mistakes or return to a previous stack and stack history.

## Roadmap

- [x] Add stack history
- [x] Implement click-and-drag for reordering
- [ ] Write instructional material for pancake problem basics
- [ ] Include puzzle mode with numerous levels
  - [ ] Allow switching between sandbox and puzzle modes
- [ ] Design pancake graph visual
- [ ] Make pancake graph clickable
- [ ] Animate pancake flips

[screenshot]: img/base-screenshot.png

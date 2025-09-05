# flipjack.

`flipjack` is a prototype of an interactive implementation of the pancake problem, a classic prefix reversal problem in combinatorics. In its current state, it serves as a sandbox and visual tool for understanding and experimenting with the problem. It's built with simple visuals and intuitive mechanics.

## Features

### The Pancake Stack

Click on a pancake to flip the stack under that pancake. Each flip adds a new card to the stack history area on the right side of the window.

### Stack History

Click on a card in the stack history area to return to the stack on the card. Stack history is preserved for all cards prior to and including the clicked card.

### Controls

All controls are found on the left side of the screen stacked vertically and grouped by function.

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
- [ ] Include puzzle mode with numerous levels
  - [ ] Allow switching between sandbox and puzzle modes
- [ ] Design pancake graph visual
- [ ] Make pancake graph clickable

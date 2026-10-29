# Chessican architecture

Chessican is an original browser chess engine written in JavaScript. It does not bundle Stockfish, a WASM engine, or a third-party chess-rules package.

- `js/chess.js`: 0x88 board representation, FEN parsing, attack detection, pseudo-legal/legal move generation, castling, en passant, promotion, make/undo and terminal checks.
- `js/engine.js`: material and positional evaluation, alpha-beta negamax, iterative deepening, quiescence search, move ordering, transposition table and approximate playing-strength variation.
- `js/app.js`: accessible board UI, human interaction, settings, move history, engine feedback and hint mode.
- `css/style.css`: responsive desktop/mobile layout.
- `tests/chess.test.js`: Node.js rule and engine smoke tests.

## Search limitations

This is an early independent engine, not a tournament-calibrated engine. Search depth and randomized weaker play are only rough difficulty controls; the Elo slider is not a certified rating. The opening phase currently relies on positional evaluation rather than a curated opening database. Endgame evaluation is currently basic king centralization/material handling, and draw detection does not yet cover repetition. These are explicit next steps rather than claims of complete grandmaster strength.

## Local testing

Requires Node.js 20 or later:

```sh
npm test
```

The site is static and deploys to GitHub Pages through Actions. In repository Settings → Pages, select **GitHub Actions** as the build and deployment source.
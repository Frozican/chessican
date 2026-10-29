import test from'node:test';import assert from'node:assert/strict';import{parseFen,legalMoves,play,makeMove,undoMove,status,fenOf,inCheck,START_FEN}from'../js/chess.js';import{chooseMove}from'../js/engine.js';
test('start position has 20 legal moves',()=>assert.equal(legalMoves(parseFen()).length,20));
test('e2-e4 updates side to move and en passant square',()=>{const p=parseFen();assert.ok(play(p,{from:100,to:68}));assert.equal(p.turn,'b');assert.equal(p.ep,84)});
test('undo restores initial position',()=>{const p=parseFen();const f=fenOf(p);play(p,{from:100,to:68});undoMove(p);assert.equal(fenOf(p),f)});
test('rejects illegal move',()=>{const p=parseFen();assert.equal(play(p,{from:100,to:52}),false)});
test('Fool\'s mate is detected',()=>{const p=parseFen();for(const [from,to]of[[101,85],[116,100],[102,86],[3,39]])play(p,{from,to});assert.match(status(p),/wins by checkmate/)});
test('engine returns a legal move from initial position',()=>{const p=parseFen();const r=chooseMove(p,{depth:2,time:500});assert.ok(r.move);assert.ok(legalMoves(p).some(m=>m.from===r.move.from&&m.to===r.move.to))});
        import React from 'react';
        import { useSelector, useDispatch } from 'react-redux';
        import { drawCard, startGame, setUsername } from '../features/game/gameSlice';

        export const Game = () => {
            const dispatch = useDispatch();
            const { username, deck, isGameOver, wins } = useSelector((state) => state.game);

            const handleStartGame = () => {
            dispatch(startGame());
            };

            const handleDrawCard = () => {
            dispatch(drawCard());
            };

            return (
        <div>
            <h1>Card Game</h1>
            {/* Username and start game logic */}
            <div>
            <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => dispatch(setUsername(e.target.value))}
            />
            <button onClick={handleStartGame}>Start Game</button>
            </div>
            {/* Game board */}
            <div>
            <button onClick={handleDrawCard} disabled={isGameOver || deck.length === 0}>
                Draw Card
            </button>
            </div>
            {/* Game status */}
            <div>
            {isGameOver ? <p>Game Over</p> : <p>Cards remaining: {deck.length}</p>}
            <p>Wins: {wins}</p
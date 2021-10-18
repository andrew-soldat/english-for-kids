import React, { useState, useContext } from 'react';

const GameModeContext = React.createContext();

export const useMode = () => {
	return useContext(GameModeContext);
}

export const GameModeProvider = ({ children }) => {
	let [gameMode, setGameMode] = useState(false);
	const toggleMode = () => setGameMode(!gameMode);

	return (
		<GameModeContext.Provider value={{
			isGameMode: gameMode,
			toggleMode
		}}>
			{ children }
		</GameModeContext.Provider>
	);
}

import React, { useState, useContext } from 'react';

const PlayModeContext = React.createContext();

export const useMode = () => {
	return useContext(PlayModeContext);
}

export const PlayModeProvider = ({ children }) => {
	let [playMode, setPlayMode] = useState(false);
	const toggleMode = () => setPlayMode(!playMode);

	return (
		<PlayModeContext.Provider value={{
			isPlayMode: playMode,
			toggleMode
		}}>
			{ children }
		</PlayModeContext.Provider>
	);
}

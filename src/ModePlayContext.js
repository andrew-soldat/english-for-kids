import React, { useState, useContext } from 'react';

const ModePlayContext = React.createContext();

export const useMode = () => {
	return useContext(ModePlayContext);
}

export const ModePlayProvider = ({ children }) => {
	let [modePlay, setModePlay] = useState(false);
	const toggleMode = () => setModePlay(!modePlay);

	return (
		<ModePlayContext.Provider value={{
			isModePlay: modePlay,
			toggleMode
		}}>
			{ children }
		</ModePlayContext.Provider>
	);
}

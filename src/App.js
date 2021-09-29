import './App.scss';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import CardsCategoryContainer from './components/CardsCategory/CardsCategoryContainer';
import Footer from './components/Footer';
import { HashRouter, Switch, Route } from 'react-router-dom';
// import { ModePlayProvider, useMode } from './ModePlayContext';

function App(props) {
	// const modePlay = useMode();
	let [modeGame, setModeGame] = useState(false);
	const toggleMode = () => setModeGame(!modeGame);
	// console.log(modePlay, 'app');
	

	return (
		// <ModePlayProvider>
			<HashRouter>
				<div className={`wrapper ${modeGame ? '_mode-play' : ''}`}>
					<Header store={props.store} toggleMode={toggleMode} />
					<Switch>
						<Route exact path="/" render={() => <MainPage store={props.store}/>}/>
						{Object.values(props.store).map((card) => 
							<Route key={card.name} path={`/${card.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')}`} render={() => <CardsCategoryContainer modeGame={modeGame} nameCategory={card.name} children={card.children} />}/>) }
					</Switch>
					<Footer />
				</div>
			</HashRouter>
		// </ModePlayProvider>
	);
}

export default App;

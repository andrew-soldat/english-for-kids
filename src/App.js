import './App.scss';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import CardsCategoryContainer from './components/CardsCategory/CardsCategoryContainer';
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { ModePlayProvider, useMode } from './ModePlayContext';

function App(props) {
	// const modePlay = useMode();
	let [modePlay, setModePlay] = useState(false);
	const toggleMode = () => setModePlay(!modePlay);
	// console.log(modePlay, 'app');
	

	return (
		// <ModePlayProvider>
			<BrowserRouter>
				<div className={`wrapper ${modePlay ? '_mode-play' : ''}`}>
					<Header store={props.store} toggleMode={toggleMode} />
					<Switch>
						<Route exact path="/" render={() => <MainPage store={props.store}/>}/>
						{Object.values(props.store).map((card) => 
							<Route key={card.name} path={`/${card.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')}`} render={() => <CardsCategoryContainer modePlay={modePlay} nameCategory={card.name} children={card.children} />}/>) }
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		// </ModePlayProvider>
	);
}

export default App;

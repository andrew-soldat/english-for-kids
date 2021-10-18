import './App.scss'
import React from 'react'
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import CategoryCardsContainer from './components/CategoryCards/CategoryCardsContainer'
import Footer from './components/Footer'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { GameModeProvider, useMode } from './GameModeContext'
import store from './store'

function AppContainer(props) {
	const gameMode = useMode();

	return (
		<HashRouter>
			<div className={`wrapper ${gameMode.isGameMode ? '_mode-play' : ''}`}>
				<Header />
				<Switch>
					<Route exact path="/" render={() => <MainPage />}/>
					{Object.values(store).map((card) => 
						<Route key={card.name} path={`/${card.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')}`} render={() => <CategoryCardsContainer nameCategory={card.name} children={card.children} />}/>) }
				</Switch>
				<Footer />
			</div>
		</HashRouter>
	);
}

function App(props) {
	return (
		<GameModeProvider>
			<AppContainer>
			</AppContainer>
		</GameModeProvider>
	);
}

export default App;

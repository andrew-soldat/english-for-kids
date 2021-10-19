import './App.scss'
import React from 'react'
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import CategoryCardsContainer from './components/CategoryCards/CategoryCardsContainer'
import Footer from './components/Footer'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { PlayModeProvider, useMode } from './PlayModeContext'
import store from './store'

function AppContainer(props) {
	const playMode = useMode();

	return (
		<HashRouter>
			<div className={`wrapper ${playMode.isPlayMode ? '_play-mode' : ''}`}>
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
		<PlayModeProvider>
			<AppContainer>
			</AppContainer>
		</PlayModeProvider>
	);
}

export default App;

import './App.scss'
import React from 'react'
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import Error404 from './components/Error/Error404';
import CategoryCardsContainer from './components/CategoryCards/CategoryCardsContainer'
import Footer from './components/Footer'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { PlayModeProvider, useMode } from './PlayModeContext'
import store from './store'

function AppContainer(props) {
	const playMode = useMode()

	return (
      <HashRouter>
         <div className={`wrapper ${playMode.isPlayMode ? '_play-mode' : ''}`}>
            <Header />
            <main className="page">
               <Switch>
                  <Route exact path="/">
                     <MainPage />
                  </Route>
                  {Object.values(store).map((card) => (
                     <Route
                        exact
                        key={card.name}
                        path={`/${card.name
                           .toLowerCase()
                           .replace(/[^a-zA-Z0-9]/g, '')}`}
                     >
                        <CategoryCardsContainer
                           nameCategory={card.name}
                           children={card.children}
                        />
                     </Route>
                  ))}
                  <Route exact path="/404">
                     <Error404 />
                  </Route>
                  <Redirect to="/404" />
               </Switch>
            </main>
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

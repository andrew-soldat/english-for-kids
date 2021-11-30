import './App.scss';
import React from 'react';
import Header from './components/Header';
import MainPage from './components/pages/MainPage';
import Error404 from './components/pages/Error404';
import CategoryCards from './components/pages/CategoryCards';
import Footer from './components/Footer';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { PlayModeProvider, useMode } from './PlayModeContext';
import store from './store';

function AppContainer(props) {
   const playMode = useMode();

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
                        <CategoryCards
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
         <AppContainer></AppContainer>
      </PlayModeProvider>
   );
}

export default App;

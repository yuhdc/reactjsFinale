import logo from './logo.svg';
import './App.css';
import Home from './page';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FilmInfo from './page/filminfo';
import Header from './component/header';
import SignIn from './page/signin';
import SignUp from './page/signup';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/filminfo' exact component={FilmInfo} />
        <Route path='/signin' exact component={SignIn} />
        <Route path='/signup' exact component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import FetchResultsContainer from './Components/FetchResultsContainer';
import CardResults from './Components/CardResults';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/' element={<FetchResultsContainer />} />
            <Route path='/details/:id' element={<CardResults />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Main from './views/Main';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewAuthor from './views/NewAuthor';
import UpdateAuthor from './views/UpdateAuthor';


function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>
        <Main path="/"/>
        <NewAuthor path="/new"/>
        <UpdateAuthor path="/authors/update/:_id"/>
      </Router>
    </div>
  );
}

export default App;

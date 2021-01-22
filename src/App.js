import logo from './logo.svg';
import './App.css';
import Name from './components/Name.js'
import Words from './components/Words.js'
import Moment from './components/Moment';
import Notes from './components/Notes';


function App() {
  return (
    <>
      <Name />
      <br />
      <br />
      <Moment />
      <br />
      <Notes />
      <br />
      <Words />

    </>
  );
}

export default App;

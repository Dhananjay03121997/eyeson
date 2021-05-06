import logo from './logo.svg';
import './App.css';
import Iframe from 'react-iframe'



function App() {
  return (
    <div className="App">
      <Iframe url="https://app.eyeson.team/?guest=sDVg9wDEHHUinA9t4i0z2g6b"
        width="100%"
        height="900px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allow="microphone https://app.eyeson.team; camera https://app.eyeson.team"/>
    </div>
  );
}

export default App;

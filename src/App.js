import './App.css';
import Logo from './images/image.png';
import MainContent from './components/MainContent';

function App(props) {

    return (
        <div className="App">
            <header className="App-header">
              Link Assistance
                {/* <img alt={'Link-Assitance'} src={Logo}/> */}
            </header>
            <MainContent/>
        </div>
    );
}

export default App;

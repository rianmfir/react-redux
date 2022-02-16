import { Provider } from 'react-redux';
import './App.css';
import Redux from './Redux';
import store from './Redux/app/store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Redux />
        </Provider>
      </header>
    </div>
  );
}

export default App;

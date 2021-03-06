import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import SettingsProvider from './components/context/settings'
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {
  render() {
    return (
      <SettingsProvider>
        <App />
      </SettingsProvider>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);

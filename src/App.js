import React from 'react';
import {Provider} from 'react-redux'
import { MainApp} from "./components/MainApp";
import store from "./store/reducers";

function App() {
  return (
      <Provider store={store}>
        <div className="App">
            <MainApp/>
        </div>
      </Provider>
  );
}

export default App;

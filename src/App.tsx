import React from 'react';
import './App.css';
import './index.css';
import 'antd/dist/antd.css';
import RouterApp from './RouterApp';
import 'tils/axios';
import { Provider } from 'mobx-react';
import { stores } from './stores/mobxStores';
import moment from 'moment';
import 'moment/locale/ko';

moment.locale('ko');

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}

      <Provider {...stores}>
        <RouterApp />
      </Provider>

      {/*</header>*/}
    </div>
  );
}

export default App;
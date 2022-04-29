import { Provider } from 'react-redux';
import store from './store/store';
import Header from './view/components/Header';
import TaskList from './view/components/TaskList';
import './view/styles/components/_button.css';
import './view/styles/components/_input.css';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <TaskList />
    </Provider>
  );
}

export default App;

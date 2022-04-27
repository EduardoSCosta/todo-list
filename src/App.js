import Header from './view/components/Header';
import TaskList from './view/components/TaskList';
import { TaskListProvider } from './store/contexts/Tasks';
import './view/styles/components/_button.css';
import './view/styles/components/_input.css';

function App() {
  return (
    <TaskListProvider>
      <Header />
      <TaskList />
    </TaskListProvider>
  );
}

export default App;

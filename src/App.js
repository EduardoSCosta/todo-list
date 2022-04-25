import Header from './components/Header';
import TaskList from './components/TaskList';
import { TaskListProvider } from './contexts/Tasks';
import './styles/components/_button.css';
import './styles/components/_input.css';

function App() {
  return (
    <TaskListProvider>
      <Header />
      <TaskList />
    </TaskListProvider>
  );
}

export default App;

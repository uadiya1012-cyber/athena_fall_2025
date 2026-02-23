import { useState } from 'react'
import './App.css'
import { LoginPage } from './LoginPage';
import { TasksPage } from './TasksPage';
import CounterExercise from './components/exercises/CounterExerise';
import FormExercise from './components/exercises/FormExercise';
import FilterListExercise from './components/exercises/FilterListExercise';
import AccordionExercise from './components/exercises/AccordionExercise';
import TasksLabExercise from './components/exercises/TasksLabExercise';
import LoginExercise from './components/exercises/LoginExercise';

function App() {
  const [isAuth, setIsAuth] = useState(
    !!localStorage.getItem('token')
  )
  // return isAuth ? (
  //   <TasksPage onLogout={() => { localStorage.removeItem('token'); setIsAuth(false) }} />
  // ) : (
  //   <LoginPage onLogin={() => setIsAuth(true)} />
  // )
  return (
    < main >
      <CounterExercise />
      <FormExercise />
      <FilterListExercise />
      <AccordionExercise />
      <TasksLabExercise />
      <LoginExercise />
    </main >
  )
}

export default App

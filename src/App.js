import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Habits from './pages/habits/Habits';
import Today from './pages/today/Today';
import Historic from './pages/historic/Historic';
import {useState} from 'react';
import {Context, ContextHabitsConcluded} from './Context';

function App() {

  const [loginResponse, setLoginResponse] = useState({});
  const [habitsConcluded, setHabitsConcluded] = useState(0);

  return (
    <BrowserRouter>
    <ContextHabitsConcluded.Provider value={[habitsConcluded, setHabitsConcluded]}>
     <Context.Provider value={[loginResponse, setLoginResponse]}>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cadastro" element={<Register/>}/>
    <Route path="/habitos" element={<Habits/>}/>
    <Route path="/hoje" element={<Today/>}/>
    <Route path="/historico" element={<Historic/>}/>
    </Routes>
    </Context.Provider>
    </ContextHabitsConcluded.Provider>
    </BrowserRouter>
  );
}

export default App;

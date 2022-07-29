import logo from './logo.svg';
import './App.css';
import CreateNinja from './screens/CreateNinja';
import { Route, Routes, Navigate} from 'react-router-dom';
import CreateANinja from './screens/secret/CreateANinja';


function App() {
  return (
    <Routes>
       <Route path="/final" element={<CreateANinja/>}/>
      <Route path="/" element={<CreateNinja/>}/>
    </Routes>

  );
}

export default App;

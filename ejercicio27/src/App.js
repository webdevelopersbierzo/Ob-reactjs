import Taskform from './component/Taskform';
import Tasklist from './component/Tasklist';
import Heading from './component/Heading';
import Footer from './component/Footer.jsx'
import {Routes , Route} from 'react-router-dom'; 
import './App.css';
import { Box } from '@mui/material';
import { ContextProvider } from './context/GlobalContext';

function App() {
  return (
    <Box sx={
      {
        display:'flex',
        flexDirection:'column',
        alignContent:'space-between',
        justifyContent:'center,'
      }
    }>
    <ContextProvider>
       <Heading></Heading>
      <Routes>
        <Route path='/' element={<Tasklist/>} ></Route>
        <Route path='/add' element={<Taskform/>}></Route>
        <Route path='/edit/:id' element={<Taskform/>}></Route>
      
      </Routes>
      <Footer></Footer>
    </ContextProvider>
     
    </Box>
    
  );
}

export default App;

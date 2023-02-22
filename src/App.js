import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Feed from './pages/feed';
import SearchFeed from './pages/SearchFeed';
import Videodetails from './pages/Videodetails';
import ChannelDetails from "./pages/ChannelDetails"
import Navbar from './components/Navbar';
import { Box } from '@mui/system';




function App() {
  return (
   <BrowserRouter>
       <Navbar />
        <Box sx={{background:"#000"}}>
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
          <Route path='/video/:id' element={<Videodetails />} />
          <Route path='/Channel/:id' element={<ChannelDetails/>} />
        </Routes>
       </Box>
   </BrowserRouter>
  );
}

export default App;

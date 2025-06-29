import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ColleagueList from './pages/ColleagueList/ColleagueList';
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'; 

function App() {

  return (
    <div>

      <Routes>
        <Route path="/" element={<ColleagueList />} />
        <Route path="/details" element={<ProfileDetails />} />
      </Routes>
    </div>
  )
  

}

export default App
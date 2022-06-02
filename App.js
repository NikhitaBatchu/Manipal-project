import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutMobile from './Pages/Mobile/Layout';
import NoPage from './Pages/Mobile/NoPage';
import addMobile from './Components/Mobile/addMobile';
import DisplayAllMobiles from './Components/Mobile/DisplayAllMobiles';
import DeleteMobile from './Components/Mobile/DeleteMobile';
import UpdateMobile from './Components/Mobile/UpdateMobile';
import DisplayMobileByModelNumber from './Components/Mobile/DisplayMobileByModelNumber'; 

function App() {
  return (
    <>
      <h1>Welcome to Online Mobile Application .</h1>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LayoutMobile />} />
            <Route path="mobiles" element={<DisplayAllMobiles />} />
            <Route path="addMobile" element={<addMobile />} />
            <Route path="updateMobile" element={<UpdateMobile />} />
			<Route path="mobileBymodelNumber" element={<DisplayMobileByModelNumber />} />
			<Route path="delete" element={<DeleteMobile />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
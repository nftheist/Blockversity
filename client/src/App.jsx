import './App.css';
import Home from "./pages/home/Home";
import Brilliant from "./pages/brilliant/Brilliant";
import Clever from "./pages/clever/Clever";
import Smart from "./pages/smart/Smart";
import Brilliant_page from "./pages/brilliant_page/Brilliant_page";
import Clever_page from "./pages/clever_page/Clever_page";
import Smart_page from "./pages/smart_page/Smart_page";

import { NiftoryProvider } from "@niftory/sdk/react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import client from './niftoryclient';


function App() {

  return (
    <NiftoryProvider client={client}>
      <div className="mains">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/brilliant" element={<Brilliant/>}/>
              <Route path="/clever" element={<Clever/>}/>
              <Route path="/smart" element={<Smart/>}/>
              <Route path="/brilliant/:id" element={<Brilliant_page/>}/>
              <Route path="/clever/:id" element={<Clever_page/>}/>
              <Route path="/smart/:id" element={<Smart_page/>}/>

            </Routes>
          </BrowserRouter>
      </div>
    </NiftoryProvider>
  )
}

export default App

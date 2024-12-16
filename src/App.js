import "./App.css";
import Header from "./components/header";
import Footer from "./components/header";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <div className="h-screen ">
        <h1 className=" flex text-5xl font-bold underline">
          Hello test world!
        </h1>
      </div>

      <BrowserRouter>
        <Routes>
          {/*<Route path='/register' element={<Register/>}/>*/}
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;

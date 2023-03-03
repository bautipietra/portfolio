import { Route, Routes, useLocation } from "react-router-dom"
import Nav from "./pages/Nav/Nav"
import Home from "./pages/Home/Home"
import { Toaster } from 'react-hot-toast';
import ScrollToTop from "./components/ScrollToTop";
import Docs from "./pages/Docs/Docs";
import { AnimatePresence } from "framer-motion";
import HTML from "./pages/Docs/HTML/HTML";
import Tools from "./pages/Tools/Tools";

function App() {
  const location = useLocation();
  return (
    <div className="grid relative max-w-screen w-full min-h-screen bg-[#090e19] text-white overflow-hidden">
      <ScrollToTop></ScrollToTop>
      <Nav></Nav>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: '10px',
          },
        }}
      />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="" element={<Home></Home>} />
          <Route path="/docs" element={<Docs></Docs>} />
          <Route path="/docs/html" element={<HTML></HTML>} />
          <Route path="/tools" element={<Tools></Tools>} />
          <Route path="*" element={<Home></Home>} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App

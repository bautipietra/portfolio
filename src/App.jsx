import { Route, Routes } from "react-router-dom"
import Footer from "./pages/Footer/Footer"
import Nav from "./pages/Nav/Nav"
import Home from "./pages/Home/Home"
import { Toaster } from 'react-hot-toast';
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div className="grid relative max-w-screen w-full min-h-screen bg-[#090e19] text-white overflow-hidden">
      <AnimatedCursor
        color="255,255,255"
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          '.cursorClick'
        ]}
      />
      <Nav></Nav>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: '10px',
          },
        }}
      />
      <Routes>
        <Route path="" element={<Home></Home>} />
        <Route path="*" element={<Home></Home>} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App

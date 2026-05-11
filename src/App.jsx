import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import Snack1 from "./snack/Snack1"
import Snack2 from "./snack/Snack2"
import Snack3 from "./snack/Snack3"
function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/snack1" element={<Snack1 />} />
            <Route path="/snack2" element={<Snack2 />} />
            <Route path="/snack3" element={<Snack3 />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

import './App.css'
import Info from "./components/Info"
import About from "./components/About"
import Inetrest from "./components/Interest"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="card">
      <Info />
      <About />
      <Inetrest />
      <Footer />
    </div>
  )
}

export default App

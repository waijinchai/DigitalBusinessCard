import './App.css'
import Info from "./components/Info"
import About from "./components/About"
import Inetrest from "./components/Interest"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="card">
      <Info />
      <div className="about-interest-container">
        <About />
        <Inetrest />
      </div>
      <Footer />
    </div>
  )
}

export default App

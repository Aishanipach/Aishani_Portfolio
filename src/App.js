import './App.css';
import NavScroll from './components/NavScroll';
import Home from "./components/Home";
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {

  return (
    <div className="App" >
      <NavScroll />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />

        </Routes>
      </BrowserRouter>
      {/* {console.log(articles)}
       <Home />
      <Blog articles={articles} />
      <About /> */}

    </div>
  );
}

export default App;

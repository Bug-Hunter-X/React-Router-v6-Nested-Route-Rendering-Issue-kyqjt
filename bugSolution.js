```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="about">About</Link>
    </div>
  );
}

function About() {
  const location = useLocation();
  console.log(location);
  return (
    <div>About</div>
  );
}

export default App;
```
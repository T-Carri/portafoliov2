import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';


function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>} />
    
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* Add other routes here if needed */}
      </Routes>
    </Router>
    </>
  )
}

export default App

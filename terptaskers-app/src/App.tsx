import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PostTask from './pages/PostTask';
import TaskBoard from './pages/TaskBoard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post" element={<PostTask />} />
            <Route path="/tasks" element={<TaskBoard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

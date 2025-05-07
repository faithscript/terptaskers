import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white shadow-sm z-10">
      <div className="max-w-3xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-umd-red">
          Terp Taskers
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-umd-red">
            Home
          </Link>
          <Link to="/tasks" className="text-gray-600 hover:text-umd-red">
            View Tasks
          </Link>
          <Link to="/post" className="text-gray-600 hover:text-umd-red">
            Post Task
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
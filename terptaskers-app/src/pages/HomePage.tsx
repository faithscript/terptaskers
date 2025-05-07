import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 md:p-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-umd-red mb-4">Terp Taskers</h1>
        <p className="text-xl text-gray-700 mb-8">
          Connecting College Park residents with UMD students for everyday tasks
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/post"
            className="bg-umd-red text-white rounded-lg px-6 py-3 font-medium hover:bg-red-700 transition"
          >
            Post a Task
          </Link>
          <Link
            to="/tasks"
            className="bg-gray-100 text-gray-800 rounded-lg px-6 py-3 font-medium hover:bg-gray-200 transition"
          >
            View Tasks
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">For Residents</h2>
          <p className="text-gray-700 mb-4">
            Need help with moving, yard work, or tech setup? Post your task, set your price, and connect with reliable UMD students.
          </p>
          <div className="text-umd-red font-medium">How it works:</div>
          <ul className="list-disc ml-5 text-gray-700 mt-2">
            <li>Create an account</li>
            <li>Post task details and set a fair price</li>
            <li>Get matched with a capable student</li>
            <li>Task completed on your schedule</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">For Students</h2>
          <p className="text-gray-700 mb-4">
            Looking for flexible ways to earn money? Browse available tasks, claim ones that match your skills, and get paid for your help.
          </p>
          <div className="text-umd-red font-medium">Benefits:</div>
          <ul className="list-disc ml-5 text-gray-700 mt-2">
            <li>Flexible schedule</li>
            <li>Choose tasks that match your skills</li>
            <li>Serve the local community</li>
            <li>Earn money on your terms</li>
          </ul>
        </div>
      </div>
      
      <div className="text-center mt-8">
        <p className="text-gray-500">
          Terp Taskers is a platform designed to connect the UMD and College Park communities.
        </p>
      </div>
    </div>
  );
};

export default HomePage; 
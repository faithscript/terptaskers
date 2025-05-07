import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TaskCard from '../components/TaskCard';
import type { Task } from '../types';

const TaskBoard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState('all'); // 'all', 'claimed', 'unclaimed'

  useEffect(() => {
    // Load tasks from localStorage
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleClaimTask = (taskId: string) => {
    // Prompt for UMD email
    const email = prompt('Please enter your UMD email to claim this task:');
    
    if (!email) return; // User cancelled
    
    // Validate email format (basic check for @umd.edu)
    if (!email.endsWith('@umd.edu')) {
      alert('Please enter a valid @umd.edu email address.');
      return;
    }

    // Update the task as claimed
    const updatedTasks = tasks.map(task => 
      task.id === taskId
        ? { ...task, claimed: true, claimedBy: email }
        : task
    );

    // Save to state and localStorage
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const filteredTasks = filter === 'all' 
    ? tasks 
    : filter === 'claimed' 
      ? tasks.filter(task => task.claimed) 
      : tasks.filter(task => !task.claimed);

  return (
    <div className="max-w-3xl mx-auto p-6 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-umd-red mb-4 md:mb-0">Available Tasks</h1>
        
        <div className="flex gap-2">
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-umd-red focus:outline-none"
          >
            <option value="all">All Tasks</option>
            <option value="unclaimed">Unclaimed Only</option>
            <option value="claimed">Claimed Only</option>
          </select>
          
          <Link
            to="/post"
            className="bg-umd-red text-white rounded-lg px-4 py-2 hover:bg-red-700"
          >
            Post Task
          </Link>
        </div>
      </div>
      
      {tasks.length === 0 ? (
        <div className="text-center p-8 bg-white rounded-2xl shadow-md">
          <p className="text-gray-700 text-lg mb-4">No tasks available yet.</p>
          <Link
            to="/post"
            className="bg-umd-red text-white rounded-lg px-4 py-2 hover:bg-red-700"
          >
            Post a New Task
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTasks.map(task => (
            <TaskCard 
              key={task.id} 
              task={task} 
              onClaimTask={handleClaimTask} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskBoard; 
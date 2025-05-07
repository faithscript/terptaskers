import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Task } from '../types';

const PostTask = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    dateTime: '',
    price: ''
  });

  const categories = [
    'Moving',
    'Yard Work',
    'Tech Setup',
    'Delivery',
    'Cleaning',
    'Tutoring',
    'Other'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.title || !formData.description || !formData.category || !formData.dateTime || !formData.price) {
      alert('Please fill out all fields');
      return;
    }

    // Create new task
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: formData.title,
      description: formData.description,
      category: formData.category,
      dateTime: formData.dateTime,
      price: parseFloat(formData.price),
      claimed: false
    };

    // Get existing tasks or empty array
    const existingTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    
    // Add new task and save to localStorage
    localStorage.setItem('tasks', JSON.stringify([...existingTasks, newTask]));
    
    // Navigate to task board
    navigate('/tasks');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 md:p-8">
      <h1 className="text-3xl font-bold mb-6 text-umd-red">Post a Task</h1>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Task Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-umd-red focus:outline-none"
            placeholder="E.g., Help moving furniture"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-umd-red focus:outline-none"
            placeholder="Describe what you need help with..."
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-umd-red focus:outline-none"
            required
          >
            <option value="">Select a category</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        <div className="mb-4">
          <label htmlFor="dateTime" className="block text-sm font-medium text-gray-700 mb-1">
            Date & Time
          </label>
          <input
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-umd-red focus:outline-none"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
            Price ($)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            min="1"
            step="0.01"
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-umd-red focus:outline-none"
            placeholder="25.00"
            required
          />
        </div>
        
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="bg-gray-100 text-gray-800 rounded-lg px-4 py-2 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-umd-red text-white rounded-lg px-4 py-2 hover:bg-red-700"
          >
            Post Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostTask; 
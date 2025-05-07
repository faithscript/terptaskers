import type { Task } from '../types';

interface TaskCardProps {
  task: Task;
  onClaimTask: (taskId: string) => void;
}

const TaskCard = ({ task, onClaimTask }: TaskCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div className={`relative rounded-2xl shadow-md p-4 border border-gray-200 ${task.claimed ? 'opacity-50' : ''}`}>
      {task.claimed && (
        <div className="absolute top-2 right-2 bg-umd-red text-white rounded-full px-2 py-1 text-xs font-medium">
          Claimed
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
      <div className="flex items-center justify-between mb-2">
        <span className="bg-soft-yellow text-black rounded-full px-2 py-1 text-sm font-medium">
          ${task.price.toFixed(2)}
        </span>
        <span className="text-sm text-gray-500">{task.category}</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">{formatDate(task.dateTime)}</p>
      <p className="text-base text-gray-700 mb-4">{task.description}</p>
      
      {!task.claimed && (
        <button 
          onClick={() => onClaimTask(task.id)}
          className="bg-umd-red text-white rounded-lg px-4 py-2 hover:bg-red-700 w-full"
        >
          Claim Task
        </button>
      )}
      
      {task.claimed && task.claimedBy && (
        <p className="text-sm text-gray-500 italic">Claimed by: {task.claimedBy}</p>
      )}
    </div>
  );
};

export default TaskCard; 
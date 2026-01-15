import React from 'react'
import { ArrowDownUp, ArrowLeftIcon, Delete, DeleteIcon, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import CommentCardAdminSide from '../../components/admin/comments/CommentCardAdminSide';

const Comments = () => {

  const data = [
  {
    id: 1,
    title: "AI in Product Design",
    status: "Published",
    category: "AI",
    tags: ["AI", "Design"],
  },
  {
    id: 2,
    title: "React Performance Tips",
    status: "Draft",
    category: "Development",
    tags: ["React", "Frontend"],
  },
  {
    id: 3,
    title: "Startup Growth Hacks",
    status: "Archived",
    category: "Business",
    tags: ["Startup", "Growth"],
  },
];

  return (
    <div className='m-7'>
        <div className='w-full flex justify-between items-center'>
          <div className='flex flex-row gap-2 items-center pl-4'>
            <ArrowLeftIcon className="h-5 w-5 text-violet-600 hover:text-gray-700 cursor-pointer" />
            <span className='text-violet-600 text-xl font-semibold'>Viewer Comments</span>
          </div>
          <button className='px-2.5 py-1 rounded bg-green-600 text-white flex flex-row gap-1 items-center'><ArrowDownUp size={16} /> Short pending comments</button>
        </div>
        <div className='mt-10'>
          <div className="overflow-x-auto bg-white rounded-xl border border-violet-300">
            <div className='bg-violet-50 p-4'>
              <h5 className='flex flex-row gap-2 items-center text-red-600'><span className='border border-red-200 text-xs px-2 py-0.5 rounded-lg'>99</span> Pending comments found</h5>
            </div>
      <div className='flex flex-wrap gap-4 justify-center my-8 mx-2'>
        {[1,1,1,1].map(() => (
            <CommentCardAdminSide />
        ))}
      </div>
    </div>
        </div>
    </div>
  )
}

export default Comments
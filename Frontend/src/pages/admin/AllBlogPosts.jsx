import React from 'react'
import { ArrowLeftIcon, Delete, DeleteIcon, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import Badge from '../../components/admin/global/Badge';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { allBlogsForAdmin } from '../../tanstackQuery/allBlogsForAdmin.js';

const AllBlogPosts = () => {


    const { data, isLoading, error } = useQuery({
    queryKey: ["allBlogsForAdmin"],
    queryFn: allBlogsForAdmin,
    refetchOnWindowFocus: false,
  });

  console.log(data);
  if (error) return console.log(error);

  const isLiveToggle = async(id)=>{
    console.log(id);
    try {
      const {data} = await axios.patch(`/api/blog/togglepublish`, {id});
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }

  const deleteToggle = async(id)=>{
    try {
      const {data} = await axios.delete(`/api/blog/deletebyid/${id}`);
      console.log("Deleted");
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='m-7'>
        <div className='w-full flex justify-between items-center'>
          <div className='flex flex-row gap-2 items-center pl-4'>
            <ArrowLeftIcon className="h-5 w-5 text-violet-600 hover:text-gray-700 cursor-pointer" />
            <span className='text-violet-600 text-xl font-semibold'>Posts</span>
          </div>
          <Link to="/admin" className='px-2.5 py-1 rounded bg-violet-600 text-white'>Write Blog</Link>
        </div>
        <div className='mt-10'>
          <div className="overflow-x-auto bg-white rounded-xl border border-violet-300">
            <div className='bg-violet-50 p-4'>
              <h5 className='flex flex-row gap-2 items-center text-violet-600'><span className='border border-violet-200 text-xs px-2 py-0.5 rounded-lg'>99</span> Posts found</h5>
            </div>
      <table className="min-w-full text-sm">
        <thead className="bg-violet-50 font-normal text-violet-700/50">
          <tr>
            <th className="p-3 text-left">
              <span>No.</span>
            </th>
            <th className="p-3 text-left font-semibold">Title</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Tags</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {isLoading ? <p>Loading......</p> : (data?.blogs?.map((item, index) => (
            <tr
              key={item._id}
              className="border-t border-violet-300 hover:bg-violet-50 transition"
            >
              <td className="p-3">
                <span className='py-0.5 px-1 rounded-full border-2 bg-violet-500 border-violet-400 text-xs text-white font-bold'>{index+1}</span>
              </td>

              <td className="p-3 font-normal text-gray-500">{item.title}</td>

              <td className="p-3">
                <Badge type={item.isLive} />
              </td>

              <td className="p-3 font-normal text-gray-500">{item.category}</td>

              <td className="p-3 flex gap-1 flex-wrap">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded bg-violet-100 text-violet-700"
                  >
                    {tag}
                  </span>
                ))}
                <span
                    className="px-2 py-0.5 text-xs rounded text-gray-500"
                  >
                    + more
                  </span>
              </td>

              <td className="p-3 space-x-2">
                <button onClick={()=> isLiveToggle(item._id)} className="text-violet-600 hover:underline">
                  <Eye size={16} />
                </button>
                <button onClick={()=>deleteToggle(item._id)} className="text-red-600 hover:underline">
                  <DeleteIcon size={16} />
                </button>
              </td>
            </tr>
          )))}
        </tbody>
      </table>
    </div>
        </div>
    </div>
  )
}



export default AllBlogPosts
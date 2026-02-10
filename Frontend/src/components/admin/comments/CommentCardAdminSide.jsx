import axios from 'axios'
import { DeleteIcon, Eye, Recycle, User } from 'lucide-react'
import React from 'react'

const CommentCardAdminSide = ({comment}) => {

    const isApprovedToggle = async()=>{
        try {
            const {data} = await axios.patch(`${import.meta.env.VITE_BASE_URL}/api/comment/status/${comment._id}`);
            if(data.success){
                console.log("Updated.")
            }
        } catch (error) {
            console.log(error);
        }
    }

    const deleteComment = async()=>{
        try {
            const {data} = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/comment/delete/${comment._id}`);
            if(data.success){
                console.log('Deleted successfully.')
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="w-full border border-violet-200 backdrop-blur-2xl bg-violet-300/15 p-6 rounded-xl mx-2 max-w-xl">
            <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                    <div className="bg-violet-200 border border-violet-100 rounded-lg p-3">
                        <User className='text-violet-700' />
                    </div>
                    <div>
                        <h3 className="text-base font-medium text-violet-600">
                            {comment.name}
                        </h3>
                        <span className='text-xs'>Date - 01/01/2026</span>
                    </div>
                </div>
                <div className='flex flex-row gap-4'>
                    <span className={`text-xs ${comment.isApproved ? "bg-green-200 text-green-600" : "bg-orange-200 text-orange-500"} px-2.5 py-1 rounded-full`}>{comment.isApproved? "Approved":"Pending"}</span>
                    <span onClick={isApprovedToggle} className="text-xs text-red-600"><Eye /></span>
                    <span onClick={deleteComment} className="text-xs text-red-600"><DeleteIcon /></span>
                </div>
            </div>
            <div className="px-5 mt-6 text-gray-500 space-y-2">
                <span className='text-sm'>Comment :</span>
                <p className='max-h-12 text-sm overflow-y-scroll'>{comment.comment}</p>
            </div>
        </div>
  )
}

export default CommentCardAdminSide
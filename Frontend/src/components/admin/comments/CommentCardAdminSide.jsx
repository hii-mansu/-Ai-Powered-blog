import { DeleteIcon, Recycle, User } from 'lucide-react'
import React from 'react'

const CommentCardAdminSide = () => {
  return (
    <div className="w-full border border-violet-200 backdrop-blur-2xl bg-violet-300/15 p-6 rounded-xl mx-2 max-w-xl">
            <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                    <div className="bg-violet-200 border border-violet-100 rounded-lg p-3">
                        <User className='text-violet-700' />
                    </div>
                    <div>
                        <h3 className="text-base font-medium text-violet-600">
                            Himanshu Singh
                        </h3>
                        <span className='text-xs'>Date - 01/01/2026</span>
                    </div>
                </div>
                <div className='flex flex-row gap-4'>
                    <span className="text-xs bg-green-200 text-green-600 px-2.5 py-1 rounded-full">Approved</span>
                    <span className="text-xs text-red-600"><DeleteIcon /></span>
                </div>
            </div>
            <div className="px-5 mt-6 text-gray-500 space-y-2">
                <span className='text-sm'>Comment :</span>
                <p className='max-h-12 text-sm overflow-y-scroll'>Lead end-to-end development of large-scale, high-performance systems used by millions of users Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, facilis at architecto repellat in rem doloremque obcaecati temporibus corporis ut, eum, voluptates exercitationem eos molestias quisquam iusto dicta itaque magni!.</p>
            </div>
        </div>
  )
}

export default CommentCardAdminSide
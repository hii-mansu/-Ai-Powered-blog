import React from 'react'
import { useSiteContext } from '../../contexts/SiteContext';

const Tab = () => {
  const tb = ['all', 'react', 'node'];
  const {setInput} = useSiteContext()
  return (
    <div className="flex space-x-2 p-1 mt-4 border overflow-x-scroll border-gray-500/50 text-sm rounded-md">
            {
              tb.map((item)=>(
                <button onClick={()=>setInput(item)} className="cursor-pointer text-xs py-1 px-9 text-gray-500 transition-colors duration-200 peer-checked:bg-purple-700 rounded-md peer-checked:text-white">HTML</button>
              ))
            }
        </div>
  )
}

export default Tab
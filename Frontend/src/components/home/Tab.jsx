import React from 'react'

const Tab = () => {
  const tb = [1,1,1];
  return (
    <div className="flex space-x-2 p-1 mt-4 border overflow-x-scroll border-gray-500/50 text-sm rounded-md">
            {
              tb.map(()=>(
                <div className="flex flex-wrap items-center">
                <input type="radio" name="options" id="html" className="hidden peer" checked />
                <label htmlFor="html" className="cursor-pointer text-xs py-1 px-9 text-gray-500 transition-colors duration-200 peer-checked:bg-purple-700 rounded-md peer-checked:text-white">HTML</label>
            </div>
              ))
            }
        </div>
  )
}

export default Tab
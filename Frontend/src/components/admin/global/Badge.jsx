import React from 'react'

const Badge = ({type}) => {
  return (
    <div className={`flex items-center gap-2 w-fit border ${type ==="Published" ? "border-green-300" : type ==="Archived" ? "border-red-300" : "border-yellow-300"} rounded-xl px-2 py-0.5 text-sm`}>
            <div className={`size-1.5 rounded-full ${type ==="Published" ? "bg-green-500" : type ==="Archived" ? "bg-red-500" : "bg-yellow-500"}`}></div>
            <span className='text-xs'>{type}</span>
        </div>
  )
}

export default Badge
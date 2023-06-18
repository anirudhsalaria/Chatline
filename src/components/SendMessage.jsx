import React from 'react'

const SendMessage = () => {
  return (
    <div className='bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg'>
      <form className='conatinerWrap flex'>
        <input className='input w-full focus:outline-none bg-gray-100 rounded-r-none' type="text" />
        <button className='w-auto bg-blue-500 text-white rounded-r-lg px-5 text-sm'>Send</button>
      </form>
    </div>
  )
}

export default SendMessage

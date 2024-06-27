import React from 'react'

export default function EmptyTable({text = 'لا توجد أي بيانات' }) {
  return (
    <div className='justify-center align-middle text-center py-5 h-100'>
      <div>
        <div>
          <img className=' h-20 w-20 avatar' src='/icon/empty.png'/>
        </div>
        <div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

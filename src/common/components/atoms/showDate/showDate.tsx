import React from 'react'
import { fromatDate } from '../date/date'
import { useDispatch } from 'react-redux'

const ShowDate = ({fDate,endDate,setSearch,setCreated,created,action = {startDate:null,  endDate:null }}:any) => {
  const dispatch = useDispatch()
  return (
    <>
    
    {fDate && <p className='my-1'>تاريخ البداية : {fromatDate(fDate)}</p>}
    {endDate && fDate && <p>تاريخ النهاية : {fromatDate(endDate)}</p>}
    <div className='flex justify-between mt-2'>
          <button className='block mx-auto border px-5 py-2 bg-[#5B36D3] text-white rounded-lg' onClick={()=> {setCreated(!created)}}>تاريخ الانشاء</button>

      {fDate &&     <button className='block mx-auto border px-5 py-2 bg-red-400 text-white rounded-lg' onClick={()=> dispatch(setSearch(action))}>حذف التاريخ</button>
}
    </div>
    </>
  )
}

export default ShowDate
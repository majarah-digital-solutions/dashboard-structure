"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, setFilter } from "./analysisSlice";
import CustomDateRangePicker from "~/common/components/atoms/customDateRangePicker";
import Analysis from "./components/sections/analysis";
const Page = () => {
  const dispatch = useDispatch();
  const {data:{users,views},filter: { startDate, endDate } ,loading} = useSelector(
    (state: any) => state.analysisSlice
  );
useEffect(()=>{
  dispatch(fetchData())
},[dispatch])


const handleDateChange = (startDate: string, endDate: string) => {
  dispatch(setFilter({ startDate, endDate }));
};

  return (
    <>
    <div className="grid grid-cols-2 gap-4">
      <div dir="rtl" className={'ltr'} style={{ direction: 'ltr' }}>
          <CustomDateRangePicker startDate={startDate} endDate={endDate} onDateChange={handleDateChange}  />
      </div>
      {/* All Sections Analysis */}
      <Analysis data={users} loading={loading} name='كل المستخدمين' title={`المستخدمين`} description={`الإجمالي : ${users?.total ?? 0}`} />
      <Analysis data={views} loading={loading} name='كل الزيارات' title={`الزيارات`} description={`الإجمالي : ${views?.total ?? 0}`} />      
    </div>
    </>
  );
};

export default Page;

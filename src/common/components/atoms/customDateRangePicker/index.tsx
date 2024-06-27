import * as React from 'react';
import { DateRangePicker } from 'react-date-range';
import { DateTime } from 'luxon';
import { useDispatch } from 'react-redux';
import { setFilter } from '~/app/dashboard/analysis/analysisSlice';

const CustomDateRangePicker = ({ startDate, endDate, onDateChange }: { startDate: any, endDate: any, onDateChange: (startDate: any, endDate: any) => void }) => {
  const dispatch = useDispatch();

  const handleChange = (item: any) => {
    if (item) {
      const startDateLuxon: any = DateTime.fromJSDate(item.selection.startDate)
        .setZone('Asia/Amman')
        .startOf('day')
        .toISO();
      const endDateLuxon: any = DateTime.fromJSDate(item.selection.endDate)
        .setZone('Asia/Amman')
        .endOf('day')
        .toISO();
      onDateChange(startDateLuxon, endDateLuxon);
      dispatch(setFilter({ startDate: startDateLuxon, endDate: endDateLuxon }));
  
    }
  };

  return (
    <DateRangePicker
      onChange={handleChange}
      editableDateInputs={false}
      moveRangeOnFirstSelection={false}
      ranges={[{
        startDate: DateTime.fromISO(startDate).setZone('Asia/Amman').toJSDate(),
        endDate: DateTime.fromISO(endDate).setZone('Asia/Amman').toJSDate(),
        key: 'selection',
    
      }]}
    />
  );
};

export default CustomDateRangePicker;

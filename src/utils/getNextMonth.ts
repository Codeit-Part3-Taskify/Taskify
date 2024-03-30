import { Dispatch, SetStateAction } from 'react';

export default function nextMonth(
  currentDate: Date,
  setCurrentDate: Dispatch<SetStateAction<Date>>
) {
  setCurrentDate(
    new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
  );
}

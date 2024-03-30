import { Dispatch, SetStateAction } from 'react';

export default function prevMonth(
  currentDate: Date,
  setCurrentDate: Dispatch<SetStateAction<Date>>
) {
  setCurrentDate(
    new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
  );
}

import Column from 'src/components/Dashboard/Column';
import AddColumn from 'src/components/Dashboard/AddColumn';
import axiosInstance from 'src/apis/axios';
import { useEffect, useState } from 'react';
// "id": 1264,
// "email": "test@codeit.com",
// "nickname": "test",
// "profileImageUrl": null,
// "createdAt": "2024-03-15T17:35:03.831Z",
// "updatedAt": "2024-03-15T17:35:03.831Z"

// async function createCard() {
//   await axiosInstance
//     .post(
//       'cards',
//       {
//         assigneeUserId: 1264,
//         dashboardId: 4847,
//         columnId: 16331,
//         title: 'test',
//         description: 'test',
//         dueDate: '2024-03-25 12:00',
//         tags: ['일반'],
//         imageUrl: undefined
//       },
//       {
//         headers: { Authorization }
//       }
//     )
//     .then(res => console.log(res.data))
//     .catch(error => console.error(error));
// }

export default function Dashboard() {
  return (
    <main className="w-screen h-screen bg-[#FAFAFA] flex">
      <Column />
      <AddColumn />
    </main>
  );
}

import axios from './axiosInstance';

// react-query과 관련이 없도록 사용
const readCardList = async (columnId: number, pageParam: number = 0) => {
  const { data } = await axios.get(
    `cards?columnId=${columnId}&size=${5}&${
      pageParam && `cursorId=${pageParam}`
    }`
  );

  return data;
};

export default readCardList;

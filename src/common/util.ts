import { collection, getDocs } from 'firebase/firestore';

export const loadMemoList = async (firebaseDb: any, firebaseDocID: string) => {
  const memoList = await getDocs(collection(firebaseDb, firebaseDocID));
  const memoItem: object[] = [];
  memoList.forEach((doc) => {
    memoItem.push(doc.data());
  });
  return memoItem;
};

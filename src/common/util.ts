import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

export const loadMemoList = async (
  firebaseDb: any,
  firebaseCollectionID: string
) => {
  const memoList = await getDocs(collection(firebaseDb, firebaseCollectionID));
  const memoItem: object[] = [];
  memoList.forEach((doc) => {
    memoItem.push(doc.data());
  });
  return memoItem;
};

export const loadMemo = async (
  firebaseDb: any,
  firebaseCollectionID: string,
  firebaseDocID: string
) => {
  const memo = await getDoc(
    doc(firebaseDb, firebaseCollectionID, firebaseDocID)
  );

  return memo.data();
};

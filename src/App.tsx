import HomePage from 'pages/home/home.container';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import Memo from 'pages/memo/memo.container';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUR_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebaseDb = getFirestore(app);

// const analytics = getAnalytics(app);

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route>
          <Route path='/:id' element={<Memo />} />
          <Route path='/' element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

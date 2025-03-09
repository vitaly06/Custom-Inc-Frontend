import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contacts from './Components/MainPage/Contacts/Contacts';
import FirstBlock from './Components/MainPage/FirstBlock/FirstBlock';
import Header from './Components/MainPage/Header/Header';
import JoinBlock from './Components/MainPage/JoinBlock/JoinBlock';
import SecondBlock from './Components/MainPage/SecondBlock/SecondBlock';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import Profile from './Components/Profile/Profile';
import ProtectedRoute from './Components/ProtectedRoute'; // Импортируйте ProtectedRoute

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/" element={
            <>
              <Header />
              <FirstBlock />
              <SecondBlock />
              <JoinBlock />
              <Contacts />
            </>
          } />
        </Routes>
      </>
    </Router>
  );
}

export default App;
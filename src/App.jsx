import './App.css';
import Navbar from "./components/Navbar";
import ChatRoom from "./pages/ChatRoom";
import { Routes,Route } from "react-router-dom";
import { PrivateRoute } from "./routes/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Login from './pages/login';
function App() {

  return (
    <>
      <AuthProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/chat' element={
            <PrivateRoute>
              <ChatRoom/>
            </PrivateRoute>
          } />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App

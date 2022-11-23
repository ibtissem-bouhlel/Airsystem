import React, { useEffect, useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login"
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup";
import Days from "./components/Days";
import Months from "./components/Months";
import UpdateProfile from "./components/UpdateProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import SensorsInfo from "./components/SensorsInfo";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Hours from "./components/Hours";
import Sidebar from './components/Sidebar/Sidebar'
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";
//import { auth } from "./firebase"
function App() {
  const [photo, setPhoto] = useState('https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg');
  useEffect(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(user.photoURL)
      setPhoto(user.photoURL)
      // ...
    } else {
      console.log("User is signed out")
      // User is signed out
      
    }
  });
  }, [])

  const SidebarLayout = () => (
    <>

      <Sidebar />

      <Outlet />
    </>
  );
  const NabvarLayout = () => (



    <Navbar photo={photo} />



  );
  return (

    <div className="App">

      <UserAuthContextProvider>
        <Routes>
          <Route element={<><NabvarLayout /><SidebarLayout /> </>}>
            <Route
              path="/dashboard/:id"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
             <Route
              path="/days/:id"
              element={
                <ProtectedRoute>
                  <Days/>
                </ProtectedRoute>
              }
            />
             <Route
              path="/hours/:id"
              element={
                <ProtectedRoute>
                  <Hours/>
                </ProtectedRoute>
              }
            />
             <Route
              path="/month/:id"
              element={
                <ProtectedRoute>
                  <Months/>
                </ProtectedRoute>
              }
            />

            <Route path="/info/:id" element={<SensorsInfo />} />

            <Route path="/update-profile" element={
              <ProtectedRoute>
                <UpdateProfile />
              </ProtectedRoute>
            } />
          </Route>
          <Route element={<> <NabvarLayout /> <Outlet /></>}>

          <Route 
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          </Route>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>

      </UserAuthContextProvider>
    </div>


  );

}

export default App;

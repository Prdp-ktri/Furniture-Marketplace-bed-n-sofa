import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { createContext, lazy, Suspense, useEffect, useState } from "react";
import Loader from "./components/admin/Loader";
import { ToastContainer } from "react-toastify";
import Header from "./components/admin/Header";

export const AdminLoginContext = createContext();

const AdminLoginCredentials = lazy(() =>
  import("./modules/admin/AdminLoginCredentials")
);
const AdminDashboard = lazy(() => import("./modules/admin/AdminDashboard"));

function App() {
  const [adminLogin, setAdminLogin] = useState(
    () => JSON.parse(localStorage.getItem("adminLogin")) || false
  );

  useEffect(() => {
    localStorage.setItem("adminLogin", JSON.stringify(adminLogin));
  }, [adminLogin]);

  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <BrowserRouter>
        <AdminLoginContext.Provider value={{ adminLogin, setAdminLogin }}>
          {adminLogin && <Header />}
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loader />}>
                  <AdminLoginCredentials />
                </Suspense>
              }
            />
            <Route
              path="/adminDashboard"
              element={
                <Suspense fallback={<Loader />}>
                  {adminLogin ? <AdminDashboard /> : <Navigate to="/" />}
                </Suspense>
              }
            />
          </Routes>
        </AdminLoginContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

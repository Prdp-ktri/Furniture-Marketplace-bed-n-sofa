import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { createContext, lazy, Suspense, useEffect, useState } from "react";
import Loader from "./components/admin/Loader";
import { ToastContainer } from "react-toastify";
import Header from "./components/admin/Header";
import BuyerCreation from "./modules/buyer/BuyerCreation";
import SellerCreation from "./modules/seller/SellerCreation";

export const AdminLoginContext = createContext();
export const BuyerLoginContext = createContext();
export const SellerLoginContext = createContext();

const AdminLoginCredentials = lazy(() =>
  import("./modules/admin/AdminLoginCredentials")
);
const AdminDashboard = lazy(() => import("./modules/admin/AdminDashboard"));

const BuyerLoginCredentials = lazy(() =>
  import("./modules/buyer/BuyerLoginCredentials")
);
const BuyerDashboard = lazy(() => import("./modules/buyer/BuyerDashboard"));

const SellerLoginCredentials = lazy(() =>
  import("./modules/seller/SellerLoginCredentials")
)
const SellerDashboard = lazy(()=> import("./modules/seller/SellerDashboard"));

function App() {
  const [adminLogin, setAdminLogin] = useState(
    () => JSON.parse(localStorage.getItem("adminLogin")) || false
  );

  const [buyerLogin, setBuyerLogin] = useState(
    () => JSON.parse(localStorage.getItem("buyerLogin")) || false
  );

  const [sellerLogin, setSellerLogin] = useState(
    () => JSON.parse(localStorage.getItem("sellerLogin")) || false
  )

  useEffect(() => {
    localStorage.setItem("adminLogin", JSON.stringify(adminLogin));
    localStorage.setItem("buyerLogin", JSON.stringify(buyerLogin));
    localStorage.setItem("sellerLogin", JSON.stringify(sellerLogin));
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
              path="/admin"
              element={<Suspense fallback={<Loader />}></Suspense>}
            />
            <Route
              path="/adminLogin"
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
        <BuyerLoginContext.Provider value={{ buyerLogin, setBuyerLogin }}>
          <Routes>
            <Route
              path="/buyerCreation"
              element={
                <Suspense fallback={<Loader />}>
                  <BuyerCreation />
                </Suspense>
              }
            />
            <Route
              path="/buyerLogin"
              element={
                <Suspense fallback={<Loader />}>
                  <BuyerLoginCredentials />
                </Suspense>
              }
            />
            <Route
              path="/buyerDashboard"
              element={
                <Suspense fallback={<Loader />}>
                  <BuyerDashboard />
                </Suspense>
              }
            />
          </Routes>
        </BuyerLoginContext.Provider>
        <SellerLoginContext.Provider value={{sellerLogin, setSellerLogin}}>
          <Routes>
            <Route
              path="/sellerCreation"
              element={
                <Suspense fallback={<Loader/>}>
                  <SellerCreation/>
                </Suspense>
              }
            />
            <Route
              path="/sellerLogin"
              element={
                <Suspense fallback={<Loader/>}>
                  <SellerLoginCredentials/>
                </Suspense>
              }
            />
            <Route
              path="/sellerDashboards"
              element={
                <Suspense fallback={<Loader/>}>
                  <SellerDashboard/>
                </Suspense>
              }
            />
          </Routes>
        </SellerLoginContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

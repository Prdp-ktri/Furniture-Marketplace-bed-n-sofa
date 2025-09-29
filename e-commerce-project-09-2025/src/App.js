import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { createContext, lazy, Suspense, useEffect, useState } from "react";
import Loader from "./components/admin/Loader";
import { ToastContainer } from "react-toastify";
// import Header from "./components/admin/AdminHeader";
import BuyerCreation from "./modules/buyer/BuyerCreation";
import SellerCreation from "./modules/seller/SellerCreation";
import LoginPortal from "./modules/login/LoginPortal";
import AddProduct from "./components/admin/AddProduct";
import ViewProducts from "./components/admin/ViewProducts";
import ManageProducts from "./components/admin/ManageProducts";
import AllLatchableProducts from "./modules/seller/AllLatchableProducts";
import AdminHeader from "./components/admin/AdminHeader";
import SellerHeader from "./components/seller/SellerHeader";

export const AdminLoginContext = createContext();
export const BuyerLoginContext = createContext();
export const SellerLoginContext = createContext();
export const LoginContext = createContext();

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
);
const SellerDashboard = lazy(() => import("./modules/seller/SellerDashboard"));

const EditProductDetails = lazy(() =>
  import("./components/admin/EditProductDetails")
);

function App() {
  const [login, setLogin] = useState(
    () => JSON.parse(localStorage.getItem("login")) || false
  );

  const [adminLogin, setAdminLogin] = useState(
    () => JSON.parse(localStorage.getItem("adminLogin")) || false
  );

  const [buyerLogin, setBuyerLogin] = useState(
    () => JSON.parse(localStorage.getItem("buyerLogin")) || false
  );

  const [sellerLogin, setSellerLogin] = useState(
    () => JSON.parse(localStorage.getItem("sellerLogin")) || false
  );

  useEffect(() => {
    localStorage.setItem("adminLogin", JSON.stringify(adminLogin));
    localStorage.setItem("buyerLogin", JSON.stringify(buyerLogin));
    localStorage.setItem("sellerLogin", JSON.stringify(sellerLogin));
    localStorage.setItem("login", JSON.stringify(login));
  }, [login, adminLogin, sellerLogin, buyerLogin]);

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
        <LoginContext.Provider value={{ login, setLogin }}>
          <AdminLoginContext.Provider value={{ adminLogin, setAdminLogin }}>
            <BuyerLoginContext.Provider value={{ buyerLogin, setBuyerLogin }}>
              <SellerLoginContext.Provider
                value={{ sellerLogin, setSellerLogin }}
              >
                {adminLogin && <AdminHeader />}
                {sellerLogin && <SellerHeader />}
                <Routes>
                  {/* General */}
                  <Route
                    path="/"
                    element={
                      <Suspense fallback={<Loader />}>
                        <LoginPortal />
                      </Suspense>
                    }
                  />

                  {/* Admin */}
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
                  <Route
                    path="/addProduct"
                    element={
                      <Suspense fallback={<Loader />}>
                        <AddProduct />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/viewProducts"
                    element={
                      <Suspense fallback={<Loader />}>
                        <ViewProducts />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/editProductDetails/:id"
                    element={
                      <Suspense fallback={<Loader />}>
                        <EditProductDetails />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/manageProducts"
                    element={
                      <Suspense fallback={<Loader />}>
                        <ManageProducts />
                      </Suspense>
                    }
                  />

                  {/* Buyer */}
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

                  {/* Seller */}
                  <Route
                    path="/sellerCreation"
                    element={
                      <Suspense fallback={<Loader />}>
                        <SellerCreation />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/sellerLogin"
                    element={
                      <Suspense fallback={<Loader />}>
                        <SellerLoginCredentials />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/sellerDashboard"
                    element={
                      <Suspense fallback={<Loader />}>
                        <SellerDashboard />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/allLatchableProducts"
                    element={
                      <Suspense fallback={<Loader />}>
                        <AllLatchableProducts />
                      </Suspense>
                    }
                  />
                </Routes>
              </SellerLoginContext.Provider>
            </BuyerLoginContext.Provider>
          </AdminLoginContext.Provider>
        </LoginContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { useContext } from "react";
import UserContextTypes from "../types/UserDataContextTypes";
import UserDataContext from "../context/UserDataContext";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "../pages/Landing";
import { IOSExpand, SlideInOut } from "../animation/transitions";
import Signup from "../pages/Signup";
import StoreLayout from "../layouts/StoreLayout";
import Dashboard from "../pages/Dashboard";
import AllProducts from "../pages/AllProducts";
import Categories from "../pages/Categories";
import Statistics from "../pages/Statistics";
import Account from "../pages/Account";

function CoreRouter() {
  const { userData }: UserContextTypes = useContext(UserDataContext);
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route
          path="/"
          element={
            <IOSExpand>
              <Landing />
            </IOSExpand>
          }
        />
        <Route
          path="/register"
          element={
            <IOSExpand>
              <Signup />
            </IOSExpand>
          }
        />
        {userData?._id && (
          <Route path="/store" element={<StoreLayout />}>
            <Route
              index
              element={
                <SlideInOut>
                  <Dashboard />
                </SlideInOut>
              }
            />
            <Route
              path="all-products"
              element={
                <SlideInOut>
                  <AllProducts />
                </SlideInOut>
              }
            />
            <Route
              path="categories"
              element={
                <SlideInOut>
                  <Categories />
                </SlideInOut>
              }
            />
            <Route
              path="statistics"
              element={
                <SlideInOut>
                  <Statistics />
                </SlideInOut>
              }
            />
            <Route
              path="account"
              element={
                <SlideInOut>
                  <Account />
                </SlideInOut>
              }
            />
          </Route>
        )}
      </Routes>
    </AnimatePresence>
  );
}

export default CoreRouter;

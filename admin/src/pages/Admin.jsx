// src/pages/Admin.jsx
import { Route, Routes } from "react-router-dom";
import SideBar from "../components/SideBar";
import AddProduct from "../components/AddProduct";
import AllProduct from "../components/AllProduct";
import Login from "./Login";
import ProtectedRoute from "../components/ProtectedRoute";

const Admin = () => {
  return (
    <div className="lg:flex">
      <SideBar />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/addProduct"
          element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          }
        />

        <Route
          path="/allProduct"
          element={
            <ProtectedRoute>
              <AllProduct />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default Admin;

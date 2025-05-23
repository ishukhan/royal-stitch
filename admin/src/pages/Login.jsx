import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [modal, setModal] = useState({ show: false, message: "" });
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showModal = (message, type = "info") => {
    setModal({ show: true, message, type });
    setTimeout(
      () => setModal({ show: false, message: "", type: "info" }),
      3000
    );
  };

  const logIn = async () => {
    try {
      const response = await fetch(
        "https://royal-stitch.onrender.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const msg =
          data.message === "Invalid credentials" ||
          data.message === "User not found"
            ? "Invalid email or password. Please try again."
            : data.message || "Login failed.";
        showModal(msg);
        return;
      }

      localStorage.setItem("auth-token", data.token);
      window.location.replace("/addProduct");
    } catch (error) {
      showModal("Login failed. Please try again.");
    }
  };

  const signUp = async () => {
    try {
      const response = await fetch(
        "https://royal-stitch.onrender.com/api/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        showModal(data.message || "Signup failed.");
        return;
      }

      localStorage.setItem("auth-token", data.token);
      showModal("Signup successful! Redirecting...");
      setTimeout(() => window.location.replace("/addProduct"), 2000);
    } catch (error) {
      showModal("Something went wrong. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 w-full px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 uppercase">
          {isLogin ? "Login to your account" : "Create a new account"}
        </h2>

        <div className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                value={formData.username}
                onChange={changeHandler}
                type="text"
                name="username"
                placeholder="John Doe"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              value={formData.email}
              onChange={changeHandler}
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              value={formData.password}
              onChange={changeHandler}
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={isLogin ? logIn : signUp}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </div>

        <p className="text-sm text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="font-medium text-blue-600 hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>

      {/* Modal Popup */}
      {modal.show && (
        <div
          className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 transition-all duration-300
      ${
        modal.type === "success"
          ? "bg-green-100 border border-green-500 text-green-700"
          : modal.type === "error"
          ? "bg-red-100 border border-red-500 text-red-700"
          : "bg-blue-100 border border-blue-500 text-blue-700"
      }
    `}
        >
          <span>
            {modal.type === "success" && "✅"}
            {modal.type === "error" && "❌"}
            {modal.type === "info" && "ℹ️"}
          </span>
          <p className="text-sm font-medium">{modal.message}</p>
        </div>
      )}
    </div>
  );
};

export default Login;

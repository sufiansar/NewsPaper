import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./components/RootLayout/RootLayout.jsx";
import Home from "./components/Home/CatagoryNews.jsx";
import CatagoryNews from "./components/Home/CatagoryNews.jsx";
import AuthLayOut from "./components/Pages/AuthLayOut.jsx";
import Login from "./components/Pages/Login.jsx";
import App from "./App.jsx";
import Register from "./components/Pages/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="auth" element={<AuthLayOut />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route element={<RootLayout />}>
        <Route index element={<Navigate to="catagorie/01" />} />
        <Route
          path="catagorie/:id"
          loader={async ({ params }) => {
            const res = await fetch(
              `https://openapi.programming-hero.com/api/news/category/${params.id}`
            );
            const data = await res.json();
            return data;
          }}
          element={<Home />}
        />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

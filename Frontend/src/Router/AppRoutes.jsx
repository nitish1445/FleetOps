import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardPage from "../pages/DashboardPage";
import PlaceholderPage from "../pages/PlaceholderPage";
import NotFound from "../pages/NotFound";
import PendingApprovalProfilePage from "../pages/PendingApprovalProfilePage";
import ApprovalProfilePage from "../pages/ApprovalProfilePage";

const ProtectedRoute = ({ children }) => {
  //   const { isLogin } = useAuth();
  // if (!isLogin) {
  //   return <Navigate to="/" replace />;
  // }
  // return children;
};

const PublicRoute = ({ children }) => {
  //   const { isLogin } = useAuth();
  // if (isLogin) {
  //   return <Navigate to="/dashboard" replace />;
  // }
  // return children;
};

const AppRoutes = ({ theme, setTheme }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage theme={theme} setTheme={setTheme} />}
      />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/profile-approval" element={<ApprovalProfilePage />} />
      <Route path="/profile-status" element={<PendingApprovalProfilePage />} />

      {/*  <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />

      <Route
        path="/signup"
        element={
          <PublicRoute>
            <SignupPage />
          </PublicRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout theme={theme} setTheme={setTheme} />
          </ProtectedRoute>
        }
      >
      </Route> */}

      {/* If Role is Admin show all routes. And for others show required routes */}
      <Route
        path="/dashboard"
        element={<DashboardLayout theme={theme} setTheme={setTheme} />}
      >
        <Route index element={<DashboardPage />} />
        <Route path="fleet" element={<PlaceholderPage title="Fleets" />} />
        <Route path="drivers" element={<PlaceholderPage title="Drivers" />} />
        <Route path="trips" element={<PlaceholderPage title="Trips" />} />
        <Route
          path="maintenance"
          element={<PlaceholderPage title="Maintenance" />}
        />
        <Route
          path="fuel-expenses"
          element={<PlaceholderPage title="Fuel & Expenses" />}
        />
        <Route
          path="analytics"
          element={<PlaceholderPage title="Analytics" />}
        />
        <Route path="settings" element={<PlaceholderPage title="Settings" />} />
      </Route>

      {/* Catch-all route which is not available */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

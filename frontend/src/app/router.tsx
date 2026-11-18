import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "../components/layout/AppLayout";

import LandingPage from "../pages/public/LandingPage";
import FeaturesPage from "../pages/public/FeaturesPage";
import SecurityPage from "../pages/public/SecurityPage";
import AboutPage from "../pages/public/AboutPage";

import DashboardPage from "../pages/app/DashboardPage";
import MessagesPage from "../pages/app/MessagesPage";
import ProfilePage from "../pages/app/ProfilePage";
import SettingsPage from "../pages/app/SettingsPage";

export const router = createBrowserRouter([
  // Public routes
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/features",
    element: <FeaturesPage />,
  },
  {
    path: "/security",
    element: <SecurityPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },

  // Authenticated application layout
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "messages",
        element: <MessagesPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "requests",
        element: <MessagesPage />,
      },
      {
        path: "contacts",
        element: <MessagesPage />,
      },
      {
        path: "discover",
        element: <MessagesPage />,
      },
      {
        path: "communities",
        element: <MessagesPage />,
      },
      {
        path: "settings/security",
        element: <SettingsPage />,
      },
    ],
  },
]);

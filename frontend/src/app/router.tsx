import { createBrowserRouter } from "react-router-dom";

import LandingPage from "../pages/public/LandingPage";
import FeaturesPage from "../pages/public/FeaturesPage";
import SecurityPage from "../pages/public/SecurityPage";
import AboutPage from "../pages/public/AboutPage";

import DashboardPage from "../pages/app/DashboardPage";
import MessagesPage from "../pages/app/MessagesPage";
import ProfilePage from "../pages/app/ProfilePage";
import SettingsPage from "../pages/app/SettingsPage";

export const router = createBrowserRouter([
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
  {
    path: "/connect",
    element: (
      <div className="min-h-screen bg-[#09090b] p-10 text-white">
        <h1 className="text-3xl font-bold">Connect Wallet</h1>
        <p className="mt-3 text-zinc-400">
          Wallet authentication will be implemented in Phase 2.
        </p>
      </div>
    ),
  },
  {
    path: "/app",
    element: <DashboardPage />,
  },
  {
    path: "/app/messages",
    element: <MessagesPage />,
  },
  {
    path: "/app/profile",
    element: <ProfilePage />,
  },
  {
    path: "/app/settings",
    element: <SettingsPage />,
  },
]);

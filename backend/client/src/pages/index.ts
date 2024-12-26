import { lazy } from "react";

export const HomePage = lazy(() => import("./Home"));
export const AuthPage = lazy(() => import("./Auth"));
export const AllDriversPage = lazy(() => import("./AllDrivers"));

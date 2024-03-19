import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import TaskManager from "./components/manage-tasks/TaskManager.tsx";
import HistoryManager from "./components/manage-history/HistoryManager.tsx";
import DepartmentTest from "./components/test/DepartmentTest.tsx";
import SignupScreen from "./components/login/SignupScreen.tsx";
import UserTest from "./components/test/UserTest.tsx";
import TaskTest from "./components/test/TaskTest.tsx";
import ProtectedRoute from "./utils/ProtectedRoute.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignupScreen type="login" />} />
      <Route path="/signup" element={<SignupScreen type="signup" />} />
      <Route path="/login" element={<SignupScreen type="login" />} />
      <Route element={<ProtectedRoute role="ROLE_ADMIN" />}>
        <Route path="/testing" element={<App />} />
        <Route path="/task-test" element={<TaskTest />} />
        <Route path="/user-test" element={<UserTest />} />
        <Route path="/department-test" element={<DepartmentTest />} />
        <Route path="/history" element={<HistoryManager />} />
      </Route>
      <Route element={<ProtectedRoute role="ROLE_USER" />}>
        <Route path="/tasks" element={<TaskManager />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

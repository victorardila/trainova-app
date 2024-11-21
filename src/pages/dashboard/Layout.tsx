import { Routes, Route } from "react-router-dom";
import Header from "../../components/dashboard/Header";
import Sidebar from "../../components/dashboard/Sidebar";
import DashboardHome from "./modules/DashboardHome";
import CourseManagement from "./modules/CourseManagement";
import CourseStructure from "./modules/CourseUnits";
import Monitoring from "./modules/Monitoring";
import Notifications from "./modules/Notifications";
import Materials from "./modules/Materials";
import StudentTracking from "./modules/StudentTracking";
import Settings from "./modules/Settings";

const Layout = () => {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/courses" element={<CourseManagement />} />
              <Route path="/course-structure" element={<CourseStructure />} />
              <Route path="/monitoring" element={<Monitoring />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/materials" element={<Materials />} />
              <Route path="/student-tracking" element={<StudentTracking />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;

import { Route, Routes } from "react-router-dom";
import StudentProfile from "../../components/student/profile";
import StudentDashboard from "../../pages/StudentDashboard";

const StudentRoutes = ()=>{
    
  return (
      <Routes>   
        <Route path="profile" element={<StudentProfile></StudentProfile>}/>
      </Routes>
  );
}

export default StudentRoutes



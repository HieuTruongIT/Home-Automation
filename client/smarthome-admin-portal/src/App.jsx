import { Routes, Route, Navigate } from "react-router-dom";
import { AdminLayout } from "@/layouts";

function App() {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./components/features/auth/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./components/features/auth/Welcome";
import NotesList from "./components/features/notes/NotesList";
import UsersList from "./components/features/users/UsersList";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {" "}
        {/*main/ starts */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Welcome />} />
          <Route path="notes">
            <Route index element={<NotesList />} />
          </Route>
          <Route path="users">
            <Route index element={<UsersList />} />
          </Route>
        </Route>
        {/* end dash */}
      </Route>
    </Routes>
  );
}

export default App;

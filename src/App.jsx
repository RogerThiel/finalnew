import { Routes, Route } from "react-router-dom";
import PageLayout from "./ui/PageLayout.jsx";
import Intropage from "./pages/Intropage.jsx";
import Login from "./pages/Login.jsx";
import Profil from "./pages/Profil.jsx";
import Profil_Edit from "./pages/Profil_Edit.jsx";
import Register from "./pages/Register.jsx";
import Event_Create from "./pages/Event_Create.jsx";
import Event_Detail from "./pages/Event_Detail.jsx";
import Event_Edit from "./pages/Event_Edit.jsx";
import { useFetch } from "./hooks/useFetch.js";
import Dashboard from "./pages/Dashboard.jsx";

function App() {

  // use later: const [error, user] = useFetch(import.meta.env.VITE_SERVER_URL + "/users/1");

  const user = true;
  return (
    <>
      <Routes>

        <Route path="/" element={<PageLayout />}>
          <Route index element={<Intropage />} />
          {user && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/user/:id" element={<Dashboard />} />
              <Route path="/event_create/user/:id" element={<Event_Create />} />
              <Route path="/event_detail/:id" element={<Event_Detail />} />
              <Route path="/event_edit/:id" element={<Event_Edit />} />
              <Route path="/profil/user/:id" element={<Profil />} />
              <Route path="/profil_edit/user/:id" element={<Profil_Edit />} />
              
            </>
          )}
          <Route path="*" element={<h1>Not found!</h1>} />
        </Route>
        
      </Routes>
    </>
  );
}

export default App;

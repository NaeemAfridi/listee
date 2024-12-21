import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProtectedRoutes from "./components/ProtectedRoutes";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import Main from "./Pages/Main";
import SingleListing from "./Pages/SingleListing";
import CreateForm from "./Pages/CreateForm";
import Edit from "./Pages/Edit";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/single-listing/:id" element={<SingleListing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/create" element={<CreateForm />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

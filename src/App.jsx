import "./App.css";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Entrance from "./pages/admin/entrance/Entrance";
import Authentication from "./pages/admin/authentication/Authentication";
import Auth from "./pages/admin/auth/Auth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/admin/entrance" element={<Entrance/>}/>
          <Route path="/admin/auth" element={<Auth/>}/>
          <Route path="/admin/authentication" element={<Authentication/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import Guideline from "./components/Guideline";
import Policies from "./components/Policies";
import BankDetail from "./components/Account";
import AddBankDetail from "./components/Addbankdetail";
import EditBankDetail from "./components/Editbankdetail";
import Languages from "./components/Languages";
import Guidelines3 from "./components/Availability";
import Guidelines4 from "./components/Logs";
import Sevices from "./components/service";
import Bnav from "./components/bottomnavbar";
import Contact from "./components/contact";
import { ThemeProvider } from "@emotion/react";
import Theme from "./components/Theme";
import Test from "./components/test";

function App() {
  return (
    <ThemeProvider theme={Theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Navbar />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="editprofile" element={<EditProfile />}></Route>
        <Route path="guideline" element={<Guideline />}></Route>
        <Route path="policies" element={<Policies />}></Route>
        <Route path="account" element={<BankDetail />}></Route>
        <Route path="addbankdetail" element={<AddBankDetail />}></Route>
        <Route path="Editbankdetail" element={<EditBankDetail />}></Route>
        <Route path="Languages" element={<Languages />}></Route>
        <Route path="availability" element={<Guidelines3 />}></Route>
        <Route path="logs" element={<Guidelines4 />}></Route>
        <Route path="service" element={<Sevices />}></Route>
        <Route path="bnav" element={<Bnav />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="test" element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

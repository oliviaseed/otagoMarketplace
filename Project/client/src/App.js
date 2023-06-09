import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
// We import all the components we need in our app
import Navbar from "./components/navbar/navbar";
import RecordList from "./components/itemsList/itemsList";
import Edit from "./components/edit/edit";
import Create from "./components/CreateItems/createItem";
import LoginForm from "./components/login/Login";
import MessageForm from "./components/sendMessage/sendMessage";
import Register from "./components/CreateAccount/createAccount";
import GetProfile from "./components/account/profile";
import MyRecordList from "./components/account/myListings";
import ViewListing from "./components/viewListing/viewListing";

const App = () => {
  const [searchResult, setSearchResult] = useState("");
  return (
    <div>
      <Navbar setSearchResult={setSearchResult} />{" "}
      {/* Pass setSearchResult callback */}
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route path="/item/:id" element={<ViewListing />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route
          path="/lists"
          element={<RecordList searchResults={searchResult} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<GetProfile />} />
        <Route path="/account/mine" element={<MyRecordList />} />
        <Route path="/message" element={<MessageForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
};

export default App;

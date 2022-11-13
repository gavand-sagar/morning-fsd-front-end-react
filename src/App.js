import { Link, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import CatFacts from "./Pages/CatFact/CatFacts";
import Login from "./Pages/Login/Login";
import PostList from "./Pages/PostList/PostList";
import AddQuestion from "./Pages/Questions/AddQuestion";
import Questions from "./Pages/Questions/Questions";
import PortalsUsername from "./PortalsUsername";
import RoundButton from "./RoundButton";
import SaveRoundButton from "./SaveRoundButton";
import MyButton from "./Shared/Components/MyButton";
import Rating from "./Shared/Components/Rating";
import UserGlobalContext from "./Shared/Data/UserGlobalContext";
function App() {
  let [username, setGlobalUsername] = useState('');
  return (
    <div className="App">
      <UserGlobalContext.Provider
        value={{ username: username, setGlobalUsername: setGlobalUsername }}
      >
        <div>
          <Routes>
            <Route path="/posts-list" element={<PostList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cat-fact" element={<CatFacts />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/add-question" element={<AddQuestion />} />
            <Route path="/" element={<Navigate to={"/login"} />} />
          </Routes>
        </div>
      </UserGlobalContext.Provider>
    </div>
  );
}

export default App;

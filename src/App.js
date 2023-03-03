import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import News from "./components/News";
import Teams from "./components/Teams";
import Vereinsspielplan from "./components/Vereinsspielplan";
import Kidsclub from "./components/Kidsclub";
import Anfahrt from "./components/Anfahrt";
import Instagram from "./components/Instagram";
// import LinksComponent from "./components/Links";
import Article from "./components/Article";
import TeamSeite from "./components/TeamSeite";
import Sponsoren from "./components/Sponsoren";
import Historie from "./components/Historie";
import Vorstand from "./components/Vorstand";
import Shop from "./components/Shop";
import Impressum from "./components/Impressum";
import { Route, Routes } from "react-router-dom";

function App() {
  const [articles, setArticles] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {

  //   const fetchArticles = async () => {
  //     const response = await fetch('https://falkebackend.onrender.com/articles');
  //     const json = await response.json()
  //     console.log(articles)
  //     if (response.ok) {
  //       setArticles(json)
  //     }
  //   }

  //   const fetchTeams = async () => {
  //     const response = await fetch('https://falkebackend.onrender.com/teams');
  //     const json = await response.json()
  //     console.log(teams)
  //     if (response.ok) {
  //       setTeams(json)
  //     }

  //   }
  //   fetchArticles()
  //   fetchTeams()
  // }, [])

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(
        "https://falkebackend.onrender.com/articles"
      );
      const json = await response.json();
      console.log(articles);
      if (response.ok) {
        setArticles(json);
      }
    };

    const fetchTeams = async () => {
      const response = await fetch("https://falkebackend.onrender.com/teams");
      const json = await response.json();
      console.log(teams);
      if (response.ok) {
        setTeams(json);
      }
    };
    fetchArticles();
    fetchTeams();
  }, []);

  console.log("teams", teams);

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home articles={articles} />} />
          <Route path="/news" element={<News articles={articles} />} />
          <Route path="/teams" element={<Teams teams={teams} />} />
          <Route path="/vereinsspielplan" element={<Vereinsspielplan />} />
          <Route path="/kidsclub" element={<Kidsclub />} />
          <Route path="/anfahrt" element={<Anfahrt />} />
          <Route path="/instagram" element={<Instagram />} />
          {/* <Route path="/links" element={<LinksComponent />} /> */}
          <Route
            path="/articles/:id"
            element={<Article articles={articles} />}
          />
          <Route path="/teamseite/:id" element={<TeamSeite teams={teams} />} />
          <Route path="/sponsoren" element={<Sponsoren />} />
          <Route path="/historie" element={<Historie />} />
          <Route path="/vorstand" element={<Vorstand />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

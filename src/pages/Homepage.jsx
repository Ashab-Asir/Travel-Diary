import React from "react";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <div>
      <PageNav></PageNav>
      <h1>Travel Diary</h1>
      <Link to="/pricing">Pricing</Link>
    </div>
  );
}

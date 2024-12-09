"use client"
import Link from "next/link";
import "./header.css"
export function Header() {

    return <div className="mb-5">
    <nav className="navbar custom-navbar">
      <a className="navbar-brand" href="#" style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#007bff" }}>
        Navbar
      </a>
      <button
        className="menu-toggler"
        onClick={() => document.querySelector(".menu-items").classList.toggle("show")}
      >
        ☰
      </button>
      <ul className="menu-items">
        <li className="nav-item">
          <Link className="nav-link" href="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/signup">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/login">
            Log In
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/user">
            Users
          </Link>
        </li>
        
        
      </ul>
    </nav>
  </div>
  
  
  
  
}
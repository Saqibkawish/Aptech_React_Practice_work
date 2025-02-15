import React from 'react'
import { Link } from 'react-router-dom';
 

export default function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Grand Assigment</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link className="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/planet">Array Work</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/todolist">To do List</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/wordandlatter">Word and Latter Counting</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/feedback">Feedback</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Quiz Work
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="nav-link" to="/quiz">Quiz Without Array</Link></li>
            <li><Link className="nav-link" to="/quizarray">Quiz With Array</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

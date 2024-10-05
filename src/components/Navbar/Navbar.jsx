import React from "react";
import { NavLink } from "react-router-dom";
//import logo from "../../assets/logo.png";
import "./Navbar.css";

function NavBar() {
	console.log('NavBar component is rendering');
	return (
		<nav className="navbar">

			<div className="Link-Container">
				<NavLink to="/bubblesort" activeclassname="active-link">Bubble Sort</NavLink>
				<NavLink to="/selectionsort" activeclassname="active-link">Selection Sort</NavLink>
				<NavLink to="/insertionsort" activeclassname="active-link">Insertion Sort</NavLink>
				<NavLink to="/quicksort" activeclassname="active-link">Quick Sort</NavLink>
				<NavLink to="/mergesort" activeclassname="active-link">Merge Sort</NavLink>
			</div>
		</nav>
	);
}

export default NavBar;
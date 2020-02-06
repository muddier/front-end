import React from "react";
import { NavLink, withRouter } from "react-router-dom";

function MainNavigation(props) {
	const handleLogOut = () => {
		localStorage.removeItem("key");
		localStorage.removeItem("pusherTransportTLS");
		props.history.push("/");
	};
	return (
		<nav style={{ display: "flex", justifyContent: "flex-end" }}>
			{localStorage.getItem("key") ? (
				<>
					<NavLink
						style={{
							fontSize: "14px",
							margin: "8px",
							background: "#F89500",
							color: "#1d1d1d",
							padding: "9px",
							borderRadius: "10px",
							textDecoration: "none",
						}}
						className='navlink'
						to='/game'
					>
						home
					</NavLink>
					<NavLink
						style={{
							fontSize: "14px",
							margin: "8px",
							background: "#F89500",
							color: "#1d1d1d",
							padding: "9px",
							borderRadius: "10px",
							textDecoration: "none",
						}}
						className='navlink'
						to='/leaderboard'
					>
						leaderboard
					</NavLink>
					<p
						onClick={handleLogOut}
						style={{
							cursor: "pointer",
							color: "silver",
							fontSize: "14px",
							margin: "8px",
							border: "1px solid silver",
							padding: "6px 10px",
							borderRadius: "10px",
						}}
					>
						sign out
					</p>
				</>
			) : (
				<>
					<NavLink
						style={{
							fontSize: "14px",
							margin: "8px",
							color: "#f8c129",
							border: "1px solid #f8c129",
							padding: "8px",
							borderRadius: "10px",
							textDecoration: "none",
						}}
						to='/signin'
					>
						Sign In
					</NavLink>{" "}
					<NavLink
						style={{
							fontSize: "14px",
							margin: "8px",
							background: "#F89500",
							color: "#1d1d1d",
							padding: "9px",
							borderRadius: "10px",
							textDecoration: "none",
						}}
						to='/signup'
					>
						Create Account
					</NavLink>
				</>
			)}
		</nav>
	);
}

export default withRouter(MainNavigation);

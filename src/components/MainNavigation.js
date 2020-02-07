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
							fontSize: "16px",
							margin: "8px",
							background: "#F89500",
							color: "#1d1d1d",
							fontWeight: "600",
							padding: "9px",
							borderRadius: "10px",
							textDecoration: "none",
						}}
						to='/game'
					>
						home
					</NavLink>
					<NavLink
						style={{
							fontSize: "16px",
							margin: "8px",
							background: "#F89500",
							color: "#1d1d1d",
							fontWeight: "600",
							padding: "9px",
							borderRadius: "10px",
							textDecoration: "none",
						}}
						to='/leaderboard'
					>
						leaderboard
					</NavLink>
					<p
						onClick={handleLogOut}
						style={{
							cursor: "pointer",
							color: "silver",
							fontSize: "16px",
							fontWeight: "600",
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
							fontSize: "16px",
							margin: "8px",
							background: "#F89500",
							color: "#1d1d1d",
							fontWeight: "600",
							padding: "9px",
							borderRadius: "10px",
							textDecoration: "none",
						}}
						to='/signin'
					>
						Sign In
					</NavLink>{" "}
					<NavLink
						style={{
							fontSize: "16px",
							margin: "8px",
							color: "#F89500",
							fontWeight: "600",
							padding: "9px",
							borderRadius: "10px",
							textDecoration: "none",
							border: "1px solid #F89500",
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

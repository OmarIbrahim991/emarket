import Rating from './Rating'

const Review = ({ username, review, rating, timestamp, index }) => {
	const colors = ["black", "blue", "orange", "purple", "red", "darkblue", "magenta"]

	return (
		<div style={{ display: "flex", justifyContent: "center", borderBottom: "2px solid #cca", marginBottom: "1em", }}>
			<div style={{ ...profileStyles, backgroundColor: colors[index%colors.length] }}>
				{username.slice(0,1).toUpperCase()}
			</div>
			<div style={{ margin: "0.5em", padding: "0.25em" }}>
				<div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5em" }}>
					<h4>{username}</h4>
					<small style={{ color: "gray", fontSize: "70%", textDecoration: "underline" }}>
						{`${timestamp.getFullYear()}-${timestamp.getMonth()+1}-${timestamp.getDate()}
						${timestamp.getHours()}:${timestamp.getMinutes()}:${timestamp.getSeconds()}`}
					</small>
				</div>
				<Rating rating={rating} />
				<p style={{ maxWidth: "20rem" }}>{review}</p>
			</div>
		</div>
	)
}

const profileStyles = {
	backgroundColor: "black", color: "white", display: "flex", justifyContent: "center", alignSelf: "center",
	borderRadius: "50%", fontSize: "150%", padding: "1em"
}

export default Review

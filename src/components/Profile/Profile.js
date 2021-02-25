import React from "react"
// import PropTypes from "prop-types"
import s from "./Profile.module.css"

const Profile = ({ name, tag, location, avatar, stats }) => {
	// console.log(name, tag, location, avatar, stats)
	const { followers, views, likes } = stats
	return (
		<>
			<div className={s.profile}>
				<div className={s.description}>
					<img src={avatar} alt={name} width="300" className="avatar" />
					<p className={s.name}>{name}</p>
					<p className="tag">{tag}</p>
					<p className="location">{location}</p>
				</div>

				<ul className="stats">
					<li>
						<span className="label">Followers </span>
						<span className="quantity">{followers}</span>
					</li>
					<li>
						<span className="label">Views </span>
						<span className="quantity">{views}</span>
					</li>
					<li>
						<span className="label">Likes </span>
						<span className="quantity">{likes}</span>
					</li>
				</ul>
			</div>
		</>
	)
}
export default Profile

// Profile.propTypes = {
// 	name:
// 	tag:
// 	location:
// 	avatar:
// 	stats: PropTypes.shape(
// 		followers: PropTypes.number.isRequired
// 	)
// }

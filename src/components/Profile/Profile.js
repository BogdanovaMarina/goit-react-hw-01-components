import React from "react"
import db from "../../db/user.json"
import s from "./Profile.module.css"
console.log(db)

const Profile = function () {
	return (
		<>
			<p>Profile</p>
			<div className={s.profile}>
				<div className={s.description}>
					<img
						src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
						alt="Аватар пользователя"
						className="avatar"
					/>
					<p className="name">Petra Marica</p>
					<p className="tag">@pmarica</p>
					<p className="location">Salvador, Brasil</p>
				</div>

				<ul className="stats">
					<li>
						<span className="label">Followers</span>
						<span className="quantity">1000</span>
					</li>
					<li>
						<span className="label">Views</span>
						<span className="quantity">2000</span>
					</li>
					<li>
						<span className="label">Likes</span>
						<span className="quantity">3000</span>
					</li>
				</ul>
			</div>
		</>
	)
}
export default Profile

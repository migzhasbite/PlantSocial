import React from "react";
import "./Posts.scss";
import { Link } from "react-router-dom";
import friend1 from "../../assets/images/user-3.jpg";
import friend2 from "../../assets/images/user-4.jpg";
import friend3 from "../../assets/images/user-5.jpg";
import friend4 from "../../assets/images/user-6.jpg";

export default function PostList(props) {
	if (props.paramsId.match.params.id === undefined) {
		props.paramsId.match.params.id = props.postList[0].id;
	}
	return (
		<section className="post-list">
			<h2 className="post-list__heading">TRENDING POSTS</h2>
			<div className="post-list__container">
				{props.postList
					.filter(
						(filteredPost) => filteredPost.id !== props.paramsId.match.params.id
					)
					.map(({ id, image, title, channel, views }) => (
						<Link to={`/posts/${id}`}>
							<div key={id} className="post-list__card">
								<div>
									<img className="post-list__image" src={image} alt={title} />
								</div>
								<div className="post-list__wrapper">
									<div className="post-list--info">
										<p className="post-list--title">{title}</p>
										<p className="post-list--channel">{channel}</p>
									</div>

									<div class="recommend__friends">
										<p>Who's looking:</p>
										<img
											src={friend1}
											alt="Friend 1"
											class="recommend__photo"
										/>
										<img
											src={friend2}
											alt="Friend 2"
											class="recommend__photo"
										/>
										<img
											src={friend3}
											alt="Friend 3"
											class="recommend__photo"
										/>
										<img
											src={friend4}
											alt="Friend 4"
											class="recommend__photo"
										/>
									</div>
								</div>
							</div>
						</Link>
					))}
			</div>
		</section>
	);
}

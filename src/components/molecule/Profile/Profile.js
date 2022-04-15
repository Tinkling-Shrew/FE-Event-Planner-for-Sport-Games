import React from "react";
import "./Profile.css";

export const mainClass = "profile-container";

const Profile = ({ name, imageSrc }) => {
    var profileRef = "../../organism/" + String({ name });
    return (
        <div class={mainClass}>
            <div className="status-container">
                <button className="status-button"></button>
            </div>

            <div className="profile-info">
                <a className="profile-name" href={profileRef}>
                    {name}
                </a>
            </div>
            <a className="profile-link" href="/login">
                <img
                    className="profile-image"
                    src={imageSrc}
                    alt="ProfileImage"
                />
            </a>
        </div>
    );
};

export default Profile;

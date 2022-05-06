import { React, useState } from "react";
import axios from "../../../apis/KowApi";
import "./Profile.css";

export const mainClass = "profile-container";

const Profile = () => {
    const [name, setName] = useState("User");
    const [image, setImage] = useState(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAADjUlEQVR4Xu2bTUhUURiGv6nMlKEaEMksS20RLQIXbUZoY9FCkBZBEWSbQIggosBWBraooB/6IRDaVJuCFoG0KjdBbSLcRLTIirFJCWMSQisN4wQDjveeG3c4+L3wva7He995nvuec+65dzJt/WMLwj8YAhkKgXHxLwiFYPmgEDAfFEIhaATA8nAOoRAwAmBx2BAKASMAFocNoRAwAmBx2BAKASMAFocNoRAwAmBx2BAKASMAFocNoRAwAmBx2BAKASMAFocNoRAwAmBx2BAKASMAFocNoRAwAmBx2BAKASMAFocNoRAwAmBxTDTkysFGydauqEA/ODwlxdI8mA4jP0e4f6xJ8tvqKuCPFn7JgdtFCtEgsKt1jTzo2xg59a2Rklx7WtKI5D2niSHLffsnJzfJ9qbVFSBm5xZk39VxqKHLjJBTe3NyoisXuTLfTfyW7uufYVpiRogj/uZ8q9TVZCLwB4e/yd0X0xBSTAl5dLxZOlpqI+A/Tc1J1+VxClluAr5hy+VAaYlqQ452rpN8e+VydKmkvnuTQb35hi2UlqgKGerdIHt21CcCbz/7IaiQuNVW+QSHhr7Iq48/g54v7cHMCTnX0yC9+bWxnF6+n5UjdybSMgz6eXNCundm5cbhxliIk9Pz0nmhEBRw2oOZE+IAjV1s83LSHrZMChk5s1m2NtTEStHeTjEpJGlif/Z2RkKv7NIMWyaFJK3utLdSVIVo3Ie4qzVJiPb9iKqQNFUO+VkKCUkzwLEoJADEkIegkJA0AxyLQjwQOalHwahO6hqbi/9bZZle9moJ8T2ocrJ4Y7jM2+8OetLWifaDKpNDlu8hlZO1+1JB9S0Uc0J872g5Gdx+V3himPRc/fHoDzn98GuAhXX1hzDXkLjXSsv4tJ+FuByqQjTuQ14PbJH19SsjlzDKu76qQqovdnX/mTR/aK+uyt/IlBD3s4T9HdmITe0t98WBTAnxDVcIc4e5hvjeNkF49cdkQ+K2S77P/JGem0XVG8Gl46eJIas5t0qe97dE5g6UidxcQ+I2MdGGKlNzCH/0Wd1tAv9L+06dBsCeGFIIhcBfAyaWvfAWFgWkEDBbFEIhYATA4rAhFAJGACwOG0IhYATA4rAhFAJGACwOG0IhYATA4rAhFAJGACwOG0IhYATA4rAhFAJGACwOG0IhYATA4rAhFAJGACwOG0IhYATA4rAhFAJGACzOX2ndFjd4GLFEAAAAAElFTkSuQmCC"
    );

    return (
        <div className={mainClass}>
            <div className="status-container">
                <button className="status-button"></button>
            </div>

            <div className="profile-info">
                <a className="profile-name" href="https://www.google.com">
                    {name}
                </a>
            </div>
            <a className="profile-link" href="/account">
                <img className="profile-image" src={image} alt="ProfileImage" />
            </a>
        </div>
    );
};

export default Profile;

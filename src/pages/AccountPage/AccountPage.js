import React from "react";
import "./AccountPage.css";

export const mainClass = "account-container";

const AccountPage = () => {
    return (
        <div className={mainClass}>
            <div className="account-option-container">
                <h1>Account</h1>
                <div className="option-table">
                    <a
                        className="account-option-link"
                        href="https://www.google.com"
                    >
                        Profile
                    </a>

                    <a
                        className="account-option-link"
                        href="https://www.google.com"
                    >
                        Events
                    </a>

                    <a
                        className="account-option-link"
                        href="https://www.google.com"
                    >
                        Preferences
                    </a>

                    <a
                        className="account-option-link"
                        href="https://www.google.com"
                    >
                        Help
                    </a>
                </div>
            </div>
            <div className="account-option-display"></div>
        </div>
    );
};

export default AccountPage;

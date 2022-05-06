import React from "react";
import "./Account.css";
import OptionButton from "../../components/atom/OptionButton/OptionButton";

export const mainClass = "account-container";

const Account = () => {
    return (
        <div className={mainClass}>
            <div className="account-option-container">
                <OptionButton
                    name={<span className="account-option-title">Account</span>}
                ></OptionButton>
                <div className="option-container">
                    <OptionButton name="Profile"></OptionButton>

                    <OptionButton name="Events"></OptionButton>

                    <OptionButton name="Preferences"></OptionButton>
                </div>
            </div>
            <div className="account-option-display"></div>
        </div>
    );
};

export default Account;

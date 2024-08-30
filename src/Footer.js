import React from "react";

export const Footer = () => {
    let getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    };
    return (
        <div>
            <footer className="py-2 bg-dark">
                <div className="container-fluid">
                    <p className="m-0 text-center text-white">
                         &copy;
                        <span> {getYear()} Steve Arnold </span>
                    </p>
                </div>
            </footer>
        </div>
    );
};
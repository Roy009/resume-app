import React from "react";
import "./Techstack.css";
import java from "../../images/java.png";
import js from "../../images/js.png";
import css from "../../images/css.svg";
import bootstrap from "../../images/bootstrap.svg";
import python from "../../images/python.png";
import html from "../../images/html.svg";
import TechStackIconContainer from "./TechStackIconContainer/TechStackIconContainer";


export default function Techstack() {
    const techstackData = [
        {
            iconName: "HTML",
            iconImage: html,
            iconAltProperty: "htmlImage",
        },
        {
            iconName: "CSS",
            iconImage: css,
            iconAltProperty: "cssImage",
        },
        {
            iconName: "JAVASCRIPT",
            iconImage: js,
            iconAltProperty: "jsImage",
        },
    ];
    const techstackData2 = [
        {
            iconName: "BOOTSTRAP",
            iconImage: bootstrap,
            iconAltProperty: "bootstrapImage",
        },
        {
            iconName: "PYTHON",
            iconImage: python,
            iconAltProperty: "pythonImage",
        },
        {
            iconName: "JAVA",
            iconImage: java,
            iconAltProperty: "javaImage",
        },
    ];
    return (
        <div className="techstack_container">
            <p className="techstack_title">Tech Stack</p>
            <div className="techstack_icon_container">
                {techstackData.map((item, index) => {
                    return (
                        <TechStackIconContainer
                            image={item.iconImage}
                            altProperty={item.iconAltProperty}
                            name={item.iconName}
                        />
                    );
                })}
            </div>
            <div className="techstack_icon_container">
                {techstackData2.map((item, index) => {
                    return (
                        <TechStackIconContainer
                            image={item.iconImage}
                            altProperty={item.iconAltProperty}
                            name={item.iconName}
                        />
                    );
                })}
            </div>
        </div>
    );
}
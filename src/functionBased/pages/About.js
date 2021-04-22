import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';

export default function About() {
    const {url} = useRouteMatch();
    return (
        <div className={"about_content"}>
            <ul className={"about_list"}>
                <li><Link to={`${url}/about-app`}>About App</Link></li>
                <li><Link to={`${url}/about-author`}>About Author</Link></li>
            </ul>
        </div>);
};
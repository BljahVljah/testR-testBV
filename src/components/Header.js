import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        {/*<Link to="/">Damov</Link>
        <Link to="/create">Novo</Link>
        <Link to="/edit">Edit</Link>
        <Link to="/help">HLP</Link>*/}
        <NavLink to="/" activeClassName="is-active" exact={true}>Damov</NavLink>
        <NavLink to="/create" activeClassName="is-active">Novo</NavLink>
    </header>
);

export default Header;
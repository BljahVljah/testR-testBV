import React from 'react';
import {Link} from 'react-router-dom';


const NotFoundPage = () => (
    <div>
        {/* ALI 404!!! - <a href="/">Pej dam</a> spodi zato da se ne refreša*/}  
        404 - <Link to="/">Pejt dam</Link>
    </div>
);

export default NotFoundPage;

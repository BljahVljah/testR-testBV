import React from 'react';
import ReactDOM from 'react-dom';

//classi

const Info = (props) => (
    <div>
        <h1>info</h1>
        <p>info: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>To je privat info</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>logiri se</p>
            )} 
                
            
        </div>
    );
};


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="nek info" />,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="nek info" />,document.getElementById('app'));

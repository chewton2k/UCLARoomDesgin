import React from 'react';
import { Link, Route } from 'react-router-dom';

const LogIn = () => { 
    return (<div className="flex items-center space-x-4">
        <Link to="/login" className="px-4 py-2 hover:opacity-80 font-light text-center">
          Log In
        </Link>
        </div> 
    )
}

export default LogIn
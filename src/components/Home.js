import React from 'react';
import {Link} from 'react-router-dom'

export default function Home(){
    return(
        <div>
            <Link className="button" to ="/Apod">Apod</Link>
        </div>
    )
}
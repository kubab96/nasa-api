import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';

export default function Apod(){
   const [PhotoData, setPhotoData] = useState(null)

   useEffect(() =>{
   fetchPhoto();
   
   async function fetchPhoto(){
       const response = await fetch(
           'https://api.nasa.gov/planetary/apod?api_key=W6aqNycC3WGBPn3wvU7y2Uoh9xNZER3e0hmXR7fm'
       );
       const data = await response.json();
       setPhotoData(data);
       console.log(data);
   }
}, []);

if (!PhotoData) return <div>No data returned</div>;

return(
    <React.Fragment>
    <NavBar/>
    <div className="api">
            <img src={PhotoData.url} 
                alt={PhotoData.title}
            />
            <h1 className="title">{PhotoData.title}</h1>
            <p><b>Author: </b>{PhotoData.copyright}</p>
            <p><b>Date: </b>{PhotoData.date}</p>
            <p><b>Explanation:</b> {PhotoData.explanation}</p>
          </div>
          </React.Fragment>
)
}
    
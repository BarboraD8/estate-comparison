import { useState, useEffect } from 'react';
import Estate from './Estate.js';

export default function EstateRow() {

const [info, setInfo] = useState([]);
const apiUrl = "https://estate-comparison.codeboot.cz/list.php?limit=9";

async function fetchData() {
    const response = await fetch(apiUrl);
    const result = await response.json();
    setInfo(result);
  }

 useEffect(() => {
    fetchData();
  }, []);
  
    return (

        <div className="estate-row-container">
           
    {info.map((e, index) => ( 

            <Estate 
              key={index} 
              imageUrl={e.images? e.images[0]: ''} 
              name={e.name_extracted} 
              locality={e.locality} 
            />

                    ))}

        </div>

    )
}
import { useState, useEffect } from 'react';
import ComparisonEstate from './ComparisonEstate.js';

export default function ComparisonRow() {

const [info, setInfo] = useState([]);
const apiUrl = "https://estate-comparison.codeboot.cz/detail.php?id=2960244572";

async function fetchData() {
    const response = await fetch(apiUrl);
    const result = await response.json();
    setInfo(result);
  }

 useEffect(() => {
    fetchData();
  }, []);

const [info2, setInfo2] = useState([]);
const apiUrl2 = "https://estate-comparison.codeboot.cz/detail.php?id=1701473884";

async function fetchData2() {
    const response2 = await fetch(apiUrl2);
    const result2 = await response2.json();
    setInfo2(result2);
  }

 useEffect(() => {
    fetchData2();
  }, []);
  

    return (

      <div className="comparison-row-container"> 

        <ComparisonEstate
          imageUrl={info.images? info.images[0]: ''} 
          name={info.name}
          price={info.prize_czk}
          priceClass={info.prize_czk > info2.prize_czk? 'red': 'green'}
          locality={info.locality}
          floorArea={info.building_area}
          floorAreaClass={info.building_area > info2.building_area? 'green': 'red'}
          landArea={info.land_area}
          landAreaClass={info.land_area > info2.land_area? 'red': 'green'}
          companyName={info.company_name}
          companyLogo={info.company_logo}
        />

        <ComparisonEstate 
          imageUrl={info2.images? info2.images[0]: ''} 
          name={info2.name}
          price={info2.prize_czk}
          priceClass={info.prize_czk > info2.prize_czk? 'green': 'red'}
          locality={info2.locality}
          floorArea={info2.building_area}
          floorAreaClass={info.building_area > info2.building_area? 'red': 'green'}
          landArea={info2.land_area}
          landAreaClass={info.land_area > info2.land_area? 'green': 'red'}
          companyName={info2.company_name}
          companyLogo={info2.company_logo}
        />

      </div>
      
    )
}

export default function ComparisonEstate(props) {
  
    return (

        <div className="comparison-estate">

          <img className="comparison-estate__img" src={props.imageUrl} alt="estate"/>

          <p>{props.name}</p>

          <p className={`comparison-estate__text ${props.priceClass}`}><strong>Price</strong><span> {props.price} Kč</span></p>

          <p className="property-description" ><strong>Locality</strong><span> {props.locality} </span></p>

          <p className={`comparison-estate__text ${props.floorAreaClass}`} ><strong>Floor Area</strong><span> {props.floorArea} m²</span></p>
          
          <p className={`comparison-estate__text ${props.landAreaClass}`}  ><strong>Land Area</strong><span> {props.landArea} m²</span></p>
             
          <div className="company">
            <img className="company__logo" src={props.companyLogo} alt="company_logo"/>
            <p>{props.companyName}</p>
          </div>
    
        </div>
        
    )
}

export default function Estate(props) {
  
    return (
        
        <div className="estate">
          <img className="estate__img" src={props.imageUrl} alt="estate"/>
          <p>{props.name} {props.locality}</p>
        </div>

    )
}
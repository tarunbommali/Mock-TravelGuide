import './index.css'

const TravelGuideItem = props => {
  const {travelGuideDetails} = props
  const {name, imageUrl, description} = travelGuideDetails

  return (
    <li className="travel-guide-item">
      <img src={imageUrl} alt={name} className="travel-guide-image" />
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  )
}

export default TravelGuideItem

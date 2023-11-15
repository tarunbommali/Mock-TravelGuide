import Loader from 'react-loader-spinner'
import {Component} from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TravelGuideItem from '../TravelGuideItem'

import './index.css'

class App extends Component {
  state = {isLoading: true, travelGuide: []}

  componentDidMount() {
    this.getTravelGuide()
  }

  getTravelGuide = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    const {packages} = data

    const updateData = packages.map(pack => ({
      id: pack.id,
      name: pack.name,
      description: pack.description,
      imageUrl: pack.image_url,
    }))

    console.log(updateData)

    this.setState({travelGuide: updateData, isLoading: false})
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="black" height={80} width={80} />
    </div>
  )

  renderTravelGuideItem = () => {
    const {travelGuide} = this.state

    return travelGuide.map(travelGuideItem => (
      <TravelGuideItem
        key={travelGuideItem.id}
        travelGuideDetails={travelGuideItem}
      />
    ))
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Travel Guide</h1>
        <ul className="travel-guide-container">
          {isLoading ? this.renderLoader() : this.renderTravelGuideItem()}
        </ul>
      </div>
    )
  }
}

export default App

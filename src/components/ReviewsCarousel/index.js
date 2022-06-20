// Write your code here

import {Component} from 'react'

import './index.css'

const Carousel = props => {
  const {userDetails} = props
  const {imgUrl, username, companyName, description} = userDetails
  return (
    <div className="profile-container">
      <img src={imgUrl} alt={username} />
      <p className="name-heading">{username}</p>
      <p className="company">{companyName}</p>
      <p className="description">{description}</p>
    </div>
  )
}

class ReviewsCarousel extends Component {
  state = {count: 0}

  onClickLeftArrow = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  onClickRightArrow = () => {
    const {count} = this.state
    if (count < 3) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props

    const {count} = this.state

    const selectedReview = reviewsList[count]

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Reviews</h1>
          <div className="carousel-container">
            <button
              className="button"
              type="button"
              onClick={this.onClickLeftArrow}
              testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow-image"
              />
            </button>
            <div className="list-items">
              <Carousel
                userDetails={selectedReview}
                key={selectedReview.username}
              />
            </div>
            <button
              className="button"
              type="button"
              onClick={this.onClickRightArrow}
              testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow-image"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel

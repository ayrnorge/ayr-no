import React from "react"
import CarouselItem from "./CarouselItem"
import CarouselSelector from "./CarouselSelector"
import "./Carousel.css"

export default class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.cycle = this.cycle.bind(this)
    this.setActive = this.setActive.bind(this)
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.state = {
      activeIndex: props.activeIndex || 0,
      intervalFunction: setInterval(this.cycle, this.props.delay || 5000),
      mouseInside: false,
      slides: this.props.content.map(slide => (
        <CarouselItem
          key={slide.headline}
          data={slide.heading_description.html}
          uid={slide.slug.uid}
        />
      )),
    }
  }

  cycle() {
    // essentially pause the carousel if mouse is being hovered inside content area
    if (!this.state.mouseInside) {
      this.setState({
        activeIndex: (this.state.activeIndex + 1) % this.state.slides.length,
      })
    }
  }

  setActive(idx) {
    clearInterval(this.state.intervalFunction)
    this.setState({
      activeIndex: idx - 1,
      intervalFunction: setInterval(this.cycle, 5000),
    })
  }

  onMouseEnter() {
    this.setState({ mouseInside: true })
  }

  onMouseLeave() {
    this.setState({ mouseInside: false })
  }

  render() {
    return (
      <div className="carousel-container">
        <CarouselSelector
          selected={this.state.activeIndex}
          itemCount={this.state.slides.length}
          selectHandler={this.setActive}
        />
        <div
          className="carousel-content"
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          {this.state.slides[this.state.activeIndex]}
        </div>
      </div>
    )
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalFunction)
  }
}

import React from 'react'

class CarouselItem extends React.Component {
    render(){
        const { data } = this.props
        return (
            <div className="carousel-item">
                <div dangerouslySetInnerHTML={{ __html: data }}/>
           </div>
        )
    }
}

export default CarouselItem




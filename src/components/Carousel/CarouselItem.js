import React from 'react'
import ButtonLink from '../ButtonLink/index'

class CarouselItem extends React.Component {
    render(){
        const { data, uid } = this.props
        return (
            <div className="carousel-item">
                <div dangerouslySetInnerHTML={{ __html: data }}/>
                <ButtonLink styleName={'carousel-item-button'} text={"READ MORE"} url={uid} />
           </div>
        )
    }
}

export default CarouselItem




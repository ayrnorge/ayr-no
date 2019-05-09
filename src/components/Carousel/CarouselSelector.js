import React from 'react';
import ActiveIndicator from '../../images/active-indicator.svg'
 
export default class CarouselSelector extends React.Component {
     render() {
        const elems = [];
        for (let i = 1; i <= this.props.itemCount; i++) {
            const classSelected = this.props.selected + 1 === i ? 'active' : 'inactive';
            elems.push(
                <li style={ this.props.selected + 1 === i ? { backgroundImage: `url("${ActiveIndicator}")`} : null }  className={`selector-item ${classSelected}`} key={`selector-item-${i}`} data-idx={i}
                    onClick={this.props.selectHandler.bind(undefined, i)}>{i}</li>
            );
        }

        return (
            <ul className="carousel-selector" style={{listStyleType: 'none'}}>
                {elems}
            </ul>
        )
    }
}

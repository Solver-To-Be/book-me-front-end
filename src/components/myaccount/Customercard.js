import React from 'react'

class CardHeader extends React.Component {
    render() {
        const { image } = this.props;
        var style = {
            backgroundImage: 'url(' + image + ')',
        };
        return (
            <header style={style} id={image} className="card-header">

            </header>
        )
    }
}

class CardBody extends React.Component {
    render() {
        return (
            <div className="card-body">
                   <p className="cartit">{this.props.car.name} - {this.props.car.carType} </p>
                <h6 className='model'>Car Model : {this.props.car.model}</h6>
             <h5 className='price'> Cost : {this.props.car.rentCost} <br/> <br/> {this.props.car.status}</h5>                
            </div>
        )
    }
}

export default function Card(props) {
   
    return (
        <article className="card">
            <CardHeader image={props.car.photo} />
            <CardBody
               car = {props.car}
            />
        </article>
    )

}

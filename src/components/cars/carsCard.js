import React from 'react'
import { Button } from 'react-bootstrap';
// import axios from 'axios'
import '../myaccount/owner/card.scss'
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

class Buttoon extends React.Component {



    render() {
        return (
            <><Button className="button button-primary" onClick={()=>{this.props.setShowRentModal(true);this.props.setRentedCar(this.props.searchCars)}}>
                    Book It       </Button> {'    '}

                    <Button className="button button-primary" variant="info"  onClick={()=>{this.props.setShowCarOwnerModal(true);
                this.props.getCarOwner(this.props.searchCars.ownerId)}}>Owner Detail</Button>{' '}
                
            </>
        )
    }
}

class CardBody extends React.Component {
    render() {
        return (
            <div className="card-body">

                <p className="body-content">{this.props.searchCars.name}</p>
                <p className="body-content">{this.props.searchCars.carType} {this.props.searchCars.model}</p>
                <p className="body-content">Rent cost : {this.props.searchCars.rentCost} </p>

                <Buttoon
                    setShowRentModal={this.props.setShowRentModal}
                    setRentedCar={this.props.setRentedCar}
                    searchCars={this.props.searchCars}
                    setShowCarOwnerModal={this.props.setShowCarOwnerModal}
                    getCarOwner={this.props.getCarOwner}
                   
                />
            </div>
        )
    }
}

export default function Carscard(props) {

    return (
        <article className="card">
            <CardHeader image={props.searchCars.photo} />
            <CardBody
                searchCars={props.searchCars}
                setShowRentModal={props.setShowRentModal}
                setRentedCar={props.setRentedCar}
                setShowCarOwnerModal={props.setShowCarOwnerModal}
                getCarOwner={props.getCarOwner}               

            />
        </article>
    )

}





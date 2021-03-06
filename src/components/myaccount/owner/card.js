import React from 'react'
import axios from 'axios'
import { LoginContext } from '../../signUp/Auth';
import './card.scss'
import { Button } from 'react-bootstrap';

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
    static contextType = LoginContext;
     deleteCar(id) {
        
        var data = '';
        var config = {
            method: 'delete',
            url: `https://book-me401.herokuapp.com/deletecar/${id}`,
            headers: {
                'Authorization': `Bearer ${this.context.token}`
            },
            data: data
        };
        axios(config)
        const afterDeleteCars = this.props.myCars.filter(car => car.id !== id)
        this.props.setMyCars(afterDeleteCars)
    }
    render() {
        return (
            <>
                {this.props.car.status === 'taken' &&
                  <Button onClick={this.props.handleShow} className="button button-primary">
                   Location
              </Button>  
                }
                {' '}<Button onClick={() => this.deleteCar(this.props.car.id)} className="button button-primary" variant="danger">Delete</Button>{' '}{' '}
                <Button className="button button-primary" onClick={() => this.props.handelShowEdit(this.props.car)} variant="success">Edit</Button>


            </>
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

                <Buttoon
                    handleShow={this.props.handleShow}
                    car={this.props.car}
                    handelShowEdit={this.props.handelShowEdit}
                    myCars={this.props.myCars}
                    setMyCars={this.props.setMyCars} />
            </div>
        )
    }
}

export default function Card(props) {
    return (
        <article className="card">
            <CardHeader image={props.car.photo} />
            <CardBody
                handleShow={props.handleShow}
                car={props.car}
                handelShowEdit={props.handelShowEdit}
                myCars={props.myCars}
                setMyCars={props.setMyCars}
            />
        </article>
    )

}





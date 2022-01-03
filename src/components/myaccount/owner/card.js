import React from 'react'
import axios from 'axios'
import './card.scss'

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
class Button extends React.Component {

     deleteCar(id) {
        console.log(id);
        var data = '';    
        var config = {
            method: 'delete',
            url: `https://book-me401.herokuapp.com/deletecar/${id}`,
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFobWFkIiwiaWF0IjoxNjQxMTk2NTgyfQ.baZ8MGjs4jYJzZzEMjPUGhogKpZxojLujSwPxmeDJAE'
            },
            data: data
        };
        axios(config)
   const afterDeleteCars=  this.props.myCars.filter(car=>car.id !== id)
   this.props.setMyCars(afterDeleteCars)
    }
    render() {
        return (
            <>
                {this.props.car.status === 'taken' &&
                  <button onClick={this.props.handleShow} className="button button-primary">
                  Get Location
              </button>  
                }
                <button onClick={() => this.deleteCar(this.props.car.id)} className="button button-primary">
                    Delete
                </button>
                <button className="button button-primary" onClick={() => this.props.handelShowEdit(this.props.car)}>
                    Edit
                </button>
            </>
        )
    }
}

class CardBody extends React.Component {
    render() {
        return (
            <div className="card-body">
                <h2>{this.props.car.name}</h2>
                <p className="body-content">{this.props.car.carType} {this.props.car.model}</p>
                <p id={this.props.car.id}></p>

                <Button
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





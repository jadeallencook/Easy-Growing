import React, { Component } from 'react';
import './Store.scss';
import products from '../products.json';
import Paypal from '../components/Paypal';

class Store extends Component {
    constructor() {
        super();
        let types = [];
        Object.keys(products).forEach(id => {
            const { type } = products[id];
            if (type && types.indexOf(type) === -1) {
                types.push(type);
            }
        });
        this.state = {
            types: types,
            type: '',
            name: ''
        };
    }
    render() {
        return (
            <div className="Store">
                <input placeholder="Search by name..." type="text" value={this.state.name} onChange={event => this.setState({ ...this.state, name: event.target.value })} />
                <select value={this.state.type} onChange={event => this.setState({ ...this.state, type: event.target.value })}>
                    <option disabled value="">Search by type...</option>
                    <option value="">-- All products --</option>
                    {
                        this.state.types.map(type => {
                            return (
                                <option key={type} value={type}>{type}</option>
                            )
                        })
                    }
                </select>
                <ul>
                    {
                        (products) ? Object.keys(products).map(id => {
                            const flower = products[id];
                            const { name, description, price, type, image } = flower;
                            if ((!this.state.type && !this.state.name) || ((type === this.state.type || !this.state.type) && name.toLowerCase().indexOf(this.state.name.toLowerCase()) !== -1)) {
                                return (
                                    <li className="product" key={id}>
                                        <div className="image">
                                            <div
                                                style={{
                                                    backgroundImage: `url(./assets/images/products/${encodeURI((image) ? image : name)}.png)`
                                                }}
                                            ></div>
                                        </div><div className="description">
                                            <h3>{name} <span>({type})</span></h3>
                                            <p>{description}</p>
                                            <Paypal price={price} name={name} />
                                        </div>
                                    </li>
                                );
                            } else {
                                return null;
                            }
                        }) : null
                    }
                </ul>
            </div>
        );
    }
}

export default Store;

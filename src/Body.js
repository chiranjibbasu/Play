import React, { Component } from 'react';
export class CustomerTable extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<p></p>);
    }
}

//export default CustomerTable;

class Body extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (<div className="container">
            <h2>Customer Info</h2>
            <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
            </thead>
            
                {
                    this.props.customers.forEach(cust => 
                        {
                           console.log(cust.name);
                            
                        })
                   
                }
            
            
        </div>
        );

    }
}

export default Body;
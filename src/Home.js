import React from 'react';

class Home extends React.Component {
    render(){
        return(
            <React.Fragment>
                <h1>Hello {this.props.name}</h1>
            </React.Fragment>
        );
    }
}

export default Home;
import React from 'react';
import { render } from 'react-dom';

class HelloMessage extends React.Component {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}


render(
    <HelloMessage name="Venkatesh Kumar" />,
    document.getElementById('app')
);
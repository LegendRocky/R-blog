import React, {Component} from 'react';

var Hello = React.createClass({
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}!</h1>
            </div>
        );
    }
});

export default Hello;
//
// class Hello extends Component {
//   render() {
//     return (
//         <div>
//             <h1>Hello {this.props.name}!</h1>
//         </div>
//     );
//   }
// }

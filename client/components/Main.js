import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1> 
          <Link to="/">Redux Instagram</Link>
        </h1>
      </div>
    )
  }
}

export default Main; 

// const Main = React.createClass({
//   render() {
//     return (
//       <div>
//         <h1> 
//           <Link to="/">Redux Instagram</Link>
//         </h1>
//       </div>
//     )
//   }
// });
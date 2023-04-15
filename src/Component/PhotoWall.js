import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";

// class Photowall extends React.Component {
//   render() {
//     return (
//       <div className="photoGrid">
//         {this.props.posts.map((post, id) => (
//           <Photo post={post} key={id} />
//         ))}
//       </div>
//     );
//   }
// }

const Photowall = (props) => {
  return (
    <div className="photoGrid">
      {props.posts.map((post, id) => (
        <Photo post={post} onRemovePhoto={props.onRemovePhoto} key={id} />
      ))}
    </div>
  );
};

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default Photowall;

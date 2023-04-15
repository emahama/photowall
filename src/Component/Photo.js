import React from "react";
import PropTypes from "prop-types";

// class Photo extends React.Component {
//   render() {
//     const post = this.props.post;
//     return (
//       <figure className="figure">
//         <img className="photo" src={post.imageLink} alt={post.description} />
//         <figcaption>
//           <p>{post.description}</p>
//           <div className="button-container">
//             <button className="remove-button">Remove</button>
//           </div>
//         </figcaption>
//       </figure>
//     );
//   }
// }

const Photo = (props) => {
  const post = props.post;
  return (
    <figure className="figure">
      <img className="photo" src={post.imageLink} alt={post.description} />
      <figcaption>
        <p>{post.description}</p>
        <div className="button-container">
          <button
            className="remove-button"
            onClick={() => props.onRemovePhoto(post)}
          >
            Remove
          </button>
        </div>
      </figcaption>
    </figure>
  );
};

Photo.propTypes = {
  post: PropTypes.object.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};
export default Photo;

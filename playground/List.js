import React from "react";

class List extends React.Component {
  render() {
    return (
      <ol>
        {this.props.names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ol>
    );
  }
}

export default List;

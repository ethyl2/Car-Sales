import React from 'react';

const AddedFeature = props => {
  console.log('in AddedFeature');
  console.log(props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button is-dark" onClick={()=> {props.removeItem(props.feature)}}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;

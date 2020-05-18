import React from 'react';


const Icons = (props) => {
    return (
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className={props.forIcon} aria-hidden="true"></i>
          </span>
        </div>
      );
}
 
export default Icons;
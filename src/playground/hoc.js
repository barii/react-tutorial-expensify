import React from 'react';
impurt ReactDOM from 'react-dom'

const Info = (props) => {
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
};

const withAdminWarning = (WrappedComponents) => {
  return (props) => (
    <div>
      <p>This is private info, dont share</p>
      <WrappedComponents {...props}/>
    </div>
  );
};



const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<Info info = "detalis"/>, document.getElementById(app));
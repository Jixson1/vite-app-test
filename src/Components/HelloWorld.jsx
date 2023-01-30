import { useState, useEffect, useRef } from 'react';

function HelloWorld(props) {
  return (
    <div className="card">
      <h1>Hello, {props.name}</h1>
    </div>
  );
}

export default HelloWorld;
import React, { useRef } from 'react';

export default function Visualization() {
  const refElement = useRef(null);

  return (
    <div id='vis-container' ref={refElement} />
  );
}
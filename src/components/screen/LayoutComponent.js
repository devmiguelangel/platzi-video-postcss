import React from 'react';

import './layout.styl';


const LayoutComponent = (props) => {
  return (
    <section className="HomeLayout">
      { props.children }
    </section>
  )
}

export default LayoutComponent;
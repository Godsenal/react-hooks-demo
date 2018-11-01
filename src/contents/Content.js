import React from 'react';

const defaultStyle = {
  margin: '2rem auto',
  textAlign: 'center',
};

const Content = ({ title, content }) => {
  return (
    <div style={defaultStyle}>
      <h2>{title}</h2>
      {content}
    </div>
  );
};

export default Content;

import React from 'react';

import { serverBaseUrl } from '../modules/serverUrl';

const serverImagesBaseUrl = `${serverBaseUrl}/public/static/images/`;

const Title = () => {
  return (
    <div className='title-container'>
      <h1 id='title'>Club List</h1>
      <img
        src={serverImagesBaseUrl + 'soccer-ball.png'}
        alt='Soccer ball'
        className='soccer-ball-img'
      />
    </div>
  );
};

export default Title;

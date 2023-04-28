import React from 'react';

import { serverBaseUrl } from '../modules/serverUrl';

const imageAlt = 'Soccer ball';
const imageClass = 'soccer-ball-img';
const imageExtension = '.png';
const imageName = 'soccer-ball';
const serverImagesBaseUrl = `${serverBaseUrl}/public/static/images/`;

const Title = () => {
  const imageSrc = serverImagesBaseUrl + imageName + imageExtension;
  return (
    <div className='title-container'>
      <h1 id='title'>Club List</h1>
      <img
        src={imageSrc}
        alt={imageAlt}
        className={imageClass}
      />
    </div>
  );
};

export default Title;

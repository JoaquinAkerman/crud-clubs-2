import React from 'react';

import { serverBaseUrl } from '../modules/serverUrl';

export const NewClubForm = () => {
  const serverNewClubBaseUrl = `${serverBaseUrl}/clubs/new`;
  return (
    <div className='new-club-form'>
      <h1>New club</h1>

      <form
        action={serverNewClubBaseUrl}
        method='POST'
      >
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='shortName'>Shortname:</label>
          <input
            type='text'
            id='shortName'
            name='shortName'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='tla'>TLA:</label>
          <input
            type='text'
            id='tla'
            name='tla'
          />
        </div>
        
        <div className='form-group'>
          <label htmlFor='address'>Address:</label>
          <input
            type='text'
            id='address'
            name='address'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Phone:</label>
          <input
            type='text'
            id='phone'
            name='phone'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='website'>Website:</label>
          <input
            type='text'
            id='website'
            name='website'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='founded'>Founded:</label>
          <input
            type='number'
            id='founded'
            name='founded'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='clubColors'>Club colors:</label>
          <input
            type='text'
            id='clubColors'
            name='clubColors'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='venue'>Venue:</label>
          <input
            type='text'
            id='venue'
            name='venue'
          />
        </div>
        
       
          
        <button
          id='save'
          type='submit'
          className='btn btn-primary save-button'
        >
          Save
        </button>
      </form>
    </div>
  );
};

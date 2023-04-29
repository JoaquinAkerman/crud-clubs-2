import React from 'react';

export const NewClubForm = () => {
  return (
    <div className='new-club-form'>
      <h1>New club</h1>

      <form
        action='http://localhost:3030/clubs/new'
        method='POST'
        encType='multipart/form-data'
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
          <label htmlFor='crestUrl'>Crest URL:</label>
          <input
            type='text'
            id='crestUrl'
            name='crestUrl'
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
        <div className='form-group'>
          <label htmlFor='lastUpdated'>Last updated:</label>
          <input
            type='text'
            id='lastUpdated'
            name='lastUpdated'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='image'>Image:</label>
          <input
            type='file'
            id='image'
            name='image'
            accept='image/*'
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

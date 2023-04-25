import React from 'react';

export const NewClubForm = () => {
  return (
    <div>
      <h1>New club</h1>

      <form
        action='/clubs/new'
        method='POST'
      >
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
          />
        </div>
        <div>
          <label htmlFor='shortName'>Shortname:</label>
          <input
            type='text'
            id='shortName'
            name='shortName'
          />
        </div>
        <div>
          <label htmlFor='tla'>TLA:</label>
          <input
            type='text'
            id='tla'
            name='tla'
          />
        </div>
        <div>
          <label htmlFor='crestUrl'>Crest URL:</label>
          <input
            type='text'
            id='crestUrl'
            name='crestUrl'
          />
        </div>
        <div>
          <label htmlFor='address'>Address:</label>
          <input
            type='text'
            id='address'
            name='address'
          />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            type='text'
            id='phone'
            name='phone'
          />
        </div>
        <div>
          <label htmlFor='website'>Website:</label>
          <input
            type='text'
            id='website'
            name='website'
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
          />
        </div>
        <div>
          <label htmlFor='founded'>Founded:</label>
          <input
            type='number'
            id='founded'
            name='founded'
          />
        </div>
        <div>
          <label htmlFor='clubColors'>Club colors:</label>
          <input
            type='text'
            id='clubColors'
            name='clubColors'
          />
        </div>
        <div>
          <label htmlFor='venue'>Venue:</label>
          <input
            type='text'
            id='venue'
            name='venue'
          />
        </div>
        <div>
          <label htmlFor='lastUpdated'>Last upddated:</label>
          <input
            type='text'
            id='lastUpdated'
            name='lastUpdated'
          />
        </div>
        <button
          id='save'
          type='submit'
        >
          Save
        </button>
      </form>
    </div>
  );
};

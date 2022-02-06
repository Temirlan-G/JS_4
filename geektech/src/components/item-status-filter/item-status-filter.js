import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ({onStatusChange, statuses}) => {
  return (
    <div className="btn-group">
      <button onClick={() => {onStatusChange('all')}}
              type="button"
              // className="btn btn-info"
          className={statuses === 'all' ? 'btn btn-info' : 'btn btn-outline-secondary'}
      >
          All</button>
      <button onClick={() => {onStatusChange('active')}}
              type="button"
              // className="btn btn-outline-secondary"
              className={statuses === 'active' ? 'btn btn-info' : 'btn btn-outline-secondary'}
      >
          Active</button>
      <button onClick={() => {onStatusChange('done')}}
              type="button"
              // className="btn btn-outline-secondary"
              className={statuses === 'done' ? 'btn btn-info' : 'btn btn-outline-secondary'}
      >
          Done</button>
    </div>
  );
};

export default ItemStatusFilter;

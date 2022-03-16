import React from 'react';
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
        <div className='widgets__article-left'>
            <FiberManualRecordIcon />
        </div>
        <div className='widgets__article-right'>
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
)

function Widgets() {
  return <div className='widgets'>
      <div className='widgets__header'>
          <h2>LinkedIn News</h2>
          <InfoIcon />
      </div>
      {newsArticle("Bitcoin Breaks $22k", "Crypto - 8000 renders")}
  </div>;
}

export default Widgets;

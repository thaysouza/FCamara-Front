import React from 'react';
import '../styles/background.css';
import GrafismosOrange from '../Components/grafismos_orange';
import Entry from '../Components/entry';

const EntryPage = () => {
    return (
      <>
        <div className='container-bg colorOrange'>
          <div>
            <Entry />
            <GrafismosOrange />
          </div>
        </div>
      </>
    );
  };
  
  export default EntryPage;


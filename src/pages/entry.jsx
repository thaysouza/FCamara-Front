import React from 'react';
import '../styles/background.css';
import GrafismosOrange from '../Components/grafismos_orange';
import Entry from '../Components/entry';
import Menu from '../Components/menu';

const EntryPage = () => {
    return (
      <>
      <Menu/>
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


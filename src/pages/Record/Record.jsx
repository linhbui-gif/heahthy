import React from 'react';
import './Record.scss';
import RecordFirst from '@/containers/RecordFirst';
import RecordSecond from '@/containers/RecordSecond';
import RecordThree from '@/containers/RecordThree';
import RecordFour from '@/containers/RecordFour';

const Record = () => {
  return (
    <main className="Record">
      <RecordFirst />
      <RecordSecond />
      <RecordThree />
      <RecordFour />
    </main>
  );
};

export default Record;

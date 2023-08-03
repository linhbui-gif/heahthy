import React from 'react';
import './List.scss';
import ListSecond from '@/containers/ListSecond';
import ListFirst from '@/containers/ListFirst';

const List = () => {
  return (
    <main className="List">
      <ListFirst />
      <ListSecond />
    </main>
  );
};

export default List;

import React from 'react';
import styles from './styles.module.css'

const SearchInput = ({value, onChange}) => {
  return (
    <input className={styles.input} value={value} onChange={onChange} />
  );
};

export default SearchInput;
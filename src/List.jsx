import React, {useEffect} from 'react';
import styles from './styles.module.css'

const List = React.memo(({items, onChangeItems}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (items.length > 5) {
        onChangeItems([...items.splice(1)])
      } else {
        onChangeItems([...items.slice(1), items[0]])
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [items])

  return (
    <div className={styles.list}>
      {items.slice(0, 5).map((item, index) => (
        <div className={styles.item} key={index}>{item}</div>
      ))}
    </div>
  );
});

export default List;
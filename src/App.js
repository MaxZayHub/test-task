import './App.css';
import List from "./List";
import styles from './styles.module.css'
import React, {useCallback, useEffect, useState} from "react";

const INITIAL_ITEMS = ["A", "B", "C", "D", "E"]

const URL = 'https://itunes.apple.com/search?term='

const getApiData = async (searchString) => {
  const req = await fetch(`${URL}${searchString}`)
  const res = await req.json()
  return res.results.map((res) => res.collectionName)
    .slice(0, 5)
    .sort((a, b) => a > b ? 1 : 0)
}

function App() {
  const [search, setSearch] = useState('')
  const [items, setItems] = useState(INITIAL_ITEMS)

  useEffect(() => {
    const asyncUseEffect = async () => {
      if (search.length > 0) {
        const newItems = await getApiData(search)
        setItems([...search, ...newItems])
      }
    }

    asyncUseEffect()
  }, [search])

  const searchOnChangeHandler = (e) => {
    setSearch(e.target.value)
  }

  const changeItems = (items) => {
    setItems(items)
  }

  return (
    <div className="App">
      <div className={styles.container}>
        <input
          className={styles.input}
          value={search}
          onChange={searchOnChangeHandler} />
        <List
          items={items}
          onChangeItems={changeItems}
        />
      </div>
    </div>
  );
}

export default App;

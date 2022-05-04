import React, { useState, useEffect } from 'react';

export const SettingsContext  = React.createContext();

export default function SettingsProvider({ children }){
  const [completed, setCompleted] = useState(false)
  const [pageItems, setPageItems] = useState(3)
  const [sort, setSort] = useState('difficulty')

  const addCompleted = (item) => {
    //error handling / rules? 
    //set item to complete
  }

  useEffect(() => {
    const savedCompleted = localStorage.getItem('completed');
    const savedPageItems = localStorage.getItem('pageItems');
    const savedSort = localStorage.getItem('sort');

    setCompleted(JSON.parse(savedCompleted));
    setPageItems(JSON.parse(savedPageItems));
    setSort(JSON.parse(savedSort));
  }, [])

  //container is used for "what to watch for" empty array means watch for any state change 
  useEffect(() => {
    localStorage.setItem("completed", JSON.stringify(completed));
    localStorage.setItem("pageItems", JSON.stringify(pageItems));
    localStorage.setItem("sort", JSON.stringify(sort));
  }, []);

  return(
    <SettingsContext.Provider value={{completed, pageItems, sort}}>
      {children}
    </SettingsContext.Provider>
  )
}
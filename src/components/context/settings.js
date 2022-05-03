import React, { useState } from 'react';

export const SettingsContext  = React.createContext();

export default function SettingsProvider(props){
  const [settings, setSettings] = useState({
    showCompleted: true,
    count: 5,
    sort: '',
  })
  return(
    <SettingsContext.Provider value={settings}>
      {props.children}
    </SettingsContext.Provider>
  )
}
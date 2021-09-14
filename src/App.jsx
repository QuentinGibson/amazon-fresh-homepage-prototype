import Main from './components/Main'
import {createContext, useState} from 'react'

export const activeStatusContext = createContext()
export const searchContext = createContext()
export default function App() {
  const [activeStatus, setActiveStatus] = useState("All");
  const [search, setSearch] = useState('')
  return (
    <activeStatusContext.Provider value={[activeStatus, setActiveStatus]}>
      <searchContext.Provider value={[search, setSearch]}>
        <Main/>
      </searchContext.Provider>
    </activeStatusContext.Provider>
  );
}

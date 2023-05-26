import { useState } from 'react'

export const Tab = ({ children, activeTab, currentTab, setActiveTab }) => {
  return (
    <div
      className={`px-5 py-3 rounded cursor-pointer
      ${activeTab === currentTab ? 'bg-white' : 'bg-pink-400 text-white'}`}>
      <button
        onClick={() => setActiveTab(currentTab)}
        onKeyDown={event => {
          if (event.key === 'Enter') {
            setActiveTab(currentTab)
          }
        }}>
        {children}
      </button>
    </div>
  )
}

const Tabs = ({ children }) => {
  function findActiveTab(a) {
    return a.reduce((accumulator, currentValue, i) => {
      if (currentValue.props.active) {
        return i
      }

      return accumulator
    }, 0)
  }

  const tabValidator = (tab) => {
    return tab.type.displayName === 'Tab' ? true : false
  }

  const [activeTab, setActiveTab] = useState(findActiveTab(children)) 

  return (
    <>
      <div className="flex gap-2 justify-center bg-pink-500 p-2">
        {children.map((item, i) => {
          return (
            <div key={`tab-${i}`}>
              {tabValidator(item) && (
                <Tab
                  key={`tab-{i}`}
                  currentTab={i}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}>
                  {item.props.children}
                </Tab>
              )}
            </div>
          )
        })}
      </div>
      <div className="p-5">
        {children.map((item, i) => {
          return (
            <div key={`${i}`} className={` ${i === activeTab ? 'visible' : 'hidden'}`}>
              {item.props.component}
            </div>
          )
        })}
      </div>
    </>
  )
}

Tab.displayName = 'Tab'
export default Tabs

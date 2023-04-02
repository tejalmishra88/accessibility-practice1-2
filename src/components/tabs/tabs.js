import { useState } from 'react'
import './tabs.css'

const headings = ['First tab', 'Second tab', 'Third tab']
const content = [
  'This is the first tab content',
  'The second tab is much the same as the first tab',
  'But the third tab does its own thing',
]

function Tabs() {
  const [selectedTab, setSelectedTab] = useState(0)

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setSelectedTab(idx)
    }
  }

  return (
    <div className="Tabs">
      <div role="tablist">
        {headings.map((text, idx) => {
          return (
            <TabHeading
              key={idx}
              onClick={() => {
                setSelectedTab(idx)
              }}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              selected={selectedTab === idx}
              title={headings[idx]}
              id={`tab-${idx}`}
              panelId={`tabpanel-${idx}`}
            />
          )
        })}
      </div>
      <div
        className="tabcontent"
        id={`tabpanel-${selectedTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${selectedTab}`}
      >
        {content[selectedTab]}
      </div>
    </div>
  )
}

function TabHeading(props) {
  return (
    <span
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
      className={props.selected ? 'tab selected' : 'tab'}
      tabIndex="0"
      role="tab"
      id={props.id}
      aria-controls={props.panelId}
      aria-selected={props.selected}
    >
      {props.title}
    </span>
  )
}

export default Tabs

# Accessibility practice 1

## Accessible Tabs

Below is the code for a React component that works like a series of tabs. Clicking a tab displays the content for that tab, and only one tab content is visible at a time.

Following the [WAI guidelines for accessible tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/), make this tab component accessible.

In particular:
* Make it so that each of the tabs can be focused and activated by the keyboard using `Space` or `Enter`
* Add the correct `aria-` and `role` attributs for the tab and tab content panel according to the guidelines.
  * Add `role="tablist"`, `role="tab"`, `role="tabpanel"` to the appropriate elements
  * Each tab has `aria-controls=` set to the tab content panel
  * The active tab has `aria-selected` set to true, and all others set to false.
  * The tab content element has `aria-labelledby=` referring to the correct tab heading element.

`Tabs.js`

```js
import { useState } from "react"
import "./Tabs.css"

const headings = [
  'First tab', 'Second tab', 'Third tab'
]
const content = [
  'This is the first tab content',
  'The second tab is much the same as the first tab',
  'But the third tabe does its own thing'
]

function Tabs() {
  const [selectedTab, setSelectedTab] = useState(0)
  
  return <div className="Tabs">
    <div>
      { headings.map((text, idx) => {
        return <TabHeading
          key={idx}
          onClick={() => {setSelectedTab(idx)}}
          selected={selectedTab === idx}
          title={headings[idx]}/>
      })}
    </div>
    <div className="tabcontent">{content[selectedTab]}</div>
  </div>
}

function TabHeading(props) {
  return <span
    onClick={props.onClick}
    className={props.selected ? 'tab selected': 'tab'}>
    {props.title}
  </span>
}

export default Tabs
```

`Tabs.css`
```css
.Tabs {
  padding: 10px;
  background-color: lightgray;
}

.Tabs .tab {
  padding: 10px 20px;
  display: inline-block;
  background-color: rgb(203, 236, 247);
  margin-right: 6px;
}

.Tabs .tabcontent {
  padding: 10px;
  background-color: white;
}

.Tabs .tab.selected {
  font-weight: bold;
  background-color: white;
}
```



# Accessibility Pratice 2

## Skip navigation link

The example app below has several navigation links, it'd be nice for someone with a screen reader to be able to easily skip those and get to the main content.

This is relatively easy by adding a link `<a href="#maincontent">Skip navigation</a>`, but for aesthetic reasons you might want to hide that link for other users.

Following the [WebAIM article on skip navigation links](https://webaim.org/techniques/skipnav/), create a skip navigation link that is only visible when focused.

Be careful which technique you use to hide the link with CSS since a lot of common techniques also hide the link from screen readers. See the [WebAIM article on invisible content for screen readers](https://webaim.org/techniques/css/invisiblecontent/).

```js
function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
      <main id="maincontent">
        <h1>Welcome</h1>
        <p>
          This is the first post on this new website! To meet us, read our{" "}
          <a href="/about">about us</a> page.
        </p>
        <h2>Find out more</h2>
        <p>
          If you want to find out more about how to use this, take a look at the{" "}
          <a href="/instructions">instructions</a>.
        </p>
      </main>
    </div>
  );
}
```

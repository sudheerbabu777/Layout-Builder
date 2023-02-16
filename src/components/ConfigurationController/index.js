// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="layout-container">
          <ul className="list-container">
            <h1 className="layout-title">Layout</h1>
            <li className="check-box-container">
              <input
                checked={showContent}
                type="checkBox"
                id="label"
                className="check-box"
                onChange={onChangeContent}
              />
              <label htmlFor="label" className="label">
                Content
              </label>
            </li>
            <li className="check-box-container">
              <input
                checked={showLeftNavbar}
                type="checkBox"
                id="label"
                className="check-box"
                onChange={onChangeLeftNavbar}
              />
              <label htmlFor="label" className="label">
                Left NavBar
              </label>
            </li>
            <li className="check-box-container">
              <input
                checked={showRightNavbar}
                type="checkBox"
                id="label"
                className="check-box"
                onChange={onChangeRightNavbar}
              />
              <label htmlFor="label" className="label">
                Right NavBar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController

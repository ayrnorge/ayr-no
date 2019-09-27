
const React = require("react")
exports.onRenderBody = ({
  setHeadComponents
}) => {
  setHeadComponents([
    <script key="xyz" type="text/javascript" src='//cdn.freshmarketer.com/464989/1423120.js' />,
  ])
}


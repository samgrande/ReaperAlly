var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var ShowIp = function (_React$Component) {_inherits(ShowIp, _React$Component);
  function ShowIp(props) {_classCallCheck(this, ShowIp);var _this = _possibleConstructorReturn(this, (ShowIp.__proto__ || Object.getPrototypeOf(ShowIp)).call(this,
    props));
    _this.state = {
      ip: "..." };return _this;

  }_createClass(ShowIp, [{ key: "componentDidMount", value: function componentDidMount()

    {var _this2 = this;
      //Create new XMLHttpRequest
      if (window.XMLHttpRequest) {// Mozilla, Safari, IE7+ ...
        var httpRequest = new XMLHttpRequest();
      } else if (window.ActiveXObject) {// IE 6 and older
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
      }

      httpRequest.addEventListener("readystatechange", function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
          var response = JSON.parse(httpRequest.responseText);
          _this2.setState({
            ip: response.ip,
            city: response.city,
            country: response.country });

        }
      }, false);

      httpRequest.open("GET", "https://ipinfo.io/json", true);
      httpRequest.send();
    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", { className: "showIp" },
          React.createElement("h1", null, "You IP is ", this.state.ip),
          React.createElement("p", null, "City: ", React.createElement("strong", null, this.state.city), ", Country: ", React.createElement("strong", null, this.state.country))));


    } }]);return ShowIp;}(React.Component);


ReactDOM.render(
React.createElement(ShowIp, null),
document.querySelector("#root"));
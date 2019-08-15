/** @jsx 客户端入口 Created by chenfeng on 2018/07/05. */

var React = require("react");
var Application = require("./Application");

React.renderComponent(
	<Application url={location.pathname + (location.search || "")} />,
	document.getElementById("content")
);

var serverSideStyle = document.getElementById("server-side-style");
if(serverSideStyle)
	document.getElementsByTagName("head")[0].removeChild(serverSideStyle);

import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

@font-face {
	font-family: Clash;
	src: '~/fonts/clash.ttf'
}

*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing: border-box;
  word-break: break-all;
}

a:hover{
  text-decoration: none;
  cursor: pointer;
}

*:focus{
  outline:0;
}

html, body, #root{
  height: 100%;
  overflow: hidden;
}

body{
  -webkit-font-smoothing: antialiased;
  background-color: #2f353a;
}

body, input, button {
  font: 14px 'Roboto', sans-serif;
}

.collapseCustom{
  margin-bottom:20px !important;
}

.ant-collapse{
  border: 0px !important;
}

.tituloSystem{
  color: white !important;
  font-size: large;
  cursor: pointer;
}

a {
  text-decoration: none;
  cursor: pointer;
}

ul {
  list-style: none;
}

.tableCustom{
  display:table !important;
  border: 2px solid #00000020;
  border-radius: 5px;
}

button {
  cursor: pointer;
}

.submitCustom{
  border-radius: 3px !important;
  height: 31px !important;
  background: #002140 !important;
  border-color: #002140 !important;
  color: white
}

.submitCustom2{
  border-radius: 3px !important;
  height: 31px !important;
  background: #9B3D3C !important;
  border-color: #9B3D3C !important
}

.returnCustom{
  padding: 6px 43px;
  color: white;
  border-radius: 3px;
  background-color: darkgrey;
  margin-left:20px
}

a:hover{
  color: white !important;
}

.overflowInvisible{
  padding: 0px 24px 24px;
  margin-left: -12px;
  z-index: 1;
  overflow: auto;
}


.title{
  font-size: 18px;
  font-weight: bold;
}

.linkButton {
  background-color: gray;
  border: 0;
  border-radius: 4px;
  height: 38px;
  padding: 0 15px;
  padding-top: 6px;
}

.linkButtonNew {
  background-color: #1cc88a;
  border: 0;
  border-radius: 4px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 7px;
  padding-bottom: 7px;
  color: white;
}

#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.LayoutGlobal{
  height: 100%;
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.displayGrid{
  display:grid
}

.site-layout-background {
  background: #fff;
}

.resetPassword{
  display: flex;
  margin-top: 0 !important;
  margin-bottom: 10px;
  color:black !important;
}

.resetPassword:hover{
color: blue !important;
}

.loading-container{
  background-color: #f8f8f8AD;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 9999998;
  position: fixed;
  width: 100%;
}

`;

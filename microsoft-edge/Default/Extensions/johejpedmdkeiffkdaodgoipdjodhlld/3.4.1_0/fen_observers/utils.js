import{FEN_ELEMENT_ID}from"./settings.js";export const getFenElement=()=>{let e=window.document.getElementById(FEN_ELEMENT_ID);return e||(e=window.document.createElement("div"),e.setAttribute("id",FEN_ELEMENT_ID),window.document.body.append(e)),e};export function debounce(e,t=100){let n;return(...o)=>{clearTimeout(n),n=setTimeout((()=>{e(...o)}),t)}}
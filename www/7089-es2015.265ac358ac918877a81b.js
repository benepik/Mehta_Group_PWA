(self.webpackChunkMehta=self.webpackChunkMehta||[]).push([[7089],{37089:function(e,t,s){"use strict";s.r(t),s.d(t,{startFocusVisible:function(){return n}});const o=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],n=()=>{let e=[],t=!0;const s=document,n=t=>{e.forEach(e=>e.classList.remove("ion-focused")),t.forEach(e=>e.classList.add("ion-focused")),e=t},c=()=>{t=!1,n([])};s.addEventListener("keydown",e=>{t=o.includes(e.key),t||n([])}),s.addEventListener("focusin",e=>{if(t&&e.composedPath){const t=e.composedPath().filter(e=>!!e.classList&&e.classList.contains("ion-focusable"));n(t)}}),s.addEventListener("focusout",()=>{s.activeElement===s.body&&n([])}),s.addEventListener("touchstart",c),s.addEventListener("mousedown",c)}}}]);
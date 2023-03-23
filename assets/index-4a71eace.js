(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();let l="https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=json&pagination=false&indent=true&filter=program.archived&filterValue=false";async function d(){return await fetch(l).then(t=>t.json()).then(t=>t).catch(t=>(console.error("nått blev fel:",t),null))}const u=document.querySelector(".section__podlist-pods");function m(){const t=document.createElement("article");return t.setAttribute("class","section__article-innerarticle"),t.setAttribute("tabindex","1"),u.appendChild(t),t}function p(t){const n=document.createElement("div");return n.setAttribute("class","section__article-text-container"),t.appendChild(n),n}function f(t,n){const e=document.createElement("IMG");e.setAttribute("src",t.socialimage),e.setAttribute("class","section__article-img"),e.setAttribute("width","100"),e.setAttribute("height","100"),e.setAttribute("alt",`Omslagsbild för podcasten ${t.name}`),n.appendChild(e)}function g(t,n){const e=document.createElement("h2");e.setAttribute("class","section__article-title");const i=document.createTextNode(t.name);e.appendChild(i),n.appendChild(e)}function h(t,n){const e=document.createElement("p");e.setAttribute("class","section__article-description");const i=document.createTextNode(t.description);e.appendChild(i),n.appendChild(e)}function b(t,n){const e=document.createElement("a"),i=document.createTextNode("Lyssna här");e.setAttribute("href",t.programurl),e.setAttribute("class","section__article-link"),e.appendChild(i),n.appendChild(e)}async function y(){(await d()).programs.forEach(n=>{const e=m();f(n,e);const i=p(e);g(n,i),h(n,i),b(n,i)})}const s=document.querySelector(".toggle-btn");s.addEventListener("click",a);function a(){document.body.classList.toggle("darkmode"),document.body.classList.contains("darkmode")?(s.innerHTML="Välj mörkt läge",console.log("mörkt läge")):(s.innerHTML="Välj ljust läge",console.log("ljust läge"))}function A(){a(),y()}A();

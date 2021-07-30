(()=>{var e={72:e=>{e.exports=class{constructor(){this.items=[]}add(e){return this.items.push(e)}getItemCount(){return this.items.length}getTotalBeforeTax(){let e=0;return this.items.map((e=>e.price)).forEach((function(t){e+=t})),e}getTotalWithTax(){let e=0;return this.items.forEach((function(t){e+=t.getPriceWithTax()})),e}getTax(){return this.getTotalWithTax()-this.getTotalBeforeTax()}}},132:e=>{e.exports=class{constructor(e,t,n){this.name=e,this.price=t,this.taxable=n}getPriceWithTax(){return!0===this.taxable?1.1*this.price:this.price}}},842:e=>{e.exports=function(e){let t=(e=Math.ceil(100*e)/100).toFixed(2);return t.includes("-")?"-$"+t.substring(1):"$"+t}}},t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}(()=>{const e=n(72),t=n(132);let{formatCurrency:i,getCoins:r}=n(842);i=i||(e=>e);const a=[new t("Candy Bar",1,!0),new t("Bag of Chips",2,!0),new t("Can of Soda",3,!0),new t("Bottle of Milk",3,!1),new t("Box of Cherries",5,!1)];!function(){const t=document.getElementById("menu"),n=document.getElementById("selectedItems"),o=document.getElementById("subtotal"),s=document.getElementById("tax"),d=document.getElementById("total"),c=document.getElementById("cashInput"),u=document.getElementById("cashForm"),l=document.getElementById("changeDue"),m=document.getElementById("cashInserted"),h=document.getElementById("paymentInsufficientMessage"),x=document.getElementById("change"),g=x.querySelectorAll(".change-count"),T=document.getElementById("resetButton");a.forEach(((e,n)=>{t.insertAdjacentHTML("beforeend",`<li>${i(e.price)}${e.taxable?"*":""} - ${e.name}\n        <button data-index="${n}">Buy</button>\n      </li>`)}));let f=new e;function p(){n.innerHTML="";for(const e of f.items)selectedItems.insertAdjacentHTML("beforeend",`<tr>\n        <td>${e.name}</td>\n        <td>${i(e.price)}</td>\n        <td>${i(e.getPriceWithTax())}</td>\n      </tr>`);o.innerText=i(f.getTotalBeforeTax()),s.innerText=i(f.getTax()),d.innerText=i(f.getTotalWithTax())}t.addEventListener("click",(e=>{const t=parseInt(e.target.getAttribute("data-index"));isNaN(t)||(f.add(a[t]),p())})),u.addEventListener("submit",(e=>{e.preventDefault();const t=Number(c.value)||0,n=t-f.getTotalWithTax();if(m.innerText=i(t),l.innerText=i(n),n>=0){const e=r(Math.round(100*n));g[0].innerText=e.quarters,g[1].innerText=e.dimes,g[2].innerText=e.nickels,g[3].innerText=e.pennies,x.hidden=!1,h.hidden=!0}else x.hidden=!0,h.hidden=!1})),T.addEventListener("click",(()=>{f=new e,p(),c.value="",m.innerText="",l.innerText="",x.hidden=!0,h.hidden=!0}))}()})()})();
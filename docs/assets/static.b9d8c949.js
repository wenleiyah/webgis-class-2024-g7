document.addEventListener("DOMContentLoaded",n=>{document.querySelectorAll(".toggle-title").forEach(e=>{const c=e.nextElementSibling,t=e.querySelector(".arrow");e.addEventListener("click",()=>{c.classList.toggle("hidden"),e.classList.toggle("active"),e.classList.contains("active")?t.innerHTML="&#9207;":t.innerHTML="&#9205;"})}),showDataset("dataset-80-20")});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".clickable").forEach(n=>{n.addEventListener("click",function(s){s.preventDefault();const e=this.getAttribute("data-target");document.querySelectorAll(".row.special").forEach(t=>{t.style.display="none",t.querySelectorAll("img").forEach(o=>{o.classList.remove("show")})});const c=document.getElementById(e);c.style.display="flex",setTimeout(()=>{c.querySelectorAll("img").forEach(t=>{t.classList.add("show")})},10),document.querySelectorAll(".clickable").forEach(t=>{t.classList.remove("clicked")}),this.classList.add("clicked")})})});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".image-link img").forEach(s=>{const e=s.getAttribute("src"),c=s.closest("a");c&&c.setAttribute("href",e)})});

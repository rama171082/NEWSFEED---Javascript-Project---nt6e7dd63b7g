
function savePage(){    
    window.location.href = ("./save.html");
    }
    function newPage(){    
        window.location.href = ("./new.html");
        }
async function fetchNews(){
    const response = await fetch("https://content.newtonschool.co/v1/pr/64e3d1b73321338e9f18e1a1/inshortsnews");
    const news = await response.json();   
    console.log(news);
    dispNews(news);
}
const list = document.getElementById("cardList");  
function dispNews(news){   
    list.innerHTML="";
    news.forEach(element => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-item");
        listItem.innerHTML=`<span id="author">BY ${element.author}</span>
                            <span id="cat">CATEGORY ${element.category}</span>                            
                            <p>${element.content}<a href = ${element.url}>READ MORE.</a></p>
                            <button id="favBtn">&#10084</button>`;
                            // const favBtn = listItem.querySelector("#favBtn");
                            // let fav=true;
                            // favBtn.addEventListener("click", ()=>{
                            //     if(fav){
                            //         saveNewsToLocal(element,fav);

                            //     }
                            // });
                                                         
                           list.appendChild(listItem);
    });    
}  
    
    function getNewsFromLocal(){
            const savedNews = JSON.parse(localStorage.getItem("favNews")) || [];
            return savedNews;
        }
        const busBtn = document.getElementById("busi");
        busBtn.addEventListener("click",async ()=>{
           const busNews = await (loadNewsByCategory());
             console.log(busNews);             
             const business = busNews.filter((cat)=>{
               return cat.category === "Business";
             });
             console.log(business);
             dispNews(business);
         });
        const sportsBtn = document.getElementById("sports");
        sportsBtn.addEventListener("click",async ()=>{
           const busNews = await (loadNewsByCategory());
             console.log(busNews);             
             const sport = busNews.filter((cat)=>{
               return cat.category === "Sports";
             });
             console.log(sport);
             dispNews(sport);
         });
         const worldBtn = document.getElementById("world");
        worldBtn.addEventListener("click",async ()=>{
           const busNews = await (loadNewsByCategory());
             console.log(busNews);             
             const worl = busNews.filter((cat)=>{
               return cat.category === "International";
             });
             console.log(worl);
             dispNews(worl);
         });
         const politicsBtn = document.getElementById("politics");
        politicsBtn.addEventListener("click",async ()=>{
           const busNews = await (loadNewsByCategory());
             console.log(busNews);             
             const poli = busNews.filter((cat)=>{
               return cat.category === "Politics";
             });
             console.log(poli);
             dispNews(poli);
         });
         const hatkeBtn = document.getElementById("hatke");
        hatkeBtn.addEventListener("click",async ()=>{
           const busNews = await (loadNewsByCategory());
             console.log(busNews);             
             const hat = busNews.filter((cat)=>{
               return cat.category === "Hatke";
             });
             console.log(hat);
             dispNews(hat);
         });
         const scienceBtn = document.getElementById("science");
        scienceBtn.addEventListener("click",async ()=>{
           const busNews = await (loadNewsByCategory());
             console.log(busNews);             
             const scien = busNews.filter((cat)=>{
               return cat.category === "Technology";
             });
             console.log(scien);
             dispNews(scien);
         });
         const autoBtn = document.getElementById("auto");
        autoBtn.addEventListener("click",async ()=>{
           const busNews = await (loadNewsByCategory());
             console.log(busNews);             
             const autom = busNews.filter((cat)=>{
               return cat.category === "Automobile";
             });
             console.log(autom);
             dispNews(autom);
         });
        async function loadNewsByCategory(){
            const response = await fetch("https://content.newtonschool.co/v1/pr/64e3d1b73321338e9f18e1a1/inshortsnews");
             const news = await response.json();          
             return news;
            }
            const all = document.getElementById("all");
            all.addEventListener("click", async ()=>{
            const response = await fetch("https://content.newtonschool.co/v1/pr/64e3d1b73321338e9f18e1a1/inshortsnews");
            const news = await response.json();   
            console.log(news);
            dispNews(news);
        });
              
    function saveNewsToLocal(newNews,fav){
    console.log(newNews);
    const savedNews = getNewsFromLocal(); 
    savedNews.push(newNews);
    localStorage.setItem("favNews",JSON.stringify(savedNews));
    fav=false;
 }

 
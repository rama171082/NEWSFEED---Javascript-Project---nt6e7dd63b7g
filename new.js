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
                            const fav = listItem.querySelector("#favBtn");
                            fav.addEventListener("click", async()=>{
                              const savedNews = await getNewsFromLocal();
                              let already =false;
                              already = savedNews.some(ele=>ele.author === element.author);
                              // console.log(already);
                            if(!already){
                            
                              savedNews.push(element);
                            already=false;
                          }  
                        
                              localStorage.setItem("favNews",JSON.stringify(savedNews));
                               fav.classList.toggle("liked");
                            })
                            // console.log(fav);                             
                           list.appendChild(listItem);
                          
    });    
} 
function getNewsFromLocal(){
    let savedNews =[];
          savedNews = JSON.parse(localStorage.getItem("favNews")) || [];
          return savedNews;
      }

const busBtn = document.querySelector("#busi");
        busBtn.addEventListener("click",async ()=>{
          var buttons = document.getElementsByTagName('button');
          for (var i = 0; i < buttons.length; i++) {
              buttons[i].classList.remove('highlighted');
          }
         
           const busNews = await (loadNewsByCategory());
            //  console.log(busNews);             
             const business = busNews.filter((cat)=>{
               return cat.category === "Business";
             });
            //  console.log(business);
             dispNews(business);
             busBtn.classList.add("highlighted");
         });
        const sportsBtn = document.getElementById("sports");
        sportsBtn.addEventListener("click",async ()=>{
          
          var buttons = document.getElementsByTagName('button');
          for (var i = 0; i < buttons.length; i++) {
              buttons[i].classList.remove('highlighted');
          }
           const busNews = await (loadNewsByCategory());
             console.log(busNews);             
             const sport = busNews.filter((cat)=>{
               return cat.category === "Sports";
             });
            //  console.log(sport);
             dispNews(sport);
             sportsBtn.classList.add("highlighted");
         });
         const worldBtn = document.getElementById("world");
        worldBtn.addEventListener("click",async ()=>{
          var buttons = document.getElementsByTagName('button');
          for (var i = 0; i < buttons.length; i++) {
              buttons[i].classList.remove('highlighted');
          }
         
           const busNews = await (loadNewsByCategory());
             console.log(busNews);             
             const worl = busNews.filter((cat)=>{
               return cat.category === "International";
             });
            //  console.log(worl);
             dispNews(worl);
             worldBtn.classList.add("highlighted");
         });
         const politicsBtn = document.getElementById("politics");
        politicsBtn.addEventListener("click",async ()=>{
          var buttons = document.getElementsByTagName('button');
          for (var i = 0; i < buttons.length; i++) {
              buttons[i].classList.remove('highlighted');
          }
        
           const busNews = await (loadNewsByCategory());
             console.log(busNews);             
             const poli = busNews.filter((cat)=>{
               return cat.category === "Politics";
             });
            //  console.log(poli);
             dispNews(poli);
             politicsBtn.classList.add("highlighted");
         });
         const hatkeBtn = document.getElementById("hatke");
        hatkeBtn.addEventListener("click",async ()=>{
          var buttons = document.getElementsByTagName('button');
          for (var i = 0; i < buttons.length; i++) {
              buttons[i].classList.remove('highlighted');
          }
          
           const busNews = await (loadNewsByCategory());
             console.log(busNews);             
             const hat = busNews.filter((cat)=>{
               return cat.category === "Hatke";
             });
            //  console.log(hat);
             dispNews(hat);
             hatkeBtn.classList.add("highlighted");
         });
         const scienceBtn = document.getElementById("science");
        scienceBtn.addEventListener("click",async ()=>{
          var buttons = document.getElementsByTagName('button');
          for (var i = 0; i < buttons.length; i++) {
              buttons[i].classList.remove('highlighted');
          }
        
           const busNews = await (loadNewsByCategory());
             console.log(busNews);             
             const scien = busNews.filter((cat)=>{
               return cat.category === "Technology";
             });
            //  console.log(scien);
             dispNews(scien);
             scienceBtn.classList.add("highlighted");
         });
         const autoBtn = document.getElementById("auto");
        autoBtn.addEventListener("click",async ()=>{
          var buttons = document.getElementsByTagName('button');
          for (var i = 0; i < buttons.length; i++) {
              buttons[i].classList.remove('highlighted');
          }
         
           const busNews = await (loadNewsByCategory());
             console.log(busNews);             
             const autom = busNews.filter((cat)=>{
               return cat.category === "Automobile";
             });
            //  console.log(autom);
             dispNews(autom);
             autoBtn.classList.add("highlighted");
         });
        async function loadNewsByCategory(){
            const response = await fetch("https://content.newtonschool.co/v1/pr/64e3d1b73321338e9f18e1a1/inshortsnews");
             const news = await response.json();          
             return news;
            }
            const all = document.getElementById("all");
            all.addEventListener("click", async ()=>{
              var buttons = document.getElementsByTagName('button');
              for (var i = 0; i < buttons.length; i++) {
                  buttons[i].classList.remove('highlighted');
              }
             
            const response = await fetch("https://content.newtonschool.co/v1/pr/64e3d1b73321338e9f18e1a1/inshortsnews");
            const news = await response.json();   
            // console.log(news);
            dispNews(news);
            all.classList.add("highlighted");
            
        }); 
       
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
        listItem.innerHTML=`<span id=
        "author">BY ${element.author}</span>
                            <span id="cat">CATEGORY ${element.category}</span>                            
                            <p>${element.content}<a href = ${element.url}>READ MORE.</a></p>
                            <button id="favBtn" class="${element.isLiked ? 'liked' : ''}">&#10084</button>`;
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
                          element.isLiked = !element.isLiked;
                              localStorage.setItem("favNews",JSON.stringify(savedNews));
                               fav.classList.toggle("liked", element.isLiked);
                            })
                            // console.log(fav);                             
                           list.appendChild(listItem);
                          
    });    
}  
   
    function getNewsFromLocal(){
      let savedNews =[];
            savedNews = JSON.parse(localStorage.getItem("favNews")) || [];
            return savedNews;
            console.log(savedNews);
        }

document.querySelector("#news").addEventListener("click",()=>{
    const saved = getNewsFromLocal();
    dispNews(saved);
});
        
const accessKey=`rsvyfCb1YlvyMw7OZ5tbI1arI_qNzDReP_ZR4IVQygg`;
const searchForm=document.querySelector("#SearchForm");
const searchBox=document.querySelector("#searchBox");
const searchButton=document.querySelector("#search-btn");
const showMoreButton=document.querySelector("#show-more-btn");
const serachResult=document.querySelector("#serach-result");

let keyword="";
let page=1;

async function searchImage(){
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}
    &client_id=${accessKey}&per_page=12`;

    const respone=await fetch(url);
    const data = await respone.json();
   console.log(data);
    const results=data.results;
    if(page===1){
        serachResult.innerHTML="";
    }
    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;imageLink.target="_blank";

        imageLink.appendChild(image);
        serachResult.appendChild(imageLink);

    })

    
}

searchForm.addEventListener('click',(e)=>{
    e.preventDefault();
    page=1;
   searchImage();
    
})
showMoreButton.addEventListener("click",(e)=>{
   e.preventDefault();
   page++;
   searchImage();
})

searchButton.addEventListener("click",()=>{
 setTimeout(()=>{
    showMoreButton.style.display="block";
 },1000)

})
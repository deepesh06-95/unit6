let root=document.getElementById("root");
let c=1;
  async function getData() {
let data = await fetch(
  `https://api.imgur.com/3/gallery/search/viral/month/1?q=top&q_type=jpg`,
  {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: "Client-ID f5d5540a793c788",
    },
  }
)
  .then((res) => res.json())
  .then((data) => showData(data.data));
}
getData();
function showData(maindata)
{
maindata.forEach((e)=>{
  let div=document.createElement("div");
  let img=document.createElement("img");
  let p1=document.createElement("p");
  img.src=e.images[0].link;
  console.log(e);
  p1.textContent=e.title;
  img.style.width="300px";
  img.style.borderRadius="5px";
  p1.setAttribute("class","ptag");
  div.setAttribute("class","divine");
  div.append(img,p1);
  root.append(div);
})
}
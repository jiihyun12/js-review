// <!-- 
// https://picsum.photos/v2/list
// fetch로 요청을 보내서 wrqpper 안에 ing 태그로 이미지로 출력한다.
// download_url의 이미지를 사용한다.
// 단 이미지느 10개만 불러온다, 2행 5열로 배치한다.
// 이미지의 크기는 width 200px, height는 200px로 한다.
// -->

const wrap = document.getElementById("wrapper");

  const getImages = async() => {
    const response = await fetch("https://picsum.photos/v2/list/")
    const datas = await response.json()
    return datas;
  };

  getImages()
  .then((datas)=>datas.map((datas)=>datas.download_url))
  .then((urls)=>urls.slice(0,10))
  .then((url)=>url.forEach((resultUrl)=>
    wrap.innerHTML += `<img src = ${resultUrl} style = width:200px>`
  ))
  .then(console.log)
  .catch(console.error)



  // 강사님 풀이
//   const wrapper = document.querySelector("#wrapper")

// const getImages = async () => {
//   const response = await fetch("https://picsum.photos/v2/list");
//   const datas = await response.json()
//   const images = await datas.map((data) => data.download_url).slice(0, 10)
//   return images
// }

// getImages()
//   .then((images) => {
//     images.forEach((image, i) => {
//       // const img = document.createElement("img")
//       // img.src = image;
//       // img.className = "img";
//       // wrapper.appendChild(img)
//       wrapper.innerHTML += `<img src=${image} class="img" alt="image${i}" />`
//     })
//   })


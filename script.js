//AGGIUNTA API ASSETS
let pictureCont = document.getElementById("api-cont");

axios.get('https://lanciweb.github.io/demo/api/pictures/').then((resp) =>{
    console.log(resp.data);
    const foto = resp.data;
    for (let i = 0; i < foto.length; i++) {
         let fotoCard = 
                 `<div class="col-12 col-lg-4 col-md-6 col-sm-12">  
                   <div class="card mt-5"> 
                        <div class="card-body"> 
                            <img src="${foto[i].url}" alt="" class="img-fluid"> 
                            <h5 class="card-title">${foto[i].title}</h5> 
                            <p class="card-text">${foto[i].date}</p> 
                            <img src="./img/pin.svg" alt="" id="pin"> 
                         </div>
                      </div>
                   </div>`;
    pictureCont.innerHTML += fotoCard;
    }
});



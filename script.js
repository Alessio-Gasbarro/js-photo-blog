let boxCont = document.getElementById("api-cont");
let overlay = document.getElementById("overlay");
let overlayButton = document.getElementById("overlay-button");
let overlayFoto = document.getElementById("img-overlay");

//MAKE IT DISAPPEAR
if (overlay) {
    overlay.style.display = "none";
}
//TEST CHIAMATA AJAX E INFO-GET
axios.get('https://lanciweb.github.io/demo/api/pictures/').then((resp) => { 
    //FOTO CONST & STAMP IN HTML
    const foto = resp.data;
    for (let i = 0; i < foto.length; i++) {
        let fotoCard = 
                `<div class="col-12 col-lg-4 col-md-6 col-sm-12">  
                  <div class="card mt-5"> 
                       <div class="card-body"> 
                           <img src="${foto[i].url}" alt="" class="img-fluid card-img" data-url="${foto[i].url}"> 
                           <h5 class="card-title">${foto[i].title}</h5> 
                           <p class="card-text">${foto[i].date}</p> 
                           <img src="./img/pin.svg" alt="" class="pin"> 
                        </div>
                     </div>
                  </div>`;
        boxCont.innerHTML += fotoCard;
    }

    //EVENT LISTENER JS TO CARD/ IMG&DATA AT CLICK
    const cardImages = document.querySelectorAll('.card-img');
    cardImages.forEach(img => {
        img.addEventListener('click', function() {
            if (overlayFoto) {
                overlayFoto.src = this.getAttribute('data-url');
            }
            
            if (overlay) {
                overlay.style.display = "block";
            }
        });
    });

    //PULSANTE CHIUSURA OVERLAY
    if (overlayButton) {
        overlayButton.addEventListener('click', function() {
            overlay.style.display = "none";
        });
    }
});
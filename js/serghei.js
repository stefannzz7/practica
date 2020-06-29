var commentform = document.getElementById('commentForm');

function showDiv() {
  commentform.style.display = "block";
}

function closeDiv() {
  commentform.style.display = "none";
}

function showOrHide() {
  if (commentform.style.display === "block") {
    closeDiv()
  } else {
    showDiv()
  }
}
comentarii = [
    {name:'Ștefan-Robert Netu',comment:'În calitate de profesor de UI/UX la webdemy am ajutat peste 1000 de studenți.'},
    {name:'Serghei Cunev',comment:'Serviciile noastre au ajutat foarte mulți tineri să-și găsească un path nou în carieră'},
    {name:'Alexandru Zaporojan',comment:'Sunt entuziasmat că pot aduce studenții mai aproape de piața de muncă'},
    {name:'Ion Dodon',comment:'webdemy m-a ajutat să înțeleg ce nu am înțeles la cursurile de la facultate'},
    {name:'Igor Chicu',comment:'Simplu,scurt,clar,cuprinzător.Vă Mulțumesc.'}
]
comentarii.forEach(e => {
    addComment(e.name,e.comment)
})

$('.owl-carousel').trigger('refresh.owl.carousel');


function addComment(name,comentariu) { 
name == undefined ? name = document.querySelector("#commentForm > form > input").value :0

comentariu==undefined ? comentariu=document.querySelector("#commentForm > form > div.form-field > textarea").value:0

comentarii.push({name:name,comment:comentariu});

 $('.owl-carousel').owlCarousel('add',  `
 <div class="single-slide">
 <div class="content">
     <p>${comentariu}</p>
     <h4>${name}</h4>
 </div>
</div>
 `).owlCarousel('update');

 $('.owl-carousel').trigger('refresh.owl.carousel');
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function checkCustom () { 
  console.log("Ah i see you're a man of culture as well")
  document.querySelector("#customBox").style.display ="block"
}
function hideCustom() { 
  document.querySelector("#customBox").style.display ="none"
}
//Blog

postari = [
  {
    autor:'Ștefan-Robert Netu',
    lun:'dec',
    poza:'images/blog1.png',
    titlu:'Ce este nou în Angular 10?',
    postarea:`Angular 10, o actualizare majoră la cadrul popular de dezvoltare web, este mai mic decât versiunile anterioare de Angular. Noile funcții includ un nou selector de intervale de date în biblioteca de componente UI Material Angular și avertismente pentru importurile CommonJS. Avertizările de import CommonJS alertează dezvoltatorii atunci când o dependență ambalată cu CommonJS ar putea duce la aplicații mai mari și mai lente, permițând dezvoltatorilor să înlocuiască un pachet de moduleECMAScript'.
  În plus, setările opționale mai stricte oferă o configurare mai strictă a proiectului atunci când se creează un spațiu de lucru nou cu ng new, via ng new - strict. Activarea acestui steag inițializează un nou proiect cu noi setări pentru a îmbunătăți mentenabilitatea, pentru a ajuta la prinderea erorilor și permite CLI să facă optimizări avansate pentru o aplicație.
  `},
    {
      autor:'Zaporojan Alexandru',
      poza:'images/blog2.png',
      lun:'mar',
      titlu:'Bootstrap 5.0 alpha ajunge, fără jQuery',
      postarea:`Versiunea 5.0 a cadrului Bootstrap pentru construirea de site-uri web prim-mobile s-a mutat într-o etapă de lansare alfa, trusa de instrumente nu mai depinde de biblioteca JavaScript jQuery.
      Eliminarea dependenței de jQuery a fost activată prin avansări în instrumentele de dezvoltare front-end și în suportul browserului. Drept urmare, proiectele construite pe Bootstrap 5 vor fi semnificativ mai ușoare cu privire la dimensiunile fișierelor și la încărcarea paginilor.
      `},
    {
        autor:'Cunev Serghei',
        poza:'images/blog3.png',
        lun:'ian',
        titlu:'Specificația ECMAScript 2020 pentru aprobarea JavaScript',
        postarea:`ECMAScript 2020, versiunea târzie a specificației oficiale care stă la baza JavaScript, a fost aprobată oficial de către ECMA International, iar comitetul tehnic ECMA supraveghează specificația, pe 16 iunie.

        ECMAScript 2020 introduce mai multe caracteristici, de la o nouă facilitate de import () pentru încărcarea modulelor la un nou tip BigInt pentru lucrul cu numere întregi de precizie arbitrare.
        `},
        {
          autor:'Ștefan-Robert Netu',
          poza:'images/blog4.png',
          lun:'feb',
          titlu:'Cadrul JavaScript care pune paginile web pe o dietă',
          postarea:`Site-urile web sunt prea mari.
          Cadrul JavaScript și nou-venit Svelte, creat de jurnalistul vizual și dezvoltatorul de software Rich Harris, își propune să faciliteze scrierea mai rapidă a site-urilor și a aplicațiilor interactive mai mici. Dezvoltatorul web Shawn Wang spune că a redus dimensiunea site-ului său personal de la 187 kilobytes la 9 kilobytes, trecând de la React la Svelte.`},
]

let blogPosts = document.querySelector('#blogitems');
function getPosts(posts) {
posts.forEach(e=> { 
  blogPosts.innerHTML+=`    
  <div class="col-md-7">                
  <div class="blog-item">
  <a href="#"><img class="img-responsive img-blog" src="${e.poza}" width="100%" alt="" /></a>
  <div class="blog-content">
      <a href="#" class="blog_cat">${e.autor}</a>
      <h2>${e.titlu}</h2>
      <h3>${e.postarea}</h3>
  </div>
  </div>
  </div>
  `
})}

getPosts(postari);

//searchbar
const searchBar = document.getElementById("searchBar")

searchBar.addEventListener("keyup", e => {
  searchString =e.target.value;

  let getNewList = async() => {return filteredList = postari.filter(e=> {
    return e.postarea.includes(searchString);
  })}

  let clearList=async()=>{$('#blogitems').empty()}

  getNewList().then(clearList().then(getPosts(filteredList)))

});

let decnum =  postari.filter(e=> {
  return e.lun.includes('dec');
}).length
document.getElementById("decnum").innerHTML='('+decnum+')';
let iannum =  postari.filter(e=> {
  return e.lun.includes('ian');
}).length
document.getElementById("iannum").innerHTML='('+iannum+')';
let febnum =  postari.filter(e=> {
  return e.lun.includes('feb');
}).length
document.getElementById("febnum").innerHTML='('+febnum+')';
let marnum =  postari.filter(e=> {
  return e.lun.includes('mar');
}).length
document.getElementById("marnum").innerHTML='('+marnum+')';

function filterMonth (month) { 

  let getNewList = async() => {return filteredList = postari.filter(e=> {
    return e.lun.includes(month);
  })}

  let clearList=async()=>{$('#blogitems').empty()}

  getNewList().then(clearList().then(getPosts(filteredList)))

}






// STEFAN

$(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
  });

  ///












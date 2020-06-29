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
          autor:'Zaporojan Alexandru',
          poza:'images/blog4.png',
          lun:'feb',
          titlu:'Cadrul JavaScript care pune paginile web pe o dietă',
          postarea:`Site-urile web sunt prea mari.
          Cadrul JavaScript și nou-venit Svelte, creat de jurnalistul vizual și dezvoltatorul de software Rich Harris, își propune să faciliteze scrierea mai rapidă a site-urilor și a aplicațiilor interactive mai mici. Dezvoltatorul web Shawn Wang spune că a redus dimensiunea site-ului său personal de la 187 kilobytes la 9 kilobytes, trecând de la React la Svelte.`},
          {
            autor:'Zaporojan Alexandru',
            poza:'images/blog5.png',
            lun:'feb',
            titlu:'Icoane de bootstrap Alpha 5',
            postarea:`Astăzi sa introdus ultima versiune alfa de Icoane Bootstrap, După lansarea alfa de astăzi, se va trece la atingerile finale ale pictogramelor existente, se va închide alte cereri și sa efectua lucrurile pentru o versiune stabilă v1.
            1.000+ pictograme
            Această versiune adaugă aproape 300 de noi glife, luându-ne chiar peste 1.000 de icoane. Sa completat toate pictogramele din calendar pentru a adăuga game și evenimente, a aparut o suită de icoane noi pentru telefon, tone de dispozitive noi și pictograme hardware, zeci de ecusoane și multe altele.
            `},
            {
              autor:'Zaporojan Alexandru',
              poza:'images/blog6.png',
              lun:'dec',
              titlu:'Versiunea 10 din Angular Acum Disponibil',
              postarea:`Versiunea 10.0.0 este aici! Aceasta este o versiune majoră care acoperă întreaga platformă, inclusiv cadrul, materialul unghiular și CLI. Această versiune este mai mică decât cea tipică; au trecut doar 4 luni de când am lansat versiunea 9.0 de Angular.
              Se incearca lansarea versiuni majore 2, în fiecare an pentru a menține unghiul sincronizat cu restul ecosistemului JavaScript și pentru a avea un program previzibil. Planificarea lansarii versiunii 11 în această toamnă.
              `},
              {
                autor:'Zaporojan Alexandru',
                poza:'images/blog7.png',
                lun:'mar',
                titlu:'Google va crea un site Coronavirus, Google și Casa Albă colaborează acum, dar încă nu descriu același site web.',
                postarea:`Când președintele TRUMP a anunțat vineri că Google dezvolta un site web pentru americani pentru a afla unde pot fi testate pentru noul coronavirus, detaliile proiectului au rămas neclare. Nu a existat nicio pagină de destinație, niciun comunicat de presă de la Google și niciun anunț din partea directorilor gigantului tehnic.

                Administrația a promis că vor veni mai multe în weekend. Între timp, site-urile de știri au raportat site-ul în cauză cu un domeniu de aplicare mult mai limitat și a fost dezvoltat nu de Google, ci de o altă filială a alfabetului numită Verily. După cum a informat WIRED pentru prima dată, Google nu a știut că va fi menționată deloc de președinte. De atunci, însă, compania a spus că va lansa luni un site web de coronavirus, dar nu unul ca ceea ce a descris președintele.
                `},
                {
                  autor:'Cunev Serghei',
                  poza:'images/blog8.png',
                  lun:'mar',
                  titlu:'DuckDuckGo va cripta automat mai multe site-uri pe care le vizitați.',
                  postarea:`Dacă un site oferă HTTPS, Criptarea inteligentă a DuckDuckGo vă va duce acolo.
                  Este extrem de comun ca datele care trec între browserul dvs. și serverul unui site web să fie criptate cu HTTPS, ceea ce face imposibilă citirea snoops-ului extern. Dar nu primiți această protecție dacă adresa URL scade acel „S” crucial după HTTP. Și în timp ce unele mecanisme te redirecționează către o versiune criptată a unui site, acestea o fac adesea numai după expunerea acestei solicitări inițiale. Producătorii motorului de căutare axat pe confidențialitate DuckDuckGo cred că există o modalitate mai bună.
                  Astăzi, DuckDuckGo lansează o caracteristică numită Smarter Encryption care combină capacitățile sale de căutare privată existente și serviciul de blocare a tracker-ului cu un nou instrument pentru a actualiza criptarea pentru mai multe site-uri pe care le vizitați. Este disponibil pe browserul mobil DuckDuckGo pentru Android și iOS și prin extensia browser-ului companiei desktop pentru Firefox și Chrome. DuckDuckGo este, de asemenea, aprovizionarea deschisă a codului din spatele funcției, astfel încât alte site-uri și platforme să îl poată adopta. Mai întâi? Pinterest.
                  `},
                  {
                    autor:'Ștefan-Robert Netu',
                    poza:'images/blog9.png',
                    lun:'ian',
                    titlu:'W3C Aruncă eticheta „hgroup” de la HTML5 Spec',
                    postarea:`DACĂ AȚI UTILIZAT Eticheta hgroup HTML5, acum ar fi un moment bun pentru a vă opri. Eticheta hgroup este în proces de a fi eliminată din specificația HTML5 a W3C.

                    În timp ce motivul oficial pentru dispariția hgroup este lipsa de sprijin pentru semantica hgroup - W3C necesită două „implementări rezonabile complete” - hgroup este plin de probleme de accesibilitate și îi lipsește multe cazuri de utilizare convingătoare.
                    
                    Eticheta hgroup a fost destinată să fie o modalitate de a grupa etichetele h1-h6, de exemplu un antet și o subpoziție, dar semantica din spatele etichetei înseamnă că numai primul antet dintr-un hgroup este vizibil pentru orice API de accesibilitate. După cum Steve Faulkner, co-editor al specimenului HTML5, scrie pe lista de distribuție W3C, aceasta „înlătură efectiv orice noțiune a unei subpoziții semantice pentru utilizatori și orice fel de transmitere a acesteia printr-o API de accesibilitate."
                    `}
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












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

// STEFAN

$(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
  });

  ///












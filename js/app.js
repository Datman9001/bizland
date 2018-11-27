// Mobile init
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelector('.sidenav');
    var elems2 = document.querySelectorAll('.scrollspy')
    var instances = M.Sidenav.init(elems, {
        edge: 'left'
    });
   
    var instances2 =  M.ScrollSpy.init(elems, {

    })

    
  });


  //change nav background
  window.onscroll = () => {
     const addColor = document.querySelector('.nav-wrapper'); 
     const scrollPosY = window.pageYOffset;
      if(scrollPosY > 75){
          addColor.classList.add('blue-grey'   );
       }
       if(scrollPosY < 75){
           addColor.classList.remove('blue-grey'  );
       }
}

//Google Map

const position= [42.3611145, -71.057083];
const centerPosition = [42.377815, -70.981133]

function showGoogleMaps(){
    map = new google.maps.Map(document.getElementById('maps'), {
        zoom: 16,
        center: new google.maps.LatLng(-33.91722, 151.23064),
        mapTypeId: 'roadmap'
      });

}
 

 
   
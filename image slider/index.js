(function(){
 var imagelist = document.querySelector("#imagelist");
    var child = document.querySelector("#imagelist li");
    var listchild = document.querySelectorAll("#imagelist li");
    //var img = document.querySelector(".img");
    var left = document.querySelector("#left");
    var right = document.querySelector("#right");

    var childwidth = child.getBoundingClientRect().width;
    var numchild = listchild.length;

    imagelist.style.width= numchild * childwidth + 'px';

 var lt;
    var move=0;
    var i = 0;
    
    
function moveleft() {
        lt = imagelist.style.left;


        if (move <(numchild-1)) {

              if (lt === '') {
        
            imagelist.style.left = -childwidth + 'px';
        }    
            else {
                imagelist.style.left = parseInt(lt, 10) - childwidth + 'px';
            }
            move++;
        }
        else {

            alert("no images left please slide it to right");
           
        }
    
    }

function moveright() {
        lt = imagelist.style.left;
        if (move > 0) {
            if (lt === '') {
                imagelist.style.left = childwidth + 'px';
            }
            else {
                imagelist.style.left = parseInt(lt, 10) + childwidth + 'px';
            }
            move--;
        }
        else {
        alert("no images left please swipe left");
}
      
    }
//     function wheelhandler(e)
//     {
//     debugger;
//     if(e.deltaY<0)
//     {
//     e.currentTarget.style.height= e.currentTarget.style.height +500 +'px' ;
//      e.currentTarget.style.width= e.currentTarget.style.width+500 +'px' ;
// }
    // }


     left.addEventListener('click', moveleft);
    right.addEventListener('click', moveright);
    //img.addEventListener('wheel', wheelhandler);
})()
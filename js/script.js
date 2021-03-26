
/*EX 1*/
$(document).ready(function(){

    $(".btn-ex1").click(function(){
        $(this).addClass("is-active")  
    })

/*EX 2*/
    $("button.btn-ex2").click(function(){
        $(this).removeClass("is-active")  
    })


/*EX 3*/
    $("button.btn-ex3").click(function(){
        $(this).toggleClass("is-active")    
    })

/*EX 4*/
    $("button.btn-ex4").click(function(){
        $(this).css("text-transform", "uppercase")    
    })

/*EX 5*/
$("button.btn-ex5").click(function(){
  alert(  $(this).css("font-size") )   
})

/*EX 6*/
$("button.btn-ex6-1").click(function(){
 $("span.box1").fadeOut("600ms")   
  })

$("button.btn-ex6-2").click(function(){
    $("span.box2").fadeIn("600ms")   
     })

     $("button.btn-ex6-3").click(function(){
        $("span.box3").fadeOut("600ms")   
         })

/*EX 7*/
$("button.btn-ex7-1").click(function(){
    $(this).next().fadeOut() 
     })

     $("button.btn-ex7-2").click(function(){
        $(this).next().fadeIn()   
         })

         $("button.btn-ex7-3").click(function(){
            $(this).next().fadeOut()   
             })

//EX 8
$("button.btn-ex8-1, .btn-ex8-2, .btn-ex8-3, .btn-ex8-4").click(function(){
    $(this).siblings().removeClass("is-active")
    $(this).addClass("is-active")
     })

//EX 9
$(".mother-box").click(function(){
    $(this).children().addClass("is-active") 
     })

//EX 10
$(".btn-ex9-1, .btn-ex9-2 , .btn-ex9-3 ").click(function() {
    $(this).toggleClass("is-active");
    $(this).next().toggleClass('is-active');
    $(this).parent().siblings().children().removeClass("is-active")
})

//EX 11
$("button.btn-ex10-1").click(function(){
   alert($(this).text())
  })

$("button.btn-ex10-2").click(function(){
    var test=$("input").val()
    $("h5").html("Bonjour" + test)
  })

















}) /*END DOCUMENT READY*/


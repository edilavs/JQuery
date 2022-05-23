$(document).ready(function () {
    $('button').click(function () {
        $('p').hide();
    })
    $("#btn2").click(function(){{
        $("h1").hide();
    }})
    $(".spn-1").mouseenter(function(){
        alert("hello,span");
      });
      $(".spn-1").mouseleave(function(){
        alert("bye,span");
      });
$("#btn-show").hover(function(){
    $("p").show();
})

      $(".text-danger").mousedown(function(){
          var name=prompt("name:")
        console.log(name)
      });
    //   $(".img-1").hover(function(){
    //     alert("Baliiii says ~Hello~ to you!");
    //   });

     
    $("btn-toggle").click(function(){
        $("p").toggle();
      });

      $("#btn-1").click(function(){
        console.log($("#test").text());
      });
      $("#btn-2").click(function(){
        console.log($("#test").html());
      });
     $(".div1").click(function(){
        // $("#div1").remove();
     })


     $("#btn-1").click(function(){
        $("p").prepend("<b>Prepended text</b>.");
      });


      $("#text-danger").click(function(){
      $("p").css("background-color", "red")
    });
      

      $("h1").click(function(){
        var txt = "";
        txt += "Width: " + $("#div1").width() + "</br>";
        txt += "Height: " + $("#div1").height();
        $("#div1").html(txt);
      });
})




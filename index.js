$(document).ready(function () 
{
    $(".instruction2").hide();
    $(".instruction3").hide();
    //green=1; blue=2; red=3; yellow=4;
    $(document).on("keypress", function (event) 
    {           
        if (event.key == "Enter")
         {
            $("h2").hide();
            $(".instruction1").slideUp();
            $(".instruction3").hide();
            $(".instruction2").show();
            var a = new Array(4);
            for (var i = 0; i < 4; i++) 
            {
                a[i] = Math.floor(Math.random() * 4 + 1);
                switch (a[i]) {
                    case 1:
                        setTimeout(function () { $(".green").fadeOut().fadeIn(); }, 1500 * (i+1));
                        break;
                    case 2:

                        setTimeout(function () { $(".blue").fadeOut().fadeIn(); }, 1500 * (i+1));
                        break;
                    case 3:

                        setTimeout(function () { $(".red").fadeOut().fadeIn(); }, 1500 * (i+1));
                        break;
                    case 4:

                        setTimeout(function () { $(".yellow").fadeOut().fadeIn(); }, 1500 * (i+1));
                        break;

                }
            }
            setTimeout(function(){
                $(".instruction2").slideUp();
                $(".instruction1").hide();
                $(".instruction3").show();
            },1500*5);
           
            var count=0;
            var pressed="";
            var required=String(a[0])+String(a[1])+String(a[2])+String(a[3]);
         //   $(".top-container").before("<h1>" + a[0] + a[1] + a[2] + a[3] + "</h1>");
           // $(".top-container").before("<h2>Click the buttons in the shown pattern</h1>")
            $(".green").on("click",function(){
                $(".green").hide().fadeIn();
                pressed=pressed+String(1);
                count++;
                if(count==4)
                showresults(required,pressed);
            });
            $(".blue").on("click",function(){
                $(".blue").hide().fadeIn();
                pressed=pressed+String(2);
                count++;
                if(count==4)
                showresults(required,pressed);
            });
            $(".red").on("click",function(){
                $(".red").hide().fadeIn();
                pressed=pressed+String(3);
                count++;
                if(count==4)
                showresults(required,pressed);
            });
            $(".yellow").on("click",function(){
                $(".yellow").hide().fadeIn();
                pressed=pressed+String(4);
                count++;
                if(count==4)
                showresults(required,pressed);
            });

        }
    });
    var showresults=(req,pres)=>
    {
        if(req==pres)
        {
            $(".instruction1").hide();
            $(".instruction2").hide();
            $(".instruction3").hide();
            $(".top-container").before("<h2>You won</h2>");
            $(".top-container").before("<h2>Press Enter to restart the game</h2>");
        }
        else
        {
            $(".instruction1").hide();
            $(".instruction2").hide();
            $(".instruction3").hide();
            $(".top-container").before("<h2>You lost</h2>");
            $(".top-container").before("<h2>Press Enter to restart the game</h2>");
        }
        $("div").unbind();
    }

});

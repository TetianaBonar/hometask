$(document).ready (function() {

    var html = $('#info').html();
    var lighthouse = [
      {
        title: 'What is a lighthouse?',
        content: "It is a tower with a bright light at the top, located at an important or dangerous palce regarding navigation(travel over water)."

    },{
        title: "What is the purpose of a lighthouse?",
        content: "The two main purposes of a lighthouse are to serve as a navigational aid and to warn boats of dangerous areas. It is like a traffic sign on the sea."
      }, {
        title: "Do all lighthouses look alike?",
        content: "Although we often think of a lighthouse as a tall, white conical tower, there are many, many variations of design. Depending on its location, it might be tall (where the land was very flat) or short and squat (where there was a high cliff or rocky coast). It could be square, octagonal (with eight sides), conical (like an ice cream cone upside down), or cylindrical (like a very fat pipe)."
      }
   ];
    var content = tmpl(html, {
      data: lighthouse
    });

    $('.template').append(content);


});

;$(document).ready (function (){
   var leftUIEl = $('.carousel-arrow-left');
   var rightUIEl = $('.carousel-arrow-right');
   var elementsList = $('.carousel-list');

   var pixelOffset = 375;
   var currentLeftValue = 0;
   var elementsCount = elementsList.find('li').length;
   var minimumOffset = - ((elementsCount -3) * pixelOffset);
   var maximumOffset = 0;

   leftUIEl.click(function (){
     if (currentLeftValue != maximumOffset) {
         currentLeftValue +=375;
     elementsList.animate({left:currentLeftValue + "px"}, 500);
     }
   });

   rightUIEl.click(function (){
      if(currentLeftValue != minimumOffset) {
     currentLeftValue -=375;
     elementsList.animate({left:currentLeftValue + "px"}, 500);
     }
   });

});
;// see:
// http://ejohn.org/blog/javascript-micro-templating/

// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
    var cache = {};

    this.tmpl = function tmpl(str, data){
        // Figure out if we're getting a template, or if we need to
        // load the template - and be sure to cache the result.
        var fn = !/\W/.test(str) ?
            cache[str] = cache[str] ||
                tmpl(document.getElementById(str).innerHTML) :

            // Generate a reusable function that will serve as a template
            // generator (and which will be cached).
            new Function("obj",
                "var p=[],print=function(){p.push.apply(p,arguments);};" +

                    // Introduce the data as local variables using with(){}
                "with(obj){p.push('" +

                    // Convert the template into pure JavaScript
                str
                    .replace(/[\r\t\n]/g, " ")
                    .split("<%").join("\t")
                    .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                    .replace(/\t=(.*?)%>/g, "',$1,'")
                    .split("\t").join("');")
                    .split("%>").join("p.push('")
                    .split("\r").join("\\'")
                + "');}return p.join('');");

        // Provide some basic currying to the user
        return data ? fn( data ) : fn;
    };
})();

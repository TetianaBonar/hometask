$(document).ready (function (){
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

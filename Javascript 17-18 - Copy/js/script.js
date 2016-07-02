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

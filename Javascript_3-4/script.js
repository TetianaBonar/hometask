var test = {
 createElement: function(params) {
  console.log('params', params);
  var element = document.createElement(params.tagName);

   if(params.inputType) {
     element.setAttribute('type', params.inputType);
   }

   if(params.className) {
     element.className = params.className;
   }

   if(params.content) {
     element.innerHTML = params.content;
   }

   if(params.parentElement) {
     params.parentElement.appendChild(element);
   }

   return element;
 },

 generateQuestions: function(questionsAmount, answersAmount) {

  for (var i = 0; i < questionsAmount; i++) {

    this.createElement ({
      tagName:"h2",
      content: "Question #" + (i + 1),
      parentElement: form
    });

    for (var j = 0; j < answersAmount; j++) {
      var label = this.createElement ({
        tagName: 'label',
        content: 'Answer #' + (j + 1),
        parentElement: form
      });

       var checkbox = this.createElement ({
         tagName: 'input',
         inputType: 'checkbox'
    });

    label.insertAdjacentElement('afterBegin', checkbox);
    }
  };
 }
}


var body = document.getElementsByTagName("body")[0];

var wrapper = document.createElement('div');
wrapper.className = "wrapper";
body.appendChild(wrapper);

test.createElement({
  tagName: 'h1',
  content: 'Programming test',
  parentElement: wrapper
});


var form = test.createElement ({
  tagName: 'form',
  parentElement: wrapper
});

test.generateQuestions(3, 3);

test.createElement ({
  tagName: 'input',
  className: 'check',
  inputType: 'submit',
  content: 'Check the answers',
  parentElement: form
});



// var submit = document.createElement('button');
// var text = document.createTextNode('Check my results');
// submit.appendChild(text);
// wrapper.appendChild(submit);

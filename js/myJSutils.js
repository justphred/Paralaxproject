// https://www.sitepoint.com/add-remove-css-class-vanilla-js/

// Add a class to a DOM element or collection of selected elements
// Parameter elements can either be an array of DOM elements or a selector
// to be used to grab a collection of elements from the DOM
function addClass (elements, aClass) {
  if (!elements) {return;}

  // If a selector was passed in, it will have the type 'string'
  if (typeof(elements) === 'string') {
    elements = document.querySelectorAll(elements);
  }
  // If a single DOM element was passed in, let's convert it to an array
  // for consistent processing below
  else if (elements.tagName) {element=[elements]; }

  for (var k = 0; k < elements.length; k++) {
    // If the class name passed in is not already associated with
    // the element, add it in.
    if ( (' '+elements[k].className+' ').indexOf(' '+aClass+' ') < 0 ) {
      elements[k].className += ' ' + aClass;
    }
  }
}

function removeClass (elements, aClass) {
  // If there were actually no elements in the elemants parameter, bail out here.
  if(!elements) { return;}

  // If a selector was passed in, it will have the type 'string'
  if (typeof(elements) === 'string') {
    elements = document.querySelectorAll(elements);
  }
  // If a single DOM element was passed in, let's convert it to an array
  // for consistent processing below
  else if (elements.tagName) {element=[elements]; }

  // We'll use a regular expression pattern to look for the specified class
  var pattern = new RegExp('(^| )'+aClass+'($| )', 'g');

  // Remove the class from the specified elements
  for(var k= 0; k <elements.length; k++) {
    elements[k].className = elements[k].className.replace(pattern, ' ');
  }
}

function toggleClass (elements, aClass) {

  if(!elements) {return};

  // When we need to remvoe the class from an element, we'll use a regular
  // expression pattern to look for the class in the element's className property
  var pattern = new RegExp('(^| )'+aClass+'($| )', 'g');

  if(typeof(elements) === 'string') {
    elements = document.querySelectorAll(elements);
  }
  // Otherwise, if a single DOM element was passed in, make it into an array.
  else if(elements.tagName) {elements=[elements];}

  for (var k = 0; k < elements.length; k++) {
    // If the class name passed in is not already associated with
    // the element, add it in.
    if ( (' '+elements[k].className+' ').indexOf(' '+aClass+' ') < 0 ) {
      elements[k].className += ' ' + aClass;
    }
    // Otherwiese, remove it (the class).
    else
    {
      // Replace the target class name with a space.
      elements[k].className = elements[k].className.replace(pattern, ' ');
    }
  }
}// End function toggleClass (elements, aClass)

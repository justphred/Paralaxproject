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
    if ( (' '+elements[i].className+' ').indexOf(' '+aClass+' ') < 0 ) {
      elements[i].className += ' ' + aClass;
    }
  }
}

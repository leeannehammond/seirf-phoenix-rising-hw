// test if linked up
// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};

//////////// Year 1 /////////////////////////////////////

// create a div id called container
$(() => {
	$('#container')
});
console.log($('#container'))

// create an h1 element
jQuery.extend({
    createElement : function(h1) {
    return jQuery(document.createElement(h1));
    }
    });
jQuery.createElement("h1").text("Hogwarts").appendTo("body");

/////////////////// Year 2 //////////////////////////////////////

// h2 element
jQuery.extend({
    createElement : function(h2) {
    return jQuery(document.createElement(h2));
    }
    });
jQuery.createElement("h2").text("Leeanne Hammond").appendTo("body");

// h3 element
jQuery.extend({
    createElement : function(h3) {
    return jQuery(document.createElement(h3));
    }
    });
jQuery.createElement("h3").text("Gryffindor").appendTo("body");

// h4 element
    
$(() => {
    const addH2 = () => {
      $h2 = $('<h4>').text("Cat");
      $('body').append($h4);
    }
  
    addH4();
  });


jQuery.createElement("h4").addClass("cat").appendTo("body");
// not sure how to add name to the class!!!
// const $h4 = $('<h4>').text('Sebastian') ??

// add wand to h4
jQuery.extend({
    createElement : function(h4) {
    return jQuery(document.createElement(h4));
    }
    });
jQuery.createElement("h4").text("Birch Wand with Phoenix Feather Core").appendTo("body");

////////////////////////// Year 3 ////////////////////////////////////////
// var ul = document.getElementById("list");
// var li = document.createElement("li");

// $(li).addClass("list-group-item d-flex justify-content-between align-items-center");
// $(li).append(document.createTextNode(todoTitle));
// $(li).append(($('<i class="fa fa-trash-o" aria-hidden="true"></i>')));

// unsure of how to create unordered list with jquery



///////////////////////// Year 4 //////////////////////////////////////////////
// create new heading
jQuery.extend({
    createElement : function(h5) {
    return jQuery(document.createElement(h5));
    }
    });
jQuery.createElement("h5").text("Spring 2017").appendTo("body");

/// Make table

function makeTable(container, data) {
    var table = $("<table/>").addClass('CSSTableGenerator');
    $.each(data, function(rowIndex, r) {
        var row = $("<tr/>");
        $.each(r, function(colIndex, c) { 
            row.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").text(c));
        });
        table.append(row);
    });
    return container.append(table);
}

$(document).ready(function() {
    var data = [["Monday", "Tuesday","Wednesday", "Thursday", "Friday"], //headers
                ["Herbology","Potions", "Divination", "Transfiguration", 
                "Quidditch practice"]]
    var schedTable = makeTable($(document.body), data);
});


function appendTableColumn(table, rowData) {
    var lastRow = $('<tr/>').appendTo(table.find('tbody:last'));
    $.each(rowData, function(colIndex, c) { 
        lastRow.append($('<td/>').text(c));
    });
     

  }
   
  $(document).ready(function() {
      var table = makeTable(data);
      appendTableColumn(table, ["Herbology", "Divination", "History of Magic",
    "Charms", "Potions", "Transfiguration", "Defense Against the Dark Arts", "Quidditch practice"]);
    

});


////////////////////////// Year 5 //////////////////////////////////////////////
// break your wand(remove)
$('h4').remove()

// drink butter beer(remove)
$('ul').remove('butter beer')
// get a new wand ( add element back w/ new text, insert after pet in DOM)
jQuery.extend({
    createElement : function(h4) {
    return jQuery(document.createElement(h4));
    }
    });
jQuery.createElement("h4").text("Elder wand").appendTo("body");
// give new color of wand:indigo, don't add in css
$('h4').css('color', 'blue');
// send pet on spy misson. RM pet from DOM and put elsewhere in HTML

// put pet back to original location

// unable to get pet to show up on page :[[[[[[[


/////////////////////////// Year 6 //////////////////////////////////////////////
// jquery  to hide belongings w/argument of 'slow'
//$(.ul).hide() ///not working?

// roommate falls asleep 2 seconds later= set timeOut(), combine hide method
setTimeout(function(){ alert("Roommate is asleep"); }, 2000);
// add class cabbage to pet's leash 
$("button").click(function(){
    $("h4").addClass("cabbage");
  });
// add an attribute of color: chartreuse
$('h4').css('color', 'chartreuse')
// remove class of cabbage of pet's leash but keep original
$('h4.class()').remove('cabbage')
////////////////////////// Year 7 ///////////////////////////////////////////////
// update class schedule to fall 2018
$('h5').replaceWith("Fall 2018")

// replace trunk with chest
// would you use map method? I tried but had no results
// add some css to page
$('#theDiv').prepend($('<img>',{id:'theImg',src:'2592037.png'}))
// screenshot page and add to hw folder


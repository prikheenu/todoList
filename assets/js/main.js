//check off specific todos by clicking
  //when click, the item turns grey & add a line through
// CONDENSED VERSION
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
})
/* EXPANDED VERSION
$("li").click(function() {
  //if li is grey
  if($(this).css("color") === "rgb(128, 128, 128)") {
    //turn it blk
    $(this).css({
      color: "black",
      textDecoration: "none"  //object key cannot have hyphen.
    })
  } else { // else turn it grey
    $(this).css({
      color: "grey",
      textDecoration: "line-through"
    });
  }
}); */

//click on "X" to delete todo
 /*use .on so we can account for future items */
 /*add additional argument where click will listen from*/
$("ul").on("click", "span", function(event) {
  //.parent() refers to and remove li
  $(this).parent().fadeOut(400, function() { //fadeout hides element, not remove
    $(this).remove();
  });
  event.stopPropagation(); //stop event from bubbling up to parent
});

//Add input value to list
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    //grab new todo text from input and store it
    var todoText = $(this).val();
    //reset input value
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
  }
})

//toggle input form
$("#container i").click(function() {
  $("input[type='text']").fadeToggle(350);
})

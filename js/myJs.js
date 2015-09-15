
var grippy = '<img class="grip" src="img/gripper02.svg" alt="item can be reordered">'
var trashCan = '<input class="delete" type="button" name="delete" value="delete Item">'


//function to create list item
function addListItem() {
	var text = $('#text').val();

	if(text == false ){
		//adds a message if no item is entered
		$('input.enter').after
				('<div class="noItemText"><p>List Monster doesn\'t like empty calories!</p>' +
				'<p>Please enter some text.</p> <button type="button" class="close" '+
				'aria-label="Close">×</button></div>');
		$('#text').val('');
	}else {	
		//adds the item to the list	
		$('div.noItemText').remove();	
		$('ul.listHolder').append(
			'<li class="item, ui-state-default">' +
			'<div class="teethUp"></div>' +
			'<div class="teethDown"></div>' +
			grippy +
			'<div class="listItem">' +
			'<label>' +
			'<input type="checkbox" class="checkbox1" name="itemChecker">' +
			'<span><div>' +
			text +
			'</div></span>' +
			'</label>' +
			'</div>' +
			trashCan +
			'</li>'
			);
		$('#text').val('');
		//adds buttons if not visisble	
		if ('$(#buttons).css("display","none")') {
			$('#buttons').fadeIn(2000).css('display', 'block');
		}
		//adds top ul border if first list item
		if($('ul.listHolder li').length >= 1){
			$('ul.listHolder').css('borderTop','solid 2px #98cbe1');
		}
		//creates sortable list items using jquery ui	
			$(function() {
  			  $( "#sortable" ).sortable();
  			  $( "#sortable" ).disableSelection();
  			});
	}
}

// adds item if enter is pressed
function enterListItem(event) {

		if(event.keyCode == 13) {
		addListItem();
		event.preventDefault(); // Added by Ben
		};
	}



// remove list items 
function deleteItem () {
	$(this).parent().slideUp(900, function () {
		$(this).remove();
		// remove ul bordertop and list buttons if no items left
		if($('ul.listHolder li').length === 0){
			$('ul.listHolder').css('borderTop','none');
			$('div#buttons').fadeOut('slow');
		}
	});
}

// remove "no text entered" box
function removeNoEnterBox () {
	$('div.noItemText').fadeOut(1000);
	}

// show email box
function showEmailBox () {
	$('#emailForm').fadeIn(2000).css('display', 'block');
	}

//close email box
function closeEmailBox () {
	$('#emailForm').fadeOut('slow');
	setTimeout(function() {
		$('#emailForm .text').val('');
	}, 500);

	}


// Runs animation, sound and crosses out/uncrosses on click

function checkBox () {

	var moveTeethUp = $(this).parent().parent().parent()
	.find('div.teethUp');

	var moveTeethDown = $(this).parent().parent().parent()
	.find('div.teethDown');

	var itemText = $(this).siblings('span').find('div');

	var currentCheckBox = $(this)

	function animateTeeth() {
		moveTeethUp.addClass('animateIt');
		moveTeethDown.addClass('animateIt');
	}

	animateTeeth();

	// crosses out or uncrosses list item
	setTimeout(function() {
			if (currentCheckBox.prop('checked') == true) {
				itemText.wrap('<s></s>');
			} else {
				itemText.unwrap();
			}
		}, 500);

	// removes the divs so checkbox is not blocked
	setTimeout(function() {
			moveTeethUp.removeClass('animateIt');
	 		moveTeethDown.removeClass('animateIt');
	 		}, 1500);

}

// removes the mail form on email button click, clears form, and shows message
function showEmailSuccess() {
	$('form#emailForm').fadeOut('fast');
	$('div#successMessage').css('display','block').fadeIn('fast');

	setTimeout(function() {
			$('div#successMessage').fadeOut('slow');
	 		}, 5500);
	setTimeout(function() {
		$('#emailForm .text').val('');
	}, 400);

}
	


$(document).ready(function(){

//readies the add button to run the add item 
$('.enter').on('click', addListItem);

//readies the input field to add item if enter os pressed 
$('#text').on('keydown', enterListItem);

//readies the document to run remove function on trashcan click
$(document).on('click', 'input.delete', deleteItem)
.on('click', 'div.noItemText, input#text',removeNoEnterBox)

//readies the document to open and close email form
.on('click', 'button#emailB', showEmailBox)
.on('click', 'button.emailClose', closeEmailBox)

//readies the document to run check functions when checkbox checked
.on('click', 'input.checkbox1', checkBox)

//gives email success message on button click
.on ('click', 'input.sendEmail', showEmailSuccess)


//print button
.on ('click', 'button#printB', function() {
	window.print();
});

// animates in side monsters
$('div#monster01').animate({right:0}, 1000);
$('div#monster02').animate({left:0}, 1400);


// moves the eyes of the purple Monster
$(".m1_pupilRight").jqEye({shape: "circle", radius:10});
$(".m1_pupilMiddle").jqEye({shape: "circle", radius:10});
$(".m1_pupilLeft").jqEye({shape: "circle", radius:10});

// moves the eyes of the green monster
$(".m2_pupilRight").jqEye({shape: "circle", radius:13});
$(".m2_pupilLeft").jqEye({shape: "circle", radius:13});

});



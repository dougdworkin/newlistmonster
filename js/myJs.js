
var grippy = '<img class="grip" src="img/gripper02.svg" alt="item can be reordered">'
var trashCan = '<input class="delete" type="button" name="delete" value="delete Item">'


//function to create list item
function addListItem() {
	var text = $('.text').val();

	if(text == false ){
		//adds a message if no item is entered
		$('input.enter').after
				('<div class="noItemText"><p>List Monster doesn\'t like empty calories!</p><p>Please enter some text.</p> <button type="button" class="close" aria-label="Close">×</button></div>');
		$('.text').val('');
	}else {	
		//adds the item to the list	
		$('div.noItemText').remove();	
		$('ul.listHolder').append(
			'<li class="item">' 
			+ grippy 
			+'<div class="listItem">' 
			+ '<input type="checkbox" class="checkbox1" name="itemChecker">'
			+ '<label>'
			+ text 
			+ '</label>'
			+ '</div>' 
			+ trashCan 
			+'</li>'
			);
		$('.text').val('');
		//adds buttons if not visisble	
		if ('$(#buttons).css("display","none")') {
			$('#buttons').fadeIn(2000).css('display', 'block');
		}
		if($('ul.listHolder li').length >= 1){
			$('ul.listHolder').css('borderTop','solid 2px #98cbe1');
		}
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
		// remove ul bordertop and list buttons if no items
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
	$('#emailForm').slideUp('slow');
	}

function checkBox () {
	//$(this).append('checked="checked"');
	//alert('test');//
}	



$(document).ready(function(){

//readies the add button to run the add item 
$('.enter').on('click', addListItem);

//readies the input field to add item if enter os pressed 
$('.text').on('keydown', enterListItem);

//readies the document to run remove function on trashcan click
$(document).on('click', 'input.delete', deleteItem)
.on('click', 'div.noItemText, input.text',removeNoEnterBox)
//readies the document to open and close email form
.on('click', 'button#emailB', showEmailBox)
.on('click', 'button.emailClose', closeEmailBox)

.on('click', 'input.checkbox1', checkBox);



});
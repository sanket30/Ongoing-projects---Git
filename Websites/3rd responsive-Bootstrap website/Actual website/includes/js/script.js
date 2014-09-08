/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

$(function(){
	$('#alertMe').click(function(e){
		e.preventDefault();
		$('#successAlert').slideDown()
	});

	$('a.pop').click(function(e){
		e.preventDefault(); //it prevents default behaviour of link
	});

	$('a.pop').popover();	//so that it will popove once clicked usinfgbootstrap function "popover"

	$('[rel="tooltip"]').tooltip();	//It select all instances with the "rel=tooltip" and add tooltip() function using bootstrap3


});
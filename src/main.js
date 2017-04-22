// Page Functions

(function() {
	var head = document.querySelectorAll('.accordion-header'),
		i;

	for ( i = 0; i < head.length; i++ ) {
		head[i].addEventListener('click', accFunction);
	}

	function accFunction() {
		this.nextElementSibling.classList.toggle('active');
		this.classList.toggle('active');
	}


}())
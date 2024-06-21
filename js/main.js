const parentList = document.querySelectorAll('.issues-card');

parentList.forEach((el) => {
	el.addEventListener('click', fdwf);
});

function fdwf() {
	console.log(this);
	this.classList.toggle('issues-card-open');
}

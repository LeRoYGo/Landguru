const parentList = document.querySelectorAll('.issues-card');

parentList.forEach((el) => {
	el.addEventListener('click', fdwf);
});

function fdwf() {
	const child = this.querySelector('.issues-card__text');
	const child2 = this.querySelector('.issues-card__circle');

	child.classList.toggle('issues-card-open');
	child2.classList.toggle('issues-card-open');
}

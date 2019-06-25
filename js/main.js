
	const hamburger = document.querySelector(`.hamburger`);

	hamburger.addEventListener(`click`, (e) => {
		e.target.closest(`.hamburger`).classList.toggle(`hamburger--active`);
		e.target.closest(`.nav`).querySelector(`.nav__list`).classList.toggle(`nav__list--active`);
	});
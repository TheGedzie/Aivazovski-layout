const navLinks = document.querySelectorAll('.mobile__navigation-link');
const toggler = document.getElementById('toggler-id');
navLinks.forEach(link => {
	link.addEventListener('click', () => {
		toggler.checked = false;
		});
	});

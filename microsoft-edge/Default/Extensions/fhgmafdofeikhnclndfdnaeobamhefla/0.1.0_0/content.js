let btns = document.querySelectorAll('[data-id]')
for (let btn of btns) {
	let timeValue = btn.attributes[0].value.split('+', 1)[0]
	if (timeValue < 10) btn.remove()
}

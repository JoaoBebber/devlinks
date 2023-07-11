// Função chamada no clique do switch
function toggleMode() {
	// Obtem o HTML
	const html = document.documentElement;

	// Declara o toggle da classe 'light'
	html.classList.toggle('light');

	// Obtem a referência da imagem
	const img = document.querySelector('#profile img');

	// Altera os atributos da imagem com base na classe 'light'
	if (html.classList.contains('light')) {
		img.setAttribute('src', './assets/avatar-light.png');
		img.setAttribute(
			'alt',
			'Foto de João Bebber sorrindo, usando boné e jaqueta preta, barba e fundo de rua preto e branco.'
		);
	} else {
		img.setAttribute('src', './assets/avatar.png');
		img.setAttribute(
			'alt',
			'Foto de João Bebber sorrindo, usando boné e jaqueta preta, barba e fundo azul.'
		);
	}
}

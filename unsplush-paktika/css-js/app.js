window.addEventListener('load', () => {
	let 
		input = document.getElementById('search'),
		sendBtn = document.getElementById('sendBtn'),
		resultsDiv = document.getElementsByClassName('results')[0],
		loader = document.querySelector('.loader'),
		heartI;
	sendBtn.addEventListener('click', () => {
		resultsDiv.innerHTML = ''
		loader.style.display = 'flex'

		let url = 'https://api.unsplash.com/search/photos?client_id=M4tosJ0ZVtdOsBKPnaDIMQ3ik-IZf1OlhOWMIGfwSJw&query='+input.value;
		let fet = fetch(url);
		let then = fet.then((x) => {
			let js = x.json(); 

			js.then((data) => {
				for (var i = 0; i <= data.results.length - 1; i++) {

					let itemDiv = document.createElement('div');
					itemDiv.className = 'item';

					itemDiv.innerHTML = `<img src="${data.results[i].urls.full}" class="ok" alt="Url"> <div class="hover"><i class="far fa-heart"></i></div>`;
					heartI=document.getElementsByClassName('fa-heart');
					resultsDiv.appendChild(itemDiv);


					if (i == 9) {
						loader.style.display = 'none';
					}

				}


					clicked()


			})
		})
	})



	function clicked() {
			for (var i = heartI.length - 1; i >= 0; i--) {
				heartI[i].style.color = 'black'
				heartI[i].addEventListener('click', function() {
					this.style.color = this.style.color == 'black' ? 'red' : 'black';
					// this.style.color = 'red'
					console.log(this.style)
				})
			}

	}
})

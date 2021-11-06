function cardHome(res) {
	let result = `<div class="wrap-card">`;
	let data_image = [];
	for (var i = 0; i < res.length; i++) {
		data_image.push({url:res[i].logo,id:`${res[i].slug}`})
		result += `<div class="card">
			<div class="card-item">
				<div class="card-konten" id="${res[i].slug}" onclick='screenMerchant({slug:"${res[i].slug}"})'>
					<img src="${image_square_blob}" />
				</div>
			</div>
		</div>`;
	}
	result += `</div>`;
	loadImage(data_image);
	return result;
}
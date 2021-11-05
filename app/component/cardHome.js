function cardHome(res) {
	let result = `<div class="wrap-card">`;
	for (var i = 0; i < res.length; i++) {
		result += `<div class="card">
			<div class="card-item">
				<div class="card-konten">
					<img onclick='screenMerchant({slug:"${res[i].slug}"})' src="${res[i].logo}" alt="" />
				</div>
			</div>
		</div>`;
	}
	result += `</div>`;
	return result;
}
function listNotif(res) {
	let result = `<div class="p-3">`;
	for (var i = 0; i < res.data.length; i++) {
		let nama_merchant = DATA.MERCHANT[res.data[i].merchant].brand.nama;
		let logo_merchant = DATA.MERCHANT[res.data[i].merchant].brand.logo;
		let waktu = HELPER.convertWaktu(res.data[i].date)
		result += `
			<div data-data='${JSON.stringify(res.data[i])}' class="wrap-notif mb-3 pb-2" onclick="screenDetailNotif({data:this})">
				<div class="image-notif">
					<img src="${logo_merchant}"/>
				</div>
				<div class="title-notif">
					<div class="pl-3">
						<b>${nama_merchant}</b> <span class="text-purple">${res.data[i].jenis}</span>
						<br />
						<span class="text-small text-grey">${waktu}</span>
					</div>
				</div>
			</div>
		`;
	}
	result += `</div>`;
	return result;
}
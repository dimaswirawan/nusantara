function biodataUser(res) {
	let result = `
		<div class="p-3">
			<div class="mt-3 mb-3" id="qrcode"></div>
			<div class="mt-3 mb-3 text-center">Halo ${DATA.USER.nama}!</div>
			<div class="text-center mt-3"><span class="tombol-profil" onclick="screenUser()">Lihat Profile</span></div>

		</div>
	`;
	setTimeout(function () {
		var qrcode = new QRCode(document.getElementById("qrcode"), {
			width : 300,
			height : 300
		});
		qrcode.makeCode(DATA.USER.username+"-"+DATA.USER.id);
	},50);
	return result;
}
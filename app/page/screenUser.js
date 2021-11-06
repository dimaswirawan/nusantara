function screenUser(res = {}) {
	let konten = `<div class="screen-gradient">
	<div class="p-3">
		<b>Nama :</b> <br />
		${DATA.USER.nama}
		<br /><b>Alamat :</b> <br />
		${DATA.USER.alamat}
	</div>
	</div>`;

	render({view:konten,res:res});
}
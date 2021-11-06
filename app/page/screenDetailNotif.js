function screenDetailNotif(res) {
	let data = JSON.parse(res.data.dataset.data);
	let nama_merchant = DATA.MERCHANT[data.merchant].brand.nama;
	let logo_merchant = DATA.MERCHANT[data.merchant].brand.logo;
	let foto_merchant = DATA.MERCHANT[data.merchant].brand.foto;
	let konten = `
		<div class="notif-detail-header" id="foto">
			<img src="${image_rectangle_blob}" />
		</div>
		<div class="notif-detail-profil text-center" id="logo">
			<img src="${image_square_blob}" />
			<h2 class="mt-1">${nama_merchant}</h2>
		</div>
		<div class="p-3"><div class="bd-1-grey mt-3 p-3">
			<b>${data.jenis}</b>
			<div class="mt-1">
				${data.deskripsi}
			</div>
		</div></div>
	`;
	if (data.produk_terkait.length > 0) {
		let produk_terkait = [];
		let produk_merchant = DATA.MERCHANT[data.merchant].produk;
		for (var i = 0; i < data.produk_terkait.length; i++) {
			for (var x = 0; x < produk_merchant.length; x++) {
				if (produk_merchant[x].id == data.produk_terkait[i]) {
					produk_terkait.push(produk_merchant[x]);
					break;
				}
			}
		}
		konten += listProduk({produk:produk_terkait})

	}
	loadImage([{url:foto_merchant,id:"foto"},{url:logo_merchant,id:"logo"}])
	render({view:konten,res:res});
	// console.log(data)
}
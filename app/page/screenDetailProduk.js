function screenDetailProduk(res) {
	let produk = DATA.MERCHANT[res.merchant].produk;
	let data_produk = {};
	for (var i = 0; i < produk.length; i++) {
		if (produk[i].id == res.produk) {
			data_produk = produk[i];
			break;
		}
	}
	let result = detailProduk(data_produk);
	render({view:result,res:res})
}
function detailProduk(res) {
	let harga = "";
	if (res.harga <= res.promo) {
		harga = `<div class="text-green mb-3">Rp. ${HELPER.getRupiah(res.harga)},-</div>`;
	}else{
		harga = `<div class="text-green mb-3">Rp. ${HELPER.getRupiah(res.promo)},- <small class="harga-coret text-grey">Rp. ${HELPER.getRupiah(res.harga)}</small></div>`;
	}

	let result = `
		<div class="header-detail-produk">
			<div id="foto">
			<img src="${image_square_blob}" />
			</div>

			<div class="kembali-detail-produk">
				<div class="p-3">
					<div data-data="${res.id}" onclick="back()" class="mb-3">
						<i class="fa fa-arrow-left"></i>
					</div>
				</div>
			</div>
		</div>
		<div class="wrap-konten-detail-produk">
			<div class="konten-detail-produk p-3">
				<h2>${res.nama}</h2>
				<div class="mb-3">${harga}</div>
				${res.deskripsi}
			</div>
		</div>
		<div class="tombol-pesan-detail-produk text-center" data-data='${JSON.stringify(res)}' onclick="addToCart(this)">
			<i class="fa fa-whatsapp"></i> Order
		</div>
	`;

	loadImage([{url:res.foto,id:"foto"}])
	// console.log()
	return result;
}
function addToCart(e) {
	let data = JSON.parse(e.dataset.data)
	console.log(data)
}
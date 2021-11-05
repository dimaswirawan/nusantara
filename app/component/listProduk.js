function listProduk(res) {
	let produk = res.produk;
	let result = `
		<div class="sort-produk-merchant">
			<span>Kategori</span> 
			<span>Sort</span>
		</div>
		<div class="produk-merchant-wrap">`;
	let jawaban = false;
	let warna = 0;
	let count_jawaban = 0;
	let data_jawaban = [];

	for (var i = 0; i < produk.length; i++) {
		let merchant = "";
		if (res.list) {
			merchant = `<span class="text-red text-small"><i class="fa fa-train"></i> ${DATA.MERCHANT[produk[i].merchant].brand.nama}</span>`
		}
		let harga = "";
		if (produk[i].harga <= produk[i].promo) {
			harga = `<div class="text-green mb-1">Rp. ${HELPER.getRupiah(produk[i].harga)},-</div>`;
		}else{
			harga = `<div class="text-green mb-1">Rp. ${HELPER.getRupiah(produk[i].promo)},- <small class="harga-coret text-grey">Rp. ${HELPER.getRupiah(produk[i].harga)}</small></div>`;
		}
		result += `
			<div class="produk-merchant mb-3" onclick="screenDetailProduk({merchant:'${produk[i].merchant}',produk:'${produk[i].id}'})">
				<div class="produk-merchant-item">
					<div class="image-item">
						<img src="${produk[i].foto}" alt="" />
					</div>
					<div class="konten-item">
						<div class="p-2">
							<h3 class="mb-1">${produk[i].nama}</h3>
							${harga}
							${merchant}
						</div>
					</div>
				</div>
			</div>
		`;
	}
	result += "</div>";
	return result;
}
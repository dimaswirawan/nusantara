function screenMerchant(res) {
	// console.log(res)
	let merchant = DATA.MERCHANT[res.slug];
	let produk = merchant.produk;
	let result = `
		<div class="header-merchant">
			<div class="image-merchant">
				<img src="${merchant.brand.foto}" alt="" />
			</div>
			<div class="konten-merchant">
				<div class="p-3">
					<div data-data="${res.id}" onclick="back()" class="mb-3">
						<i class="fa fa-arrow-left"></i>
					</div>
					<div class="text-center text-orange uppercase p-3">
						<h2 class="nama-brand p-3">${merchant.brand.nama}</h2>
					</div>
					<div class="text-center">
						<i>${merchant.brand.deskripsi}</i>
					</div>
					<div class="text-center mt-3">
						<small>${merchant.brand.alamat}</small>
					</div>
					<div class="border-space"></div>
				</div>
			</div>
		</div>
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
		// console.log(produk[i])
		let harga = "";
		if (produk[i].harga <= produk[i].promo) {
			harga = `<div class="text-green mb-3">Rp. ${HELPER.getRupiah(produk[i].harga)},-</div>`;
		}else{
			harga = `<div class="text-green mb-3">Rp. ${HELPER.getRupiah(produk[i].promo)},- <small class="harga-coret">Rp. ${HELPER.getRupiah(produk[i].harga)}</small></div>`;
		}
		result += `
			<div class="produk-merchant mb-3">
				<div class="produk-merchant-item">
					<div class="image-item">
						<img src="${produk[i].foto}" alt="" />
					</div>
					<div class="konten-item">
						<div class="p-3">
							<h3 class="mb-3">${produk[i].nama}</h3>
							${harga}
							<div class="mt-3">
								<span class="tombol-produk" onclick="screenDetailProduk({merchant:'${res.slug}',produk:'${produk[i].id}'})">Detail</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		`;
	}
	result += "</div>";
	render({view:result,res:res})
}
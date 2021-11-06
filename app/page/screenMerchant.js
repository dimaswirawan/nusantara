function screenMerchant(res) {
	// console.log(res)
	let merchant = DATA.MERCHANT[res.slug];
	let produk = merchant.produk;
	let result = `
		<div class="header-merchant">
			<div class="image-merchant" id="image-${merchant.slug}">
				<img src="${image_rectangle_blob}" />
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
		</div>`;
	result += listProduk({produk:produk})
	loadImage([{url:merchant.brand.foto,id:`image-${merchant.slug}`}])
	render({view:result,res:res})
}
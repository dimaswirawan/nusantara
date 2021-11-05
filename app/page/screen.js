function screen(res) {
	let id = res.dataset.data;
	let konten = ``;
	let image = "";
	if (id == 1) {
		let object = DATA.MERCHANT;
		let data_card = [];
		for (const property in object) {
			object[property].brand.slug = property;
			data_card.push(object[property].brand)
		}
		konten += cardHome(data_card);
	}else if (id == 2) {
		let produk_diskon = [];
		for (var i = 0; i < DATA.PRODUK.length; i++) {
			if (DATA.PRODUK[i].promo < DATA.PRODUK[i].harga) {
				produk_diskon.push(DATA.PRODUK[i]);
			}
		}
		konten += listProduk({produk:produk_diskon,list:true});
	}else if (id == 3) {
		konten += listProduk({produk:DATA.PRODUK,list:true});

	}else if (id == 4) {
		konten += listNotif({data:DATA.NOTIF});
	}else if (id == 5) {
		var qrcode = new QRCode();
		var e = qrcode.makeCode(Date.now());
		console.log(e)

	}
	konten += menuBottom(id);
	document.body.style.backgroundColor = "#fff";
	render({view:konten,res:res});
}
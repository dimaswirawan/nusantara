
		// urlToBlob("https://image.freepik.com/free-vector/cute-chef-presenting-meatball-grill-with-spicy-sauce_40876-2396.jpg");

		function sortProdukPromo() {
			let result = [];
			for (var i = 0; i < DATA.PRODUK.length; i++) {
				let cek_promo = DATA.PRODUK[i].harga - DATA.PRODUK[i].promo;
				if (cek_promo > 0) {
					result.push(DATA.PRODUK[i]);
				}
			}
			sortByDate(result)
		}
		function sortByDate(arr) {
			var sorted = arr.sort(function(date1,date2){
				let d1 = new Date(date1.date);
				let d2 = new Date(date2.date);
				return d1.getTime() - d2.getTime()
			});
			return sorted;
		}

		// console.log(server_fake)
		// document.getElementById("full-putih").innerHTML = `<img src="${generateBlobSVG("splash_image()")}" />`;

		// var SERVER = {};
		// SERVER.menu = new Model_ofson();
		// SERVER.menu.gas = "AKfycbyMKA70M1RsPK3j6RL3CE0JXOlj3sEyWcktdJWeBikwHPivIEMmVRIGl0gIcvR_Gs2XXQ";
		// SERVER.menu.getGas(function (res) {
		// 	DATA.wa = res.status.wa;
		// 	DATA.deskripsi = res.status.deskripsi;
			
		// 	for (var i = 0; i < res.data.length; i++) {
		// 		if (res.data[i].kategori == 1) {
		// 			DATA.asi.push(res.data[i])
		// 		}else if (res.data[i].kategori == 2) {
		// 			DATA.baby.push(res.data[i])
		// 		}else if (res.data[i].kategori == 3) {
		// 			DATA.ayah.push(res.data[i])
		// 		}else if (res.data[i].kategori == 4) {
		// 			DATA.pekerja.push(res.data[i])
		// 		}
		// 	}
		// 	document.getElementById("load").innerHTML = "";
		// 	document.getElementById("splash").innerHTML = "";
		// });

		(async () => {

			fake(function(res){
				for (var i = 0; i < res.data.length; i++) {
					let data_db = eval(res.data[i].db);
					data_db.menu.map(function(x) { 
						x.merchant = data_db.slug; 
						x.blob_logo = await urlToBlob(x.logo);
						return x;
					});
					DATA.MERCHANT[data_db.slug] = data_db;
					newArray = [...DATA.PRODUK, ...data_db.menu];
					DATA.PRODUK = newArray;
				}
				screen({
					dataset : {
						data : 1
					}
				});
				// document.getElementById("load").innerHTML = "";

			});
		})()
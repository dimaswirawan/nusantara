var icon_diskon_blob = generateBlobSVG("icon_diskon()");
var icon_diskon_hover_blob = generateBlobSVG("icon_diskon_hover()");
var icon_home_blob = generateBlobSVG("icon_home()");
var icon_home_hover_blob = generateBlobSVG("icon_home_hover()");
var icon_produk_blob = generateBlobSVG("icon_produk()");
var icon_produk_hover_blob = generateBlobSVG("icon_produk_hover()");
var icon_notif_blob = generateBlobSVG("icon_notif()");
var icon_notif_hover_blob = generateBlobSVG("icon_notif_hover()");
var icon_user_blob = generateBlobSVG("icon_user()");
var icon_user_hover_blob = generateBlobSVG("icon_user_hover()");
var image_square_blob = generateBlobSVG("image_square()");
var image_rectangle_blob = generateBlobSVG("image_rectangle()");

var image_load = [
	"icon_user_hover_blob",
	"icon_user_blob",
	"icon_notif_hover_blob",
	"icon_notif_blob",
	"icon_produk_hover_blob",
	"icon_produk_blob",
	"icon_home_hover_blob",
	"icon_home_blob",
	"icon_diskon_hover_blob",
	"image_rectangle_blob",
	"image_square_blob",
	"icon_diskon_blob"
];
var for_load = "";
for (var i = 0; i < image_load.length; i++) {
	let img_load = eval(image_load[i]);
	for_load += `<img src="${img_load}" />`;
}
document.getElementById('load').innerHTML = for_load;
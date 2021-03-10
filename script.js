var inputKegiatanUser = document.getElementById('inputKegiatan');
var tombolEnter = document.getElementById('tombolOk');


// bikin li seperti ini <li class="aktivitas"><span>kegiatan</span><img src="assets/img/centang.png"></li>


// idenya adalah
// 1. ambil ul parentKegiatan karena kita akan append child element dari parent ini
// 1. bikin element node dengan li sebagai parentnya dan element span img sebagai childnya
// 2. didalam node img beri attribute src=''
// 3. didalam node span beri innerHTML yang innerHTML tersebut didapat dari inputKegiatanUser 

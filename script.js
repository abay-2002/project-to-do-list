alert('wow you clicked this link :D');
alert('Thanks.. (人 ◕ω◕)');

var tampilkanValue = document.getElementById('tombolOk');
tampilkanValue.addEventListener('click',function(){
	// select input element dan ambil valuenya
	var tampungInput = document.getElementById('inputKegiatan').value;	
	// bikin element li
	const elhSection = document.createElement('section'); // 1 mainstep
	const elhUl = document.createElement('ul');
	elhSection.setAttribute('id','sectionParent');
	elhUl.setAttribute('id','parentKegiatan'); 
	elhSection.appendChild(elhUl); // 2 mainstep
	// output kode diatas: <section id='sectionParent'><ul></ul></section>
	// kode diatas berupa membuat section
	
	const elhLi = document.createElement('li');
	const elhSpan = document.createElement('span');
	const elhDiv = document.createElement('div');
	elhDiv.setAttribute('class','gambarStatus');
	elhSpan.innerHTML = tampungInput;
	// 3. main step
	
	elhLi.setAttribute('class','aktivitas');
	elhLi.appendChild(elhSpan);
	elhLi.appendChild(elhDiv);
	// elhLi.appendChild(elhImg);
	// output kode diatas: <li class="aktivitas"><span>kegiatan</span><div class="gambarStatus"></div></li>
	// output kode diatas berupa membuat element li
	// diatas 4. mainstep

	elhUl.appendChild(elhLi); // 5. mainstep
	// output kode diatas: <ul id="parentKegiatan"><li class="aktivitas"><span>kegiatan</span><div class="gambarStatus"></div></li></ul>

	const sectionWrapper = document.getElementById('sectionWrapper');
	sectionWrapper.appendChild(elhSection); // 6. mainstep
	// output kode diatas: <section id="sectionParent"><ul id="parentKegiatan"><li class="aktivitas"><span>kegiatan</span><div class="gambarStatus"></div></li></ul></section>
	// hiasan
	elhLi.addEventListener('click',function(){
		elhLi.classList.toggle('aktivitasToggle');
		elhDiv.classList.toggle('gambarStatusToggle');
	});

	// menghapus child/kegiatan
	elhLi.addEventListener('dblclick',function(){
		sectionWrapper.removeChild(elhSection);
	})

});

	// 1. buat elh section dan ul
	// 2. masukan ul kedalam section
	// 3. buat elh li span, masukan span kedalam li
	// innerHTML span didapat dari input id='inputKegiatan'
	// 4. masukan span kedalam li
	// 5. masukan elh li kedalam elhUl
	// 6. gabungkan section 



// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }


// var classAktivitas = document.getElementsByClassName('aktivitas')[1];
// classAktivitas.style.backgroundColor = 'lightpink';

// var tampungPKedua = document.getElementsByTagName('p')[1];
// tampungPKedua.style.color = 'green';

// elhLi.addEventListener('click', function(){
// 	elhLi.style.color = '#84ed5a';
// });	




// bikin li seperti ini <li class="aktivitas"><span>kegiatan</span><img src="assets/img/centang.png"></li>




// elhSpan.innerHTML = tampungInput;





// idenya adalah
// 1. ambil ul parentKegiatan karena kita akan append child element dari parent ini
// 1. bikin element node dengan li sebagai parentnya dan element span img sebagai childnya
// 2. didalam node img beri attribute src=''
// 3. didalam node span beri innerHTML yang innerHTML tersebut didapat dari inputKegiatanUser 

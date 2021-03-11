var tampilkanValue = document.getElementById('tombolOk');
tampilkanValue.addEventListener('click',function(){
	// select input element dan ambil valuenya
	var tampungInput = document.getElementById('inputKegiatan').value;	
	// bikin element li
	const elhSection = document.createElement('section');
	const elhUl = document.createElement('ul');
	elhSection.setAttribute('id','sectionParent');
	elhUl.setAttribute('id','parentKegiatan');
	elhSection.appendChild(elhUl);
	// output kode diatas: <section id='sectionParent'><ul></ul></section>
	// kode diatas berupa membuat section
	
	const elhLi = document.createElement('li');
	const elhSpan = document.createElement('span');
	const elhImg = document.createElement('img');
	elhImg.setAttribute('src','assets/img/removeicon.png');
	elhSpan.innerHTML = tampungInput;
	elhLi.setAttribute('class','aktivitas');
	elhLi.appendChild(elhSpan);
	elhLi.appendChild(elhImg);
	// output kode diatas: <li class="aktivitas"><span>kegiatan</span><img src="assets/img/removeicon.png"></li>
	// output kode diatas berupa membuat element li
	elhUl.appendChild(elhLi);
	// kode diatas saya memberi child li kepada parent ul

	const sectionWrapper = document.getElementById('sectionWrapper');
	sectionWrapper.appendChild(elhSection);
	console.log(sectionWrapper);
});




// bikin li seperti ini <li class="aktivitas"><span>kegiatan</span><img src="assets/img/centang.png"></li>




// elhSpan.innerHTML = tampungInput;





// idenya adalah
// 1. ambil ul parentKegiatan karena kita akan append child element dari parent ini
// 1. bikin element node dengan li sebagai parentnya dan element span img sebagai childnya
// 2. didalam node img beri attribute src=''
// 3. didalam node span beri innerHTML yang innerHTML tersebut didapat dari inputKegiatanUser 

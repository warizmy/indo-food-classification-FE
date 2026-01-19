class HeroSection {
  render() {
    const section = document.createElement('section');
    section.className = 'hero';

    section.innerHTML = `
     <div class="inner-hero d-flex align-items-center justify-content-center">
          <div class="container-app text-center d-flex flex-column gap-2">
               <h1 class="fw-bold fs-1">
                    Kenali Masakan Indonesia dengan Sekali Foto
               </h1>
               <p class="text-secondary">
                    Teknologi AI yang membantu Anda mengidentifikasi hidangan nusantara
               </p>
               <div class="d-flex gap-3 justify-content-center">
                    <a href="#/tentang" class="btn btn-light text-black">Pelajari Lebih Lanjut</a>
                    <a href="#/cekmakanan" class="btn btn-warning">Mulai Cek Makanan</a>
               </div>
          </div>
     </div>`;
    return section;
  }
}

export default HeroSection;

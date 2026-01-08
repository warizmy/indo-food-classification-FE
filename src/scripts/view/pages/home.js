/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
class Home {
  constructor() {

  }

  async _render() {
    const homePage = document.createElement('section');
    homePage.className = 'hero';
    homePage.innerHTML = `
        <div class="inner-hero d-flex flex-column gap-1 align-items-center justify-content-center">
          <div class="container-app text-center">
            <h1 class="fw-bold fs-1">Kenali Masakan Indonesia dengan Sekali Foto</h1>
            <p class="text-secondary">Teknologi AI yang membantu Anda mengidentifikasi hidangan nusantara dan memberikan resep autentik seketika</p>
            <div class="d-flex flex-row gap-3 align-items-center justify-content-center">
              <a href="#/tentangai" class="btn btn-light text-black">Pelajari Lebih Lanjut</a>
              <a href="#/cekmakanan" class="btn btn-warning">Mulai Cek Makanan</a>
            </div>
          </div>
        </div>

        <section class="d-flex my-4 py-4 flex-column align-items-center jusify-content-center"> 
          <div class="section-1">
          <div class="py-3">
            <h4 class="text-start fw-bold m-0">Cara Kerja
              <span class="text-warning">IndoFood.ai<span class="text-black">?</span>
              </span>
            </h4>
            <p class="text-secondary fs-6">Cek Makanan Dengan tiga Langkah</p>
          </div>
            <div class="d-flex flex-row gap-4 align-items-center justify-content-between">
              <span class="card d-flex flex-column align-items-start justify-content-center">
                <img>
                <h5>Unggah Gambar</h5>
                <p class="text-muted">Unggah foto masakan Indonesia dari kamera atau galeri.</p>
              </span>
              <span class="card d-flex flex-column align-items-start justify-content-center">
                <img>
                <h5>Analisis AI</h5>
                <p class="text-muted">MobileNetV2 menganalisis gambar untuk mengenali nama makanan.</p>
              </span>
              <span class="card d-flex flex-column align-items-start justify-content-center">
                <img>
                <h5>Dapatkan Resep</h5>
                <p class="text-muted">Gemini AI otomatis menghasilkan resep berdasarkan identifikasi.</p>
              </span>
            </div>
          </div>
        </section>`;

    return homePage;
  }

  _intializeEvent() {

  }
}

export default Home;

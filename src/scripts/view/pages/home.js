/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
class Home {
  constructor() {

  }

  async _render() {
    const homePage = document.createElement('div');
    homePage.className = 'hero';
    homePage.innerHTML = `
        <section class="inner-hero d-flex flex-column gap-1 align-items-center justify-content-center">
          <h1 class="fw-bold fs-1">Kenali Masakan Indonesia dengan Sekali Foto</h1>
          <p class="text-secondary">Teknologi AI yang membantu Anda mengidentifikasi hidangan nusantara dan memberikan resep autentik seketika</p>
          <div class="d-flex flex-row gap-3 align-items-center justify-content-center">
            <a href="#/tentangai" class="btn btn-light text-black">Pelajari Lebih Lanjut</a>
            <a href="#/cekmakanan" class="btn btn-warning">Mulai Cek Makanan</a>
          </div>
        </section>


        <div class="d-flex justify-content-start">
            <h1>Hello World</h1>
        </div>
        <section class="section-1 d-flex flex-column align-items-center jusify-content-center"> 
          
        </section>`;

    return homePage;
  }

  _intializeEvent() {

  }
}

export default Home;

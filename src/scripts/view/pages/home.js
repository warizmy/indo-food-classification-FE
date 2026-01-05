/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
class Home {
  constructor() {

  }

  async _render() {
    const homePage = document.createElement('section');
    homePage.classList.add('home-page');
    homePage.innerHTML = `
        <div class="d-flex flex-column gap-1 align-items-center justify-content-center">
          <h1 class="fw-bold fs-1">Kenali Masakan Indonesia dengan Sekali Foto</h1>
          <p class="text-secondary">Teknologi AI yang membantu Anda mengidentifikasi hidangan nusantara dan memberikan resep autentik seketika</p>
          <div class="d-flex flex-row gap-3 align-items-center justify-content-center">
            <a href="#/tentangai" class="btn btn-light text-black">Pelajari Lebih Lanjut</a>
            <a href="#/cekmakanan" class="btn btn-warning">Mulai Cek Makanan</a>
          </div>
        </div>`;

    return homePage;
  }

  _intializeEvent() {

  }
}

export default Home;

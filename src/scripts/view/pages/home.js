/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
import uploadIcon from '../../../assets/images/upload.svg';
import aiTechIcon from '../../../assets/images/ai-technology.svg';
import recipeIcon from '../../../assets/images/recipe-book.svg';

class Home {
  constructor() {

  }

  async _render() {
    const homePage = document.createElement('section');
    homePage.className = 'hero';
    homePage.innerHTML = `
        <div class="inner-hero d-flex align-items-center justify-content-center">
          <div class="container-app text-center d-flex flex-column gap-2">
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
                <img src="${uploadIcon}" alt="upload">
                <h5>Unggah Gambar</h5>
                <p class="text-muted">Unggah foto masakan Indonesia dari kamera atau galeri.</p>
              </span>
              <span class="card d-flex flex-column align-items-start justify-content-center">
                <img src="${aiTechIcon}" alt="aiTech">
                <h5>Analisis AI</h5>
                <p class="text-muted">MobileNetV2 menganalisis gambar untuk mengenali nama makanan.</p>
              </span>
              <span class="card d-flex flex-column align-items-start justify-content-center">
                <img src="${recipeIcon}" alt="recipe">
                <h5>Dapatkan Resep</h5>
                <p class="text-muted">Gemini AI otomatis menghasilkan resep berdasarkan identifikasi.</p>
              </span>
            </div>
          </div>
        </section>
        
        <section class="d-flex mt-5 py-5 flex-column align-items-center justify-content-center">
          <div class="section-2">
            <h4 class="text-start fw-bold m-0">FAQ
              <span class="text-warning">
                  's
              </span>
            </h4>
            <p class="text-muted">
              Temukan Jawaban Dari Pertanyaan Anda
            </p>
            <div class="py-4 w-100">
              <div id="faq" class="d-flex flex-column gap-3 align-items-start justify-content-center">
                <div class="border-bottom w-100 d-flex flex-column gap-3 pb-3">
                  <a data-bs-toggle="collapse" href="#q1">
                      Apakah aplikasi ini bisa mengenali semua makanan?
                  </a>
                  <div id="q1" class="collapse" data-bs-parent="#faq">
                      <p>
                          Untuk saat ini, AI kami fokus pada 
                          <strong>
                            13 jenis masakan Indonesia
                          </strong> populer seperti Rendang, Nasi Goreng, dan lainnya. 
                          Anda bisa melihat daftar lengkapnya di menu "Daftar Menu".
                      </p>
                  </div>
                </div>
                <div class="border-bottom w-100 d-flex flex-column gap-3 pb-3"">
                  <a data-bs-toggle="collapse" href="#q2">
                      Dari mana resep tersebut berasal?
                  </a>
                  <div id="q2" class="collapse" data-bs-parent="#faq">
                    <p>
                      Resep dihasilkan secara otomatis oleh 
                      <strong>
                        Gemini AI (Large Language Model)
                      </strong> 
                      yang dilatih untuk memberikan instruksi memasak layaknya koki profesional.
                    </p>
                  </div>
                </div>
                <div class="border-bottom w-100 d-flex flex-column gap-3 pb-3"">
                  <a data-bs-toggle="collapse" href="#q3">
                      Kenapa hasil klasifikasi kadang salah?
                  </a>
                  <div id="q3" class="collapse" data-bs-parent="#faq">
                    <p>
                      Akurasi tergantung pada pencahayaan dan sudut pengambilan foto. Pastikan makanan terlihat jelas dan berada di tengah frame untuk hasil terbaik.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>`;

    return homePage;
  }

  _intializeEvent() {

  }
}

export default Home;

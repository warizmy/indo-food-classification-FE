class Footer {
  render() {
    const footerContainer = document.createElement('footer');
    footerContainer.innerHTML = `
      <div class="content">
        <div class="content-top">
          <div class="nav">
            <h2 class="text-uppercase">Jelajahi</h2>
            <a href="#/">Beranda</a>
            <a href="#/profile">Profile</a>
            <a href="#/berita">Berita</a>
            <a href="#/galeri">Galeri</a>
          </div>
          <aside>
            <div class="d-flex flex-column">
              <h2 class="text-uppercase">Kami</h2>
              <div class="d-flex flex-column inner-aside">
                    <img src="./icon.webp">
                    <div class="d-flex flex-row align-items-start justify-content-center gap-3">
                         <i class="bi bi-geo-alt-fill"></i>
                         <p>
                              Kantor Desa Tagawiti, Tagawiti, Ile Ape, Kabupaten Lembata </br> Nusa Tenggara Timur, 86683
                         </p>
                    </div>
                    <div class="d-flex flex-row align-items-start gap-3">
                         <i class="bi bi-telephone-fill"></i>
                         <p>
                              +(62) 853-4272-8671
                         </p>
                    </div> 
              </div>
            </div>
          </aside>
        </div>
        <hr/>
        <div class="content-bottom pt-5">
          <p class="tag">Copyright © Pemerintah Desa Tagawiti 2024.</p>
        </div>
      </div>`;

    return footerContainer;
  }
}

export default Footer;

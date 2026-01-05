import routes from './routes/routes';
import UrlParser from './routes/url-parser';
import Footer from './view/component/footer';
import Navbar from './view/component/navbar';
// import Home from './view/pages/home';

class Main {
  constructor({ content, loadingContainer, mainContentWrapper }) {
    this._content = content;
    this._loadingContainer = loadingContainer;
    this._mainContentWrapper = mainContentWrapper;

    this.InitialAppShell();
  }

  InitialAppShell() {
    const navbar = new Navbar().render();
    const footer = new Footer().render();

    if (this._mainContentWrapper && this._mainContentWrapper.parentNode) {
      this._mainContentWrapper.parentNode.insertBefore(navbar, this._mainContentWrapper);
      this._mainContentWrapper.parentNode.appendChild(footer); // Cara lebih aman
    }
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const Page = routes[url];

    if (Page) {
      const page = new Page();
      this._content.innerHTML = '';
      this._content.appendChild(await page._render());
      if (typeof page._intializeEvent === 'function') {
        page._intializeEvent();
      }
    } else {
      this._content.innerHTML = '<h1>404 - Halaman Tidak Ditemukan</h1>';
    }
  }
}

export default Main;

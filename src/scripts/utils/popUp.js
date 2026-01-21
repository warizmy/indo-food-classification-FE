class Popup {
  constructor() {
    if (!document.getElementById('global-popup')) {
      this._createElement();
    }
    this.el = document.getElementById('global-popup');
    this.msgEl = this.el.querySelector('.popup-message');
  }

  _createElement() {
    const html = `
      <div id="global-popup" class="popup-box">
        <div class="popup-content">
          <i class="bi bi-info-circle text-warning fs-4 mb-2"></i>
          <p class="popup-message mb-0"></p>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
  }

  show(message, duration = 3000) {
    this.msgEl.textContent = message;
    this.el.classList.add('active');

    // Otomatis hilang setelah durasi tertentu
    setTimeout(() => {
      this.hide();
    }, duration);
  }

  hide() {
    this.el.classList.remove('active');
  }
}

export default Popup;

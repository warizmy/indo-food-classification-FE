import HistoryStorage from '../../utils/historyStorage';
import LoadingCircle from '../../utils/loading';
import Popup from '../../utils/popUp';

class HistoryMenus {
  _renderHistoryItems(histories) {
    return histories.map((item) => `
      <div class="history-card shadow-sm rounded p-3 d-flex gap-3">
        <img 
          src="${item.imageUrl}" 
          alt="${item.foodName}" 
          class="history-img lazyload"
        />
        <div>
          <h6 class="fw-bold mb-1">${item.foodName}</h6>
          <small class="text-muted">
            Confidence: ${(item.confidence * 100).toFixed(2)}%
          </small>
          <br />
          <small class="text-secondary">
            ${new Date(item.createdAt).toLocaleString()}
          </small>
        </div>
      </div>
    `).join('');
  }

  _render() {
    const histories = HistoryStorage.getAll();
    const section = document.createElement('section');

    section.innerHTML = `
      <div class="container py-5 mt-5">
        <h2 class="fw-semibold">Riwayat Klasifikasi</h2>
        <small class="text-secondary">
          Daftar makanan yang pernah Anda klasifikasikan
        </small>

        <div class="mt-4 d-flex flex-column gap-3">
          ${histories.length
    ? this._renderHistoryItems(histories)
    : '<p class="text-muted">Belum ada riwayat klasifikasi.</p>'
}
        </div>

        ${histories.length
    ? `<button id="clearHistory" class="btn btn-outline-danger mt-4">
                Hapus Riwayat
              </button>`
    : ''
}
      </div>
    `;

    return section;
  }

  _initializeEvent() {
    const loading = new LoadingCircle();
    const popUp = new Popup();
    const clearBtn = document.getElementById('clearHistory');
    if (!clearBtn) return;

    clearBtn.addEventListener('click', async () => {
      if (await popUp.show('Yakin ingin menghapus semua riwayat?', true)) {
        loading.show();
        setTimeout(() => {
          try {
            HistoryStorage.clear();

            window.location.reload();
          } catch (error) {
            loading.hide();
            popUp.show('Gagal menghapus riwayat');
          }
        }, 500);
      }
    });
  }
}

export default HistoryMenus;

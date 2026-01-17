import Api from '../../utils/api';
import HistoryStorage from '../../utils/historyStorage';

class CekMakanan {
  _render() {
    const section = document.createElement('section');

    section.innerHTML = `
      <div class="container py-5 mt-5">
        <h2 class="fw-semibold">Cek Makanan</h2>

        <input type="file" id="imageInput" accept="image/*" />
        <img id="previewImage" class="d-none mt-3" />

        <button id="analyzeBtn" class="btn btn-warning mt-3">
          Analisis Makanan
        </button>

        <div id="result" class="mt-5"></div>
      </div>
    `;

    return section;
  }

  _initializeEvent() {
    const imageInput = document.getElementById('imageInput');
    const preview = document.getElementById('previewImage');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const result = document.getElementById('result');

    let selectedFile = null;

    imageInput.addEventListener('change', (e) => {
      selectedFile = e.target.files[0];
      if (!selectedFile) return;

      preview.src = URL.createObjectURL(selectedFile);
      preview.classList.remove('d-none');
    });

    analyzeBtn.addEventListener('click', async () => {
      if (!selectedFile) {
        alert('Pilih gambar dulu');
        return;
      }

      result.innerHTML = '<p>Loading...</p>';

      try {
        const response = await Api.predictFood(selectedFile);

        // Save to LocalStorage
        HistoryStorage.save({
          id: Date.now().toString(),
          foodName: response.food_name,
          confidence: response.confidence,
          imageUrl: response.image_url,
          createdAt: new Date().toISOString(),
        });

        result.innerHTML = `
          <h4>${response.food_name}</h4>
          <p>Confidence: ${(response.confidence * 100).toFixed(2)}%</p>
          <img src="${response.image_url}" width="200" />
          <pre>${response.recipe}</pre>
        `;
      } catch (error) {
        result.innerHTML = `<p class="text-danger">${error.message}</p>`;
      }
    });
  }
}

export default CekMakanan;

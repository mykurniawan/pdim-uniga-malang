// Data terjemahan
const translations = {
    en: {
        // navbar
        navHome: "Home",
        navAbout: "About",
        navDaftarDosen: "Lecturers",
        navAkademik: "Academic",
        dropMataKuliah: "Curriculum",
        dropPedomanPendidikan: "Education Guidelines",
        dropeLibrary: "Postgraduate e-Library",
        navDaftar: "REGISTRATION",
        kantor: '0341-562411 (Office)',

        ftr: "The Doctoral Program in Management Science (S3) at Gajayana University, Malang is designed to produce graduates who have high competence in the field of management.",

        dropdownLabel: "English", // Label 
    },
    id: {
        // navbar
        navHome: "Home",
        navAbout: "Tentang",
        navDaftarDosen: "Dosen",
        navAkademik: "Akademik",
        dropMataKuliah: "Kurikulum",

        dropPedomanPendidikan: "Pedoman Pendidikan",
        dropeLibrary: "e-Library Pasca",
        navDaftar: "DAFTAR",
        kantor: "0341-562411 (Kantor)",
        dropdownLabel: "Indonesia", // Label 

        ftr: " Program Doktor Ilmu Manajemen (S3) Universitas Gajayana Malang dirancang untuk mencetak lulusan yang memiliki kompetensi tinggi dalam bidang manajemen.",

    },
};

// Tambahkan Event Listener ke Dropdown Item
document.querySelectorAll(".pick").forEach((item) => {
    item.addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah reload halaman
        const selectedLang = this.getAttribute("data-lang"); // Ambil bahasa yang dipilih
        applyTranslations(selectedLang);
    });
});

// Fungsi untuk Mengganti Teks Elemen
function applyTranslations(lang) {
    if (!translations[lang]) return; // Jika tidak ada terjemahan untuk bahasa tersebut, hentikan

    // Ganti teks elemen dengan terjemahan
    // navbar menu 
    document.getElementById("navHome").textContent =
        translations[lang].navHome;
    document.getElementById("navAbout").textContent =
        translations[lang].navAbout;
    document.getElementById("navDaftarDosen").textContent =
        translations[lang].navDaftarDosen;
    document.getElementById("navAkademik").textContent =
        translations[lang].navAkademik;
    document.getElementById("dropPedomanPendidikan").textContent =
        translations[lang].dropPedomanPendidikan;
    document.getElementById("dropeLibrary").textContent =
        translations[lang].dropeLibrary;
    document.getElementById("navDaftar").textContent =
        translations[lang].navDaftar;
    document.getElementById("kantor").innerHTML = `
        <i class="fas fa-phone-alt"></i> ${translations[lang].kantor}`;

    document.getElementById("dropMataKuliah").textContent =
        translations[lang].dropMataKuliah;

    document.getElementById("ftr").textContent =
        translations[lang].ftr;
    // Ubah label dropdown menjadi bahasa yang dipilih
    document.getElementById("language-selector").innerHTML = `
      <small><i class="fas fa-globe-europe text-primary me-2"></i> ${translations[lang].dropdownLabel}</small>`;
}

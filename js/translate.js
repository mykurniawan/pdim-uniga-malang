// Data terjemahan
const translations = {
  en: {
    alamat: "Mertojoyo St. Block L, Merjosari, District Lowokwaru, Malang City, East Java 65144",
    // navbar
    navHome: "Home",
    navAbout: "About",
    // navTujuan: "objective",
    navDaftarDosen: "Lecturers",
    navAkademik: "Academic",
    dropMataKuliah: "Curriculum",
    dropPedomanPendidikan: "Education Guidelines",
    dropeLibrary: "Postgraduate e-Library",
    navDaftar: "REGISTRATION",
    kantor: '0341-562411 (Office)',

    judulHero: "Management Science Doctoral Program",
    judul1: "Vision and Mission",
    visi: "To become a leading research-based management science doctoral program with international competitiveness by 2036.",
    misi1: "Doctoral Education",
    isiMisi1: "To organize doctoral education and develop internationally competitive management science and be sensitive to socio-economic problems in society.",
    misi2: "Research and Community Service",
    isiMisi2: "Producing research and community service (PKM) works that are useful for the development of education, management science and technology and are beneficial for society at the local, national and international levels.",
    misi3: "Governance",
    isiMisi3: "Managing study programs based on good governance principles.",

    judul2: "Objective",


    judul4: "List of Lecturers",
    dropdownLabel: "English", // Label 

    // tujuan 
    tujuan1: "Producing graduates who have competencies in developing management science with concentrations in strategic management, entrepreneurial management, marketing management and human resource management.",
    tujuan2: "Producing graduates who have the ability to solve problems using scientific principles.",
    tujuan3: "Producing research and community service that is beneficial for the development of theories and practices in the field of management with a national and international reputation.",
    tujuan4: "Creating a quality doctoral study program",

    // Endang
    jabatan1: "Academic Position",
    gbEn: "Professor",
    mnjmnSdm1: "HR Management",
    keahlian1: "Expertise",
    profil1: "Profile",
    // Endang

    // Hadiyati
    jabatan2: "Academic Position",
    gb2: "Professor",
    keahlian2: "Expertise",
    mnK: "Entrepreneurship Management",
    profil2: "Profile",
    // Hadiyati

    // Sawitri
    jabatan3: "Academic Position",
    gb3: "Professor",
    keahlian3: "Expertise",
    // mnSt:"Strategic Management",
    profil3: "Profile",
    // Sawitri

    ftr: "The Doctoral Program in Management Science (S3) at Gajayana University, Malang is designed to produce graduates who have high competence in the field of management.",
    deskDD: "The lecturers in the Doctoral Program in Management Science (PDIM) UNIGA are professional teaching staff with strong academic backgrounds and extensive experience in the field of management. They play an important role in developing students' potential through learning, research, and community service. The following are some of the lecturers who are members of PDIM UNIGA, ready to guide and provide real contributions to the world of education and science."
  },
  id: {
    alamat: "Jl. Mertojoyo Blok L, Merjosari, Kec. Lowokwaru, Kota Malang, Jawa Timur 65144",
    // navbar
    navHome: "Home",
    navAbout: "Tentang",
    // navTujuan: "Tujuan",
    navDaftarDosen: "Dosen",
    navAkademik: "Akademik",
    dropMataKuliah: "Kurikulum",

    dropPedomanPendidikan: "Pedoman Pendidikan",
    dropeLibrary: "e-Library Pasca",
    navDaftar: "DAFTAR",
    kantor: "0341-562411 (Kantor)",
    judulHero: "Program Doktor Imlu Manajemen (S3)",

    judul1: "Visi dan Misi",
    visi: "Menjadi program doktor ilmu manajemen unggulan berbasis riset berdaya saing internasional tahun 2036.",
    misi1: "Pendidikan Doktoral",
    isiMisi1: "Menyelenggarakan pendidikan doktoral dan pengembangan ilmu manajemen berdaya saing internasional dan mempunyai kepekaan terhadap masalah-masalah sosial ekonomi di masyarakat.",
    misi2: "Penelitian dan Pengabdian",
    isiMisi2: "Menghasilkan karya penelitian dan pengabdian kepada masyarakat (PKM) yang berdaya guna bagi pengembangan pendidikan, ilmu pengetahuan manajemen dan teknologi serta bermanfaat bagi masyarakat di tingkat lokal, nasional maupun internasional.",
    misi3: "Tata Kelola",
    isiMisi3: "Mengelola program studi berbasis prinsip tata kelola yang baik.",
    // misi4: "Kerjasama",
    // isiMisi4: "Membina kerjasama yang sinergis dengan berbagai pihak, baik akademik, industri, maupun pemerintah untuk mendukung pengembangan ilmu dan penerapan manajemen.",

    judul2: "Tujuan",

    // judul3: "Capaian Pembelajaran",

    judul4: "Daftar Dosen",
    dropdownLabel: "Indonesia", // Label 

    // tujuan 
    tujuan1: "Menghasilkan lulusan yang memiliki kompetensi pengembangan ilmu manajemen dengan peminatan konsentrasi manajemen strategik, manajemen kewirausahaan, manajemen pemasaran dan manajemen sumber daya manusia.",
    tujuan2: "Menghasilkan lulusan yang memiliki kemampuan untuk memecahkan permasalahan dengan menggunakan kaidah ilmiah.",
    tujuan3: "Menghasilkan penelitian dan pengabdian masyarakat yang bermanfaat bagi pengembangan teori dan praktik dibidang manajemen yang bereputasi nasional dan internasional.",
    tujuan4: "Mewujudkan program studi doktoral yang berkualitas",

    deskDD: "Para dosen di Program Doktor Ilmu Manajemen (PDIM) UNIGA merupakan tenaga pengajar profesional dengan latar belakang akademik yang kuat serta pengalaman luas dalam bidang manajemen. Mereka berperan penting dalam mengembangkan potensi mahasiswa melalui pembelajaran, penelitian, dan pengabdian kepada masyarakat. Berikut adalah beberapa dosen yang tergabung dalam PDIM UNIGA, siap membimbing dan memberikan kontribusi nyata dalam dunia pendidikan dan keilmuan.",
    // jabatan keahlian
   
    // Sawitri

    // Martaleni
    // jabatanMartaleni:

    // Martaleni
    ftr: " Program Doktor Ilmu Manajemen (S3) Universitas Gajayana Malang dirancang untuk mencetak lulusan yang memiliki kompetensi tinggi dalam bidang manajemen."
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
  document.getElementById("alamat").innerHTML = `
  <i class="fas fa-map-marker-alt text-primary me-2"></i> ${translations[lang].alamat}`;
  document.getElementById("navHome").textContent =
    translations[lang].navHome;
  document.getElementById("navAbout").textContent =
    translations[lang].navAbout;
  // document.getElementById("navTujuan").textContent =
  //   translations[lang].navTujuan;
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

  document.getElementById("judulHero").textContent =
    translations[lang].judulHero;

  document.getElementById("judul1").textContent =
    translations[lang].judul1;
  document.getElementById("visi").textContent =
    translations[lang].visi;

  //misi
  document.getElementById("misi1").textContent =
    translations[lang].misi1;
  document.getElementById("isiMisi1").textContent =
    translations[lang].isiMisi1;
  document.getElementById("misi2").textContent =
    translations[lang].misi2;
  document.getElementById("isiMisi2").textContent =
    translations[lang].isiMisi2;
  document.getElementById("misi3").textContent =
    translations[lang].misi3;
  document.getElementById("isiMisi3").textContent =
    translations[lang].isiMisi3;



  // tujuan 
  document.getElementById("tujuan1").innerHTML = `
  <i class="fa fa-check text-primary me-3"></i> ${translations[lang].tujuan1}`;
  document.getElementById("tujuan2").innerHTML = `
  <i class="fa fa-check text-primary me-3"></i> ${translations[lang].tujuan2}`;
  document.getElementById("tujuan3").innerHTML = `
  <i class="fa fa-check text-primary me-3"></i> ${translations[lang].tujuan3}`;
  document.getElementById("tujuan4").innerHTML = `
  <i class="fa fa-check text-primary me-3"></i> ${translations[lang].tujuan4}`;


  document.getElementById("judul2").textContent =
    translations[lang].judul2;

  document.getElementById("judul4").textContent =
    translations[lang].judul4;


  document.getElementById("ftr").textContent =
    translations[lang].ftr;

  document.getElementById("deskDD").textContent =
    translations[lang].deskDD;

  



  // document.getElementById("jabatan1").innerHTML = `
  // <p class="mb-0"> <span class="text-primary">${jabatan1}</span> </p>`;
  // Ubah label dropdown menjadi bahasa yang dipilih
  document.getElementById("language-selector").innerHTML = `
    <small><i class="fas fa-globe-europe text-primary me-2"></i> ${translations[lang].dropdownLabel}</small>`;
}

const stored = [
  { text: "Menyajikan informasi anime dengan rapi", status: true },
  { text: "Desain minimalis dan simpel", status: true },
  { text: "Konten mudah diakses", status: true },
  { text: "Navigasi sederhana", status: true },
  { text: "Artikel informatif untuk penggemar anime", status: true },
  { text: "Loading cepat", status: true },
  { text: "Mudah diakses di perangkat mobile", status: true },
  { text: "Desain responsif", status: true },
  { text: "Bisa ditingkatkan pada bagian UI", status: true },
  { text: "Butuh lebih banyak kategori", status: true },
  { text: "Tidak ada iklan mengganggu", status: true },
  { text: "selalu update rekomendasi keren", status: true },
  { text: "Ulasan anime sangat membantu", status: true },
  { text: "Banyak info anime baru setiap hari", status: true },
  { text: "Karakter anime dijelaskan keren banget", status: true },
  { text: "Web nya bagus dan detail", status: true },
  { text: "Banyak rekomendasi anime keren", status: true },
  { text: "Kurang interaktif", status: true },

  { text: "Tampilan desainnya modern dan rapi, cocok untuk pecinta anime. Saya suka penataan kategorinya", status: true },
  { text: "Bagian review animenya sangat membantu dalam memilih anime untuk ditonton, terutama untuk genre action.", status: true },
  { text: "Informasi yang diberikan sangat akurat dan tidak bertele-tele. Selalu menyajikan konten yang relevan", status: true },
  { text: "Website ini sangat ramah pengguna dan mudah digunakan, bahkan bagi pengunjung baru yang belum terbiasa", status: true },
  { text: "Situs yang ideal untuk mencari informasi tentang anime-anime underrated yang jarang diulas oleh website mainstream", status: true },
  { text: "Review animenya tidak bias dan memberikan sudut pandang objektif. Sangat membantu dalam memilih anime baru", status: true },
  { text: "Desain responsif dan mobile-friendly, bagus untuk diakses di perangkat apapun tanpa kehilangan kualitas tampilan", status: true },
  { text: "Sistem pencarian yang efektif, buat saya bisa menemukan anime yang saya inginkan dengan cepat", status: true },

  { text: "Bagus jika ditambahkan fitur filter genre yang lebih lengkap agar pengunjung bisa sortir konten sesuai minat", status: true },
  { text: "Ada beberapa bagian terlalu polos. Mungkin bisa tambah visual seperti icon atau animasi ringan untuk membuat pengalaman lebih interaktif.", status: true },
  { text: "jika memungkinkan tambahkan bagian komentar di setiap artikel", status: true },
  { text: "Fitur pencariannya kurang optimal. bisa ditingkatkan dengan tambah opsi pencarian seperti filter berdasarkan tahun rilis, studio, atau popularitas", status: true },

  
];

export const sentence = stored.filter((data) => data.status === true);

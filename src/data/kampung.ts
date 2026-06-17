// Data Resmi Kampung Lotaq
// Sumber: Pemerintah Kampung Lotaq, 2026

export const kampung = {
  // Identitas Resmi
  nama: 'Kampung Lotaq',
  namaLengkap: 'Pemerintah Kampung Lotaq',
  kecamatan: 'Muara Lawa',
  kabupaten: 'Kutai Barat',
  provinsi: 'Kalimantan Timur',
  kodePos: '75575',
  kodeWilayah: '64.07.09.2002',

  // Kontak
  email: 'kpglotaq@gmail.com',
  alamat: 'Kampung Lotaq, Kecamatan Muara Lawa, Kabupaten Kutai Barat, Kalimantan Timur 75575',

  // Domain
  website: 'https://lotaq.desa.id',
  domain: 'lotaq.desa.id',

  // Identitas Visual
  slogan: 'Maju Mandiri Sejahtera',
  taglineSecondary: 'Bumi Kekayaan Tropis Kalimantan',

  // Jam Operasional Kantor
  jamOperasional: {
    seninKamis: '08.00 - 15.00 WITA',
    jumat: '08.00 - 11.00 WITA',
    sabtuMinggu: 'Tutup'
  }
};

export const petinggi = {
  nama: 'KARYA MUSNI. Y',
  jabatan: 'Petinggi Kampung Lotaq',
  periode: '2021 - 2029',
  foto: '/foto-petinggi.png', // Akan diupload nanti
  sambutan: {
    pembuka: 'Assalamualaikum Warahmatullahi Wabarakatuh, Salam Sejahtera bagi kita semua.',
    paragraf1: 'Selamat datang di portal resmi Pemerintah Kampung Lotaq. Atas nama seluruh aparatur Kampung dan masyarakat, kami menyambut Bapak/Ibu dengan tangan terbuka.',
    paragraf2: 'Kampung Lotaq adalah kampung yang kaya akan potensi alam, budaya, dan sumber daya manusia. Berlandaskan visi "Maju Mandiri Sejahtera", kami bertekad membangun kampung yang tidak hanya berdaya secara ekonomi, tetapi juga mandiri dalam mengelola sumber daya, serta sejahtera dalam kehidupan sosial dan spiritual masyarakat.',
    paragraf3: 'Melalui website ini, kami berharap dapat menjadi jembatan informasi yang transparan antara pemerintah kampung dengan masyarakat luas. Informasi tentang program pembangunan, potensi unggulan, hingga layanan publik dapat diakses dengan mudah.',
    paragraf4: 'Mari bersama-sama kita wujudkan Kampung Lotaq sebagai kampung yang maju, kuat, dan menjadi kebanggaan Kabupaten Kutai Barat. Terima kasih atas kunjungan dan kepercayaan Anda.',
    penutup: 'Wassalamualaikum Warahmatullahi Wabarakatuh.'
  }
};

export const potensiUnggulan = [
  {
    id: 'wisata',
    icon: '🏞️',
    nama: 'Pariwisata',
    deskripsi: 'Keindahan alam, sungai, dan kekayaan budaya Dayak yang autentik',
    detail: 'Kampung Lotaq menawarkan pengalaman wisata alam yang autentik dengan panorama hutan tropis Kalimantan, sungai jernih, dan kearifan lokal masyarakat adat.',
    warna: 'sunset'
  },
  {
    id: 'pertanian',
    icon: '🌾',
    nama: 'Pertanian',
    deskripsi: 'Padi gunung, palawija, dan tanaman pangan unggulan',
    detail: 'Lahan pertanian yang subur menghasilkan padi, jagung, dan berbagai tanaman pangan lokal yang menjadi tulang punggung ekonomi masyarakat.',
    warna: 'sawah'
  },
  {
    id: 'perkebunan',
    icon: '🌳',
    nama: 'Perkebunan',
    deskripsi: 'Karet, kelapa sawit, dan komoditas perkebunan unggulan',
    detail: 'Hasil perkebunan menjadi salah satu pilar utama perekonomian kampung, dengan komoditas unggulan yang dikelola secara berkelanjutan.',
    warna: 'tanah'
  },
  {
    id: 'perikanan',
    icon: '🐟',
    nama: 'Perikanan',
    deskripsi: 'Budidaya ikan air tawar dan hasil tangkap sungai',
    detail: 'Kekayaan sungai dan kolam budidaya memberikan hasil perikanan yang berkualitas, mendukung ketahanan pangan dan ekonomi keluarga.',
    warna: 'sawah'
  }
];

export const statistik = [
  { label: 'Penduduk', nilai: '—', satuan: 'jiwa', icon: '👥', catatan: 'Data dalam pemutakhiran' },
  { label: 'Kepala Keluarga', nilai: '—', satuan: 'KK', icon: '🏠', catatan: 'Data dalam pemutakhiran' },
  { label: 'Potensi Unggulan', nilai: '4', satuan: 'sektor', icon: '🌾', catatan: 'Wisata, Tani, Kebun, Ikan' },
  { label: 'Periode Petinggi', nilai: '2021-2029', satuan: '', icon: '🏛️', catatan: 'KARYA MUSNI. Y' }
];

export const visiMisi = {
  visi: 'Maju Mandiri Sejahtera',
  visiPanjang: 'Mewujudkan Kampung Lotaq yang Maju dalam pembangunan, Mandiri dalam pengelolaan sumber daya, dan Sejahtera dalam kehidupan masyarakat.',
  misi: [
    {
      nomor: '01',
      judul: 'Pembangunan Infrastruktur',
      deskripsi: 'Memperkuat infrastruktur dasar kampung untuk mendukung mobilitas dan aktivitas ekonomi masyarakat.'
    },
    {
      nomor: '02',
      judul: 'Pemberdayaan Ekonomi',
      deskripsi: 'Mengembangkan potensi pertanian, perkebunan, perikanan, dan UMKM lokal sebagai motor ekonomi kampung.'
    },
    {
      nomor: '03',
      judul: 'Pengelolaan Sumber Daya',
      deskripsi: 'Memanfaatkan kekayaan alam secara bijak dan berkelanjutan untuk kesejahteraan generasi sekarang dan mendatang.'
    },
    {
      nomor: '04',
      judul: 'Pelayanan Publik Prima',
      deskripsi: 'Menyelenggarakan pemerintahan kampung yang transparan, akuntabel, dan responsif terhadap kebutuhan warga.'
    },
    {
      nomor: '05',
      judul: 'Pelestarian Budaya',
      deskripsi: 'Menjaga dan mengembangkan kearifan lokal serta tradisi budaya sebagai identitas Kampung Lotaq.'
    }
  ]
};

export const beritaContoh = [
  {
    slug: 'sambutan-petinggi-kampung-2026',
    judul: 'Petinggi Kampung Sampaikan Visi Pembangunan 2026',
    tanggal: '2026-06-15',
    kategori: 'Pemerintahan',
    ringkasan: 'Bapak KARYA MUSNI. Y menyampaikan rencana strategis pembangunan Kampung Lotaq untuk tahun 2026 yang fokus pada penguatan ekonomi berbasis potensi lokal.',
    gambar: '/berita-placeholder-1.jpg'
  },
  {
    slug: 'panen-raya-padi-gunung',
    judul: 'Panen Raya Padi Gunung di Kampung Lotaq',
    tanggal: '2026-06-10',
    kategori: 'Pertanian',
    ringkasan: 'Masyarakat petani Kampung Lotaq melaksanakan panen raya padi gunung dengan hasil melimpah, menjadi penanda ketahanan pangan kampung yang semakin kuat.',
    gambar: '/berita-placeholder-2.jpg'
  },
  {
    slug: 'website-resmi-diluncurkan',
    judul: 'Pemerintah Kampung Lotaq Luncurkan Website Resmi',
    tanggal: '2026-06-17',
    kategori: 'Teknologi',
    ringkasan: 'Pemerintah Kampung Lotaq meluncurkan portal resmi lotaq.desa.id sebagai langkah transformasi digital pelayanan publik dan transparansi informasi.',
    gambar: '/berita-placeholder-3.jpg'
  }
];

export const navigasi = [
  { label: 'Beranda', href: '/' },
  { label: 'Profil', href: '/profil' },
  { label: 'Potensi', href: '/potensi' },
  { label: 'Berita', href: '/berita' },
  { label: 'Kontak', href: '/kontak' }
];

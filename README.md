# Devilline DSS

Decision support system untuk kajian eksplorasi Ramba Joring, OlympiAR 2026. Situs ini berdiri sendiri dan diterbitkan melalui GitHub Pages.

**Situs:** https://dzakyzahy.github.io/devilline-dss/

## Isi

- Telaah C-N, S-1, dan target arsip; sensitivitas radius serta multiplicity lokasi.
- Terrain DEMNAS lokal 2,2 × 2,2 km dan regional 20 × 20 km. Kamera tanpa rotasi otomatis; drag untuk putar atau geser, scroll untuk zoom, dan tombol Reset.
- Data assay, collar, sampel permukaan, serta screening NAG pada RJDH012.
- Metodologi, gambar pendukung Laporan Devilline, dan profil tim. Foto ketiga anggota menggunakan aset yang diberikan tim.
- Galeri beranda berisi peta wilayah dan tiga gambar laporan, berganti otomatis setiap 4 detik dengan transisi 1,5 detik. Kontrol ringkas berupa panah sebelumnya, keterangan gambar, dan panah berikutnya. Pemilihan manual memulai ulang jeda 4 detik; preferensi pengurangan gerak mematikan putar otomatis.

## Pengembangan

Memerlukan Node.js 24 atau versi yang didukung Vite.

```sh
npm ci
npm test
npm run dev
npm run build
```

`src/` berisi aplikasi React dan modul perhitungan. `public/` memuat data serta aset. Hasil build `docs/` diterbitkan dari branch `main`; base path relatif dan navigasi hash mendukung URL proyek GitHub Pages. `.nojekyll` disalin saat build. Semua pustaka dan font disajikan lokal.

## Data dan batas interpretasi

Sumber isi adalah Laporan Devilline serta paket data peserta yang direkonsiliasi. Berkas sumber asli tidak disertakan dalam repositori ini. Manifest berada di `public/data/provenance.json` dan `terrain-provenance.json`.

Pemeriksaan independen: 799 cek lulus, 3.065 record/23.146 nilai sumber, 355 record sampel berstrata (seed 20261107), geometri bor, dan 54 titik DEMNAS. Ini menguji transfer data dan konsistensi perhitungan, bukan QA/QC laboratorium.

CRS collar adalah WGS 84 / UTM 47N. Penempatan data permukaan mengikuti konteks paket. Unduhan DEMNAS tidak memiliki tag CRS; EPSG:4326 ditetapkan berdasarkan geotransform dan metadata resmi BIG. Resampling tidak menambah akurasi sumber. RL collar dipertahankan tanpa penyesuaian otomatis terhadap terrain.

NAG hanya tersedia pada RJDH012. Rasio AuCN/Au bukan recovery. Stasiun dan opsi bor adalah rancangan konseptual; status prasyarat yang diisi pengguna tidak mengesahkan pengeboran. Catatan prasyarat disimpan lokal pada browser.

## Aset dan pustaka

Layout diadaptasi dari referensi Cirata yang disediakan pemilik proyek. Logo milik masing-masing institusi/penyelenggara. Foto anggota dipakai dari aset referensi yang diberikan. Citra satelit beranda menggunakan maps1 yang diberikan tim (Google Maps; Airbus, CNES / Airbus, Maxar Technologies). Gambar terrain berasal dari DEMNAS BIG; gambar kajian berasal dari Laporan Devilline. Lihat `THIRD_PARTY.md` untuk pustaka.

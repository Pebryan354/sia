<script setup>
useHead({
  title: "Biodata - SIA UNIVERSITAS",
});

// Data statis mahasiswa (nanti bisa diganti dari API)
const mahasiswa = ref({
  nama: "Pebryan Ibrahim",
  nim: "202301045",
  prodi: "Agroteknologi",
  semester: 3,
  status: "Aktif",
  foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaobLGq8wbA6Lxf8a1vMYZONHPgM3xPNMi5hrCOPJ3AHQNaGihxuVrKy6A-zZhRj9dLM8ZM80kpphnEN-Rh4opd_I_VQ-L38k_oz5CEZiVZuEBsMoSGZsgiZweL0pl1syhkePFfX9YIWKWF8aJ4IZNcuSixSaCG4UYxj-B1V6svNfdfonTugHKNH9dB7UjQgoZefU9La8Fji3TK1MARn1RM8dQbUvyyLqKVGxqvX1tQHCPSVbu360wx7ZU0FhcFhiDHTmPbZceqQ",
  ttl: "Yogyakarta, 15 Agustus 2003",
  jenisKelamin: "Laki-laki",
  agama: "Islam",
  golDarah: "O",
  alamatAsal: "Jl. Kaliurang Km. 10, Ngaglik, Sleman, DI Yogyakarta 55581",
  alamatDomisili: "Jl. Ringroad Utara No. 12, Depok, Sleman",
  noHp: "0812-3456-7890",
  email: "pebryanibrahim98@gmail.com",
});

const dokumen = ref([
  {
    nama: "Ijazah SMA",
    status: "Terverifikasi",
    icon: "picture_as_pdf",
    bgClass: "bg-error-container",
    textClass: "text-on-error-container",
  },
  {
    nama: "KTP",
    status: "Terverifikasi",
    icon: "badge",
    bgClass: "bg-primary-fixed",
    textClass: "text-on-primary-fixed",
  },
  {
    nama: "Kartu Keluarga",
    status: "Terverifikasi",
    icon: "family_history",
    bgClass: "bg-tertiary-fixed",
    textClass: "text-on-tertiary-fixed",
  },
]);

const dataAyah = ref({
  nama: "Kusnadi",
  statusHidup: "Masih Hidup",
  pekerjaan: "PNS",
  pendidikan: "S1",
  penghasilan: "Rp5.000.000 - Rp10.000.000",
});

const dataIbu = ref({
  nama: "Andi Aswita",
  statusHidup: "Masih Hidup",
  pekerjaan: "Ibu Rumah Tangga",
  pendidikan: "SMA",
  penghasilan: "Tidak Berpenghasilan",
});
</script>

<template>
  <div class="flex flex-col gap-sm">
    <!-- Page Header / Profile Summary -->
    <div
      class="bg-surface-container-lowest rounded-xl shadow-level-1 p-md flex flex-col md:flex-row items-center md:items-start gap-md border border-outline-variant/20"
    >
      <div class="relative">
        <img
          alt="Student Profile"
          class="w-32 h-32 rounded-full object-cover border-4 border-surface"
          :src="mahasiswa.foto"
        />
        <button
          class="absolute bottom-0 right-0 bg-primary text-on-primary w-10 h-10 rounded-full shadow-level-2 hover:bg-surface-tint transition-colors flex items-center justify-center"
        >
          <span class="material-symbols-outlined text-[20px]">edit</span>
        </button>
      </div>
      <div
        class="flex-1 text-center md:text-left flex flex-col justify-center h-full mt-sm md:mt-0"
      >
        <h1 class="font-h1 text-h1 text-on-surface mb-xs">
          {{ mahasiswa.nama }}
        </h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant mb-base">
          NIM: {{ mahasiswa.nim }}
        </p>
        <div
          class="flex flex-wrap justify-center md:justify-start gap-sm mt-sm"
        >
          <span
            class="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm"
            >{{ mahasiswa.prodi }}</span
          >
          <span
            class="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm"
            >Semester {{ mahasiswa.semester }}</span
          >
          <span
            class="px-3 py-1 rounded-full bg-primary-fixed-dim/20 text-primary font-label-sm text-label-sm border border-primary/20"
            >Status: {{ mahasiswa.status }}</span
          >
        </div>
      </div>
      <div class="mt-md md:mt-0">
        <button
          class="bg-surface text-secondary border border-secondary px-4 py-2 rounded-DEFAULT font-label-md text-label-md hover:bg-surface-container-low transition-colors"
        >
          Cetak Transkrip
        </button>
      </div>
    </div>

    <!-- Bento Grid Layout for Data Sections -->
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-md">
      <!-- Personal Data (Spans 2 columns on extra large screens) -->
      <div
        class="xl:col-span-2 bg-surface-container-lowest rounded-xl shadow-level-1 p-md border border-outline-variant/20 flex flex-col"
      >
        <div
          class="flex justify-between items-center mb-md border-b border-outline-variant/30 pb-sm"
        >
          <h2 class="font-h2 text-h2 text-primary flex items-center gap-2">
            <span class="material-symbols-outlined">badge</span>
            Data Pribadi
          </h2>
          <button
            class="text-secondary hover:text-primary transition-colors flex items-center gap-1 font-label-md text-label-md"
          >
            <span class="material-symbols-outlined text-[18px]">edit</span>
            Edit
          </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-md gap-x-gutter">
          <div>
            <span class="block font-label-sm text-label-sm text-outline mb-xs"
              >Tempat, Tanggal Lahir</span
            >
            <span class="font-body-md text-body-md text-on-surface">{{
              mahasiswa.ttl
            }}</span>
          </div>
          <div>
            <span class="block font-label-sm text-label-sm text-outline mb-xs"
              >Jenis Kelamin</span
            >
            <span class="font-body-md text-body-md text-on-surface">{{
              mahasiswa.jenisKelamin
            }}</span>
          </div>
          <div>
            <span class="block font-label-sm text-label-sm text-outline mb-xs"
              >Agama</span
            >
            <span class="font-body-md text-body-md text-on-surface">{{
              mahasiswa.agama
            }}</span>
          </div>
          <div>
            <span class="block font-label-sm text-label-sm text-outline mb-xs"
              >Golongan Darah</span
            >
            <span class="font-body-md text-body-md text-on-surface">{{
              mahasiswa.golDarah
            }}</span>
          </div>
          <div class="md:col-span-2">
            <span class="block font-label-sm text-label-sm text-outline mb-xs"
              >Alamat Asal</span
            >
            <span class="font-body-md text-body-md text-on-surface">{{
              mahasiswa.alamatAsal
            }}</span>
          </div>
          <div class="md:col-span-2">
            <span class="block font-label-sm text-label-sm text-outline mb-xs"
              >Alamat Domisili (Kos)</span
            >
            <span class="font-body-md text-body-md text-on-surface">{{
              mahasiswa.alamatDomisili
            }}</span>
          </div>
          <div>
            <span class="block font-label-sm text-label-sm text-outline mb-xs"
              >No. Handphone</span
            >
            <span class="font-body-md text-body-md text-on-surface">{{
              mahasiswa.noHp
            }}</span>
          </div>
          <div>
            <span class="block font-label-sm text-label-sm text-outline mb-xs"
              >Email Pribadi</span
            >
            <span class="font-body-md text-body-md text-on-surface">{{
              mahasiswa.email
            }}</span>
          </div>
        </div>
      </div>

      <!-- Academic Documents -->
      <div
        class="bg-surface-container-lowest rounded-xl shadow-level-1 p-md border border-outline-variant/20 flex flex-col"
      >
        <div
          class="flex justify-between items-center mb-md border-b border-outline-variant/30 pb-sm"
        >
          <h2 class="font-h3 text-h3 text-primary flex items-center gap-2">
            <span class="material-symbols-outlined">folder_open</span>
            Dokumen
          </h2>
        </div>
        <ul class="flex flex-col gap-sm">
          <li
            v-for="doc in dokumen"
            :key="doc.nama"
            class="flex items-center justify-between p-sm rounded-lg hover:bg-surface-container-low transition-colors border border-transparent hover:border-outline-variant/30"
          >
            <div class="flex items-center gap-sm">
              <div
                :class="[doc.bgClass, doc.textClass]"
                class="p-2 rounded-DEFAULT"
              >
                <span class="material-symbols-outlined">{{ doc.icon }}</span>
              </div>
              <div>
                <span
                  class="block font-label-md text-label-md text-on-surface"
                  >{{ doc.nama }}</span
                >
                <span class="font-label-sm text-label-sm text-outline">{{
                  doc.status
                }}</span>
              </div>
            </div>
            <button class="text-secondary hover:text-primary">
              <span class="material-symbols-outlined">visibility</span>
            </button>
          </li>
        </ul>
        <button
          class="mt-auto pt-md text-secondary font-label-md text-label-md flex items-center justify-center gap-2 hover:text-primary transition-colors w-full"
        >
          <span class="material-symbols-outlined">upload</span> Upload Dokumen
          Baru
        </button>
      </div>

      <!-- Family Data (Full width below) -->
      <div
        class="xl:col-span-3 bg-surface-container-lowest rounded-xl shadow-level-1 p-md border border-outline-variant/20"
      >
        <div
          class="flex justify-between items-center mb-md border-b border-outline-variant/30 pb-sm"
        >
          <h2 class="font-h2 text-h2 text-primary flex items-center gap-2">
            <span class="material-symbols-outlined">diversity_3</span>
            Data Keluarga
          </h2>
          <button
            class="text-secondary hover:text-primary transition-colors flex items-center gap-1 font-label-md text-label-md"
          >
            <span class="material-symbols-outlined text-[18px]">edit</span>
            Edit
          </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <!-- Ayah -->
          <div
            class="bg-surface p-md rounded-lg border border-outline-variant/20"
          >
            <h3 class="font-h3 text-h3 text-on-surface mb-md">Data Ayah</h3>
            <div class="flex flex-col gap-sm">
              <div
                class="flex justify-between border-b border-outline-variant/20 pb-xs"
              >
                <span class="font-label-sm text-label-sm text-outline"
                  >Nama Lengkap</span
                >
                <span
                  class="font-body-sm text-body-sm text-on-surface font-medium"
                  >{{ dataAyah.nama }}</span
                >
              </div>
              <div
                class="flex justify-between border-b border-outline-variant/20 pb-xs"
              >
                <span class="font-label-sm text-label-sm text-outline"
                  >Status Hidup</span
                >
                <span
                  class="font-body-sm text-body-sm text-on-surface font-medium"
                  >{{ dataAyah.statusHidup }}</span
                >
              </div>
              <div
                class="flex justify-between border-b border-outline-variant/20 pb-xs"
              >
                <span class="font-label-sm text-label-sm text-outline"
                  >Pekerjaan</span
                >
                <span
                  class="font-body-sm text-body-sm text-on-surface font-medium"
                  >{{ dataAyah.pekerjaan }}</span
                >
              </div>
              <div
                class="flex justify-between border-b border-outline-variant/20 pb-xs"
              >
                <span class="font-label-sm text-label-sm text-outline"
                  >Pendidikan Terakhir</span
                >
                <span
                  class="font-body-sm text-body-sm text-on-surface font-medium"
                  >{{ dataAyah.pendidikan }}</span
                >
              </div>
              <div class="flex justify-between">
                <span class="font-label-sm text-label-sm text-outline"
                  >Penghasilan</span
                >
                <span
                  class="font-body-sm text-body-sm text-on-surface font-medium"
                  >{{ dataAyah.penghasilan }}</span
                >
              </div>
            </div>
          </div>
          <!-- Ibu -->
          <div
            class="bg-surface p-md rounded-lg border border-outline-variant/20"
          >
            <h3 class="font-h3 text-h3 text-on-surface mb-md">Data Ibu</h3>
            <div class="flex flex-col gap-sm">
              <div
                class="flex justify-between border-b border-outline-variant/20 pb-xs"
              >
                <span class="font-label-sm text-label-sm text-outline"
                  >Nama Lengkap</span
                >
                <span
                  class="font-body-sm text-body-sm text-on-surface font-medium"
                  >{{ dataIbu.nama }}</span
                >
              </div>
              <div
                class="flex justify-between border-b border-outline-variant/20 pb-xs"
              >
                <span class="font-label-sm text-label-sm text-outline"
                  >Status Hidup</span
                >
                <span
                  class="font-body-sm text-body-sm text-on-surface font-medium"
                  >{{ dataIbu.statusHidup }}</span
                >
              </div>
              <div
                class="flex justify-between border-b border-outline-variant/20 pb-xs"
              >
                <span class="font-label-sm text-label-sm text-outline"
                  >Pekerjaan</span
                >
                <span
                  class="font-body-sm text-body-sm text-on-surface font-medium"
                  >{{ dataIbu.pekerjaan }}</span
                >
              </div>
              <div
                class="flex justify-between border-b border-outline-variant/20 pb-xs"
              >
                <span class="font-label-sm text-label-sm text-outline"
                  >Pendidikan Terakhir</span
                >
                <span
                  class="font-body-sm text-body-sm text-on-surface font-medium"
                  >{{ dataIbu.pendidikan }}</span
                >
              </div>
              <div class="flex justify-between">
                <span class="font-label-sm text-label-sm text-outline"
                  >Penghasilan</span
                >
                <span
                  class="font-body-sm text-body-sm text-on-surface font-medium"
                  >{{ dataIbu.penghasilan }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

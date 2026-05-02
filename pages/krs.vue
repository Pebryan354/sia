<script setup>
useHead({
  title: "KRS Online - SIA INSTIPER",
});

const courses = [
  {
    kode: "AGT101",
    nama: "Pengantar Ilmu Pertanian",
    prodi: "Prodi Agroteknologi",
    sks: 3,
    jadwal: "Senin, 08:00 - 10:30",
    ruang: "Ruang B.1.2",
    dosen: "Dr. Ir. Budi Santoso, M.P.",
    conflict: false,
  },
  {
    kode: "AGT102",
    nama: "Dasar-dasar Agronomi",
    prodi: "Prodi Agroteknologi",
    sks: 3,
    jadwal: "Selasa, 13:00 - 15:30",
    ruang: "Ruang C.2.1",
    dosen: "Prof. Dr. Siti Aminah, M.Sc.",
    conflict: false,
  },
  {
    kode: "MKK101",
    nama: "Biologi Dasar",
    prodi: "Mata Kuliah Umum",
    sks: 2,
    jadwal: "Senin, 08:00 - 09:40",
    ruang: "Bentrok Jadwal",
    dosen: "Ir. Wahyu Hidayat, Ph.D.",
    conflict: true,
  },
  {
    kode: "AGT103",
    nama: "Agroklimatologi",
    prodi: "Prodi Agroteknologi",
    sks: 3,
    jadwal: "Rabu, 10:00 - 12:30",
    ruang: "Ruang A.1.4",
    dosen: "Dr. Ir. Budi Santoso, M.P.",
    conflict: false,
  },
];

const totalSks = ref(0);
const maxSks = 24;
</script>

<template>
  <div class="flex flex-col gap-sm">
    <!-- Page Header -->
    <div class="mb-2">
      <h1 class="text-h1 font-h1 text-on-surface mb-xs">KRS Online</h1>
      <p
        class="text-body-md font-body-md text-on-surface-variant flex items-center gap-2"
      >
        <span class="material-symbols-outlined text-sm">date_range</span>
        Semester Ganjil 2024/2025
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
      <!-- Left Column: Course Selection -->
      <div class="lg:col-span-8 flex flex-col gap-md">
        <!-- Search & Filter Bar -->
        <div
          class="bg-surface-container-lowest rounded-xl p-sm shadow-level-1 flex flex-col sm:flex-row gap-sm items-center border border-outline-variant/20"
        >
          <div class="relative flex-1 w-full">
            <span
              class="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline"
              >search</span
            >
            <input
              class="w-full pl-lg pr-sm py-2 bg-surface-bright border border-outline-variant rounded-lg text-body-md font-body-md text-on-surface focus:outline-none focus:border-secondary transition-all"
              placeholder="Cari Mata Kuliah..."
              type="text"
            />
          </div>
          <div class="flex gap-sm w-full sm:w-auto">
            <select
              class="flex-1 sm:w-auto px-md py-2 bg-surface-bright border border-outline-variant rounded-lg text-label-md font-label-md text-on-surface appearance-none cursor-pointer"
            >
              <option>Semua Semester</option>
              <option>Semester 1</option>
              <option>Semester 3</option>
            </select>
            <button
              class="p-2 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors flex items-center justify-center"
            >
              <span class="material-symbols-outlined">tune</span>
            </button>
          </div>
        </div>

        <!-- Course Table -->
        <div
          class="bg-surface-container-lowest rounded-xl shadow-level-1 overflow-hidden border border-outline-variant/20"
        >
          <div class="p-md border-b border-surface-variant">
            <h2 class="text-h3 font-h3 text-on-surface">
              Daftar Mata Kuliah Ditawarkan
            </h2>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr
                  class="bg-surface-container-low border-b border-surface-variant"
                >
                  <th
                    class="py-sm px-md text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider"
                  >
                    Mata Kuliah
                  </th>
                  <th
                    class="py-sm px-md text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider text-center"
                  >
                    SKS
                  </th>
                  <th
                    class="py-sm px-md text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider"
                  >
                    Jadwal
                  </th>
                  <th
                    class="py-sm px-md text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider text-right"
                  >
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="course in courses"
                  :key="course.kode"
                  class="border-b border-surface-variant hover:bg-surface-bright transition-colors"
                >
                  <td class="py-md px-md">
                    <div
                      class="text-label-md font-label-md text-on-surface mb-xs"
                    >
                      {{ course.nama }}
                    </div>
                    <div class="text-label-sm font-label-sm text-outline">
                      {{ course.kode }} • {{ course.prodi }}
                    </div>
                  </td>
                  <td class="py-md px-md text-center">
                    <span
                      class="inline-flex items-center justify-center px-2 py-1 rounded-full bg-primary-fixed-dim text-on-primary-fixed text-label-sm font-label-sm"
                      >{{ course.sks }}</span
                    >
                  </td>
                  <td class="py-md px-md">
                    <div
                      :class="
                        course.conflict ? 'text-error' : 'text-on-surface'
                      "
                      class="text-body-sm font-body-sm flex items-center gap-1"
                    >
                      <span
                        v-if="course.conflict"
                        class="material-symbols-outlined text-sm"
                        >warning</span
                      >
                      {{ course.jadwal }}
                    </div>
                    <div class="text-label-sm font-label-sm text-outline">
                      {{ course.ruang }}
                    </div>
                  </td>
                  <td class="py-md px-md text-right">
                    <button
                      :disabled="course.conflict"
                      :class="
                        course.conflict
                          ? 'border-outline text-outline cursor-not-allowed opacity-50'
                          : 'border-primary text-primary hover:bg-primary hover:text-on-primary'
                      "
                      class="inline-flex items-center justify-center gap-xs px-sm py-2 rounded-lg border font-label-md text-label-md transition-colors"
                    >
                      <span class="material-symbols-outlined text-sm">{{
                        course.conflict ? "block" : "add"
                      }}</span>
                      Ambil
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Right Column: Summary Sidebar -->
      <div class="lg:col-span-4 lg:sticky lg:top-24">
        <div
          class="bg-surface-container-lowest rounded-xl shadow-level-2 overflow-hidden flex flex-col border border-outline-variant/20"
        >
          <div class="p-md bg-primary text-on-primary">
            <h2 class="text-h3 font-h3 mb-xs flex items-center gap-2">
              <span class="material-symbols-outlined">summarize</span>
              Ringkasan KRS
            </h2>
            <p class="text-label-sm font-label-sm opacity-90">
              Review pilihan mata kuliah Anda.
            </p>
          </div>
          <div class="p-md bg-surface-bright border-b border-surface-variant">
            <div class="flex justify-between items-end mb-sm">
              <div class="text-body-md font-body-md text-on-surface-variant">
                Total SKS Diambil
              </div>
              <div
                class="text-h2 font-h2 text-primary flex items-baseline gap-1"
              >
                {{ totalSks }}
                <span
                  class="text-label-md font-label-md text-on-surface-variant"
                  >/ {{ maxSks }}</span
                >
              </div>
            </div>
            <div
              class="h-2 w-full bg-surface-container-high rounded-full overflow-hidden"
            >
              <div
                class="h-full bg-secondary rounded-full transition-all duration-300"
                :style="{ width: (totalSks / maxSks) * 100 + '%' }"
              ></div>
            </div>
          </div>
          <div
            class="p-md flex flex-col items-center justify-center text-center py-10 bg-surface-bright"
          >
            <div
              class="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-sm text-outline"
            >
              <span class="material-symbols-outlined text-3xl">inbox</span>
            </div>
            <h3 class="text-label-md font-label-md text-on-surface mb-xs">
              KRS Masih Kosong
            </h3>
            <p class="text-body-sm font-body-sm text-on-surface-variant">
              Pilih mata kuliah untuk memulai.
            </p>
          </div>
          <div class="p-md">
            <button
              disabled
              class="w-full py-3 bg-surface-container-high text-outline font-label-md text-label-md rounded-lg cursor-not-allowed transition-all"
            >
              Ajukan KRS
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

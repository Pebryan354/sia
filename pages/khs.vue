<script setup>
useHead({
  title: "KHS & Nilai - SIA INSTIPER",
});

const selectedSemester = ref("Semester Ganjil 2023/2024");
const semesters = [
  "Semester Ganjil 2023/2024",
  "Semester Genap 2022/2023",
  "Semester Ganjil 2022/2023",
  "Semester Genap 2021/2022",
];

const mataKuliah = [
  {
    kode: "TBP101",
    nama: "Pengantar Ilmu Pertanian",
    sks: 3,
    nilai: "A",
    bobot: "12.00",
  },
  { kode: "TBP102", nama: "Botani Umum", sks: 3, nilai: "A-", bobot: "11.25" },
  {
    kode: "UNV101",
    nama: "Pendidikan Agama",
    sks: 2,
    nilai: "B+",
    bobot: "6.50",
  },
  {
    kode: "TBP103",
    nama: "Klimatologi Pertanian",
    sks: 3,
    nilai: "A",
    bobot: "12.00",
  },
  {
    kode: "MTH101",
    nama: "Matematika Dasar",
    sks: 3,
    nilai: "B",
    bobot: "9.00",
  },
];

const performanceData = [
  { label: "Smt 1", value: 3.4, height: "95%" },
  { label: "Smt 2", value: 3.52, height: "97%" },
  { label: "Smt 3", value: 3.35, height: "94%" },
  { label: "Smt 4", value: 3.5, height: "96%" },
  { label: "Smt 5", value: 3.62, height: "98%", current: true },
];
</script>

<template>
  <div class="flex flex-col gap-sm">
    <!-- Header & Controls -->
    <div
      class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
    >
      <div>
        <h1 class="font-h1 text-h1 text-on-background">KHS &amp; Nilai</h1>
        <p class="font-body-md text-body-md text-on-surface-variant mt-1">
          Kartu Hasil Studi dan Riwayat Akademik
        </p>
      </div>
      <div class="w-full sm:w-64">
        <div class="relative">
          <select
            v-model="selectedSemester"
            class="block w-full pl-4 pr-10 py-3 text-base border-[1.5px] border-outline-variant focus:outline-none focus:ring-0 focus:border-secondary sm:text-sm rounded-md bg-surface-container-lowest appearance-none font-body-md text-on-surface"
          >
            <option v-for="s in semesters" :key="s" :value="s">{{ s }}</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant"
          >
            <span class="material-symbols-outlined">expand_more</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bento Grid Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Main Data Table -->
      <div
        class="lg:col-span-2 bg-surface-container-lowest rounded-xl shadow-level-1 p-6 flex flex-col border border-outline-variant/20"
      >
        <div class="flex justify-between items-center mb-6">
          <h2 class="font-h3 text-h3 text-on-background">Daftar Mata Kuliah</h2>
          <button
            class="text-secondary font-label-md text-label-md flex items-center gap-1 hover:text-surface-tint transition-colors"
          >
            <span class="material-symbols-outlined text-sm">download</span>
            Cetak KHS
          </button>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-outline-variant/30">
            <thead>
              <tr>
                <th
                  class="py-3.5 px-3 text-left font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"
                >
                  Kode
                </th>
                <th
                  class="px-3 py-3.5 text-left font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"
                >
                  Mata Kuliah
                </th>
                <th
                  class="px-3 py-3.5 text-center font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"
                >
                  SKS
                </th>
                <th
                  class="px-3 py-3.5 text-center font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"
                >
                  Nilai
                </th>
                <th
                  class="px-3 py-3.5 text-center font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"
                >
                  Bobot
                </th>
              </tr>
            </thead>
            <tbody
              class="divide-y divide-outline-variant/30 bg-surface-container-lowest"
            >
              <tr
                v-for="mk in mataKuliah"
                :key="mk.kode"
                class="hover:bg-surface-container-low/50 transition-colors"
              >
                <td
                  class="whitespace-nowrap py-4 px-3 font-body-sm text-body-sm text-on-surface-variant"
                >
                  {{ mk.kode }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-4 font-label-md text-label-md text-on-background"
                >
                  {{ mk.nama }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-4 text-center font-body-sm text-body-sm text-on-surface-variant"
                >
                  {{ mk.sks }}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-center">
                  <span
                    :class="
                      mk.nilai.startsWith('A')
                        ? 'bg-tertiary-fixed text-on-tertiary-fixed'
                        : 'bg-secondary-fixed text-on-secondary-fixed'
                    "
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-sm text-label-sm"
                  >
                    {{ mk.nilai }}
                  </span>
                </td>
                <td
                  class="whitespace-nowrap px-3 py-4 text-center font-body-sm text-body-sm text-on-surface-variant"
                >
                  {{ mk.bobot }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Stats & Chart Column -->
      <div class="flex flex-col gap-6">
        <!-- Summary Card -->
        <div
          class="bg-surface-container-lowest rounded-xl shadow-level-1 p-6 relative overflow-hidden border border-outline-variant/20"
        >
          <div
            class="absolute -right-6 -top-6 w-32 h-32 bg-primary-fixed-dim/20 rounded-full blur-2xl"
          ></div>
          <h3 class="font-h3 text-h3 text-on-background mb-6 relative z-10">
            Ringkasan Nilai
          </h3>
          <div class="grid grid-cols-2 gap-4 relative z-10">
            <div class="p-4 bg-surface-container-low rounded-lg">
              <p
                class="font-label-sm text-label-sm text-on-surface-variant mb-1"
              >
                IPS
              </p>
              <p class="font-display text-display text-primary">3.62</p>
              <div
                class="mt-2 flex items-center gap-1 text-[10px] text-secondary font-medium"
              >
                <span class="material-symbols-outlined text-[14px]"
                  >trending_up</span
                >
                +0.12 dari smt lalu
              </div>
            </div>
            <div class="p-4 bg-surface-container-low rounded-lg">
              <p
                class="font-label-sm text-label-sm text-on-surface-variant mb-1"
              >
                IPK
              </p>
              <p class="font-display text-display text-primary">3.58</p>
              <div class="mt-2 text-[10px] text-on-surface-variant font-medium">
                Total 84 SKS
              </div>
            </div>
          </div>
        </div>

        <!-- Chart Card -->
        <div
          class="bg-surface-container-lowest rounded-xl shadow-level-1 p-6 border border-outline-variant/20"
        >
          <h3 class="font-h3 text-h3 text-on-background mb-6">Tren IPK</h3>
          <div
            class="h-40 flex items-end justify-between gap-2 px-2 pb-6 relative"
          >
            <!-- Chart Bars -->
            <div
              v-for="data in performanceData"
              :key="data.label"
              class="flex flex-col items-center group flex-1"
            >
              <div
                :style="{ height: data.height }"
                :class="
                  data.current
                    ? 'bg-primary'
                    : 'bg-tertiary-fixed-dim/40 hover:bg-tertiary-fixed-dim'
                "
                class="w-full max-w-[32px] rounded-t-sm transition-all relative"
              >
                <div
                  class="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {{ data.value }}
                </div>
              </div>
              <span
                :class="
                  data.current
                    ? 'text-primary font-bold'
                    : 'text-on-surface-variant'
                "
                class="text-[10px] font-label-sm mt-2"
                >{{ data.label }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

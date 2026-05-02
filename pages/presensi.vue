<script setup>
useHead({
  title: "Presensi Mahasiswa - SIA UNIVERSITAS",
});

const attendanceDetails = [
  {
    name: "Mekanisasi Pertanian Modern",
    code: "MKW-204",
    lecturer: "Dr. Ir. Soetomo",
    sks: 3,
    total: 14,
    present: 14,
    absent: 0,
    percentage: 100,
    status: "Aman",
    statusClass: "bg-emerald-100 text-emerald-800",
    barClass: "bg-secondary",
  },
  {
    name: "Manajemen Perkebunan Kelapa Sawit",
    code: "MKP-301",
    lecturer: "Prof. Dr. Ahmad",
    sks: 4,
    total: 16,
    present: 13,
    absent: 3,
    percentage: 81,
    status: "Hati-hati",
    statusClass: "bg-amber-100 text-amber-700",
    barClass: "bg-amber-500",
  },
  {
    name: "Biologi Tanah & Ekologi",
    code: "MKW-108",
    lecturer: "Dra. Endang M.Si",
    sks: 2,
    total: 12,
    present: 11,
    absent: 1,
    percentage: 92,
    status: "Aman",
    statusClass: "bg-emerald-100 text-emerald-800",
    barClass: "bg-secondary",
  },
  {
    name: "Fisika Teknik Dasar",
    code: "MKU-102",
    lecturer: "Ir. Bambang M.T",
    sks: 3,
    total: 14,
    present: 10,
    absent: 4,
    percentage: 71,
    status: "Bahaya",
    statusClass: "bg-error-container text-on-error-container",
    barClass: "bg-error",
  },
];
</script>

<template>
  <div class="flex flex-col gap-sm">
    <!-- Header Section -->
    <div class="mb-2">
      <h1 class="font-h1 text-h1 text-primary mb-2">Presensi Mahasiswa</h1>
      <p class="font-body-md text-body-md text-on-surface-variant">
        Semester Ganjil 2023/2024 • Teknik Pertanian
      </p>
    </div>

    <!-- Metric Summary: Bento Grid Style -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter">
      <!-- Main Metric -->
      <div
        class="md:col-span-2 bg-surface-container-lowest p-lg rounded-xl shadow-level-1 border border-outline-variant/20 flex items-center justify-between overflow-hidden relative group"
      >
        <div class="z-10">
          <h3
            class="font-label-md text-label-md text-outline uppercase tracking-widest mb-2"
          >
            Rata-rata Kehadiran
          </h3>
          <div class="flex items-baseline gap-2">
            <span class="font-display text-display text-primary">98%</span>
            <span class="text-secondary font-bold text-label-md">▲ 2%</span>
          </div>
          <p class="font-body-sm text-body-sm text-outline mt-2">
            Diatas batas minimal 75% kehadiran.
          </p>
        </div>
        <div class="relative w-32 h-32 z-10">
          <svg class="w-full h-full transform -rotate-90">
            <circle
              class="text-surface-container-high"
              cx="64"
              cy="64"
              fill="transparent"
              r="58"
              stroke="currentColor"
              stroke-width="8"
            ></circle>
            <circle
              class="text-secondary"
              cx="64"
              cy="64"
              fill="transparent"
              r="58"
              stroke="currentColor"
              stroke-dasharray="364.4"
              stroke-dashoffset="7.3"
              stroke-width="8"
            ></circle>
          </svg>
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="material-symbols-outlined text-secondary text-3xl"
              >verified</span
            >
          </div>
        </div>
      </div>

      <!-- Total Present -->
      <div
        class="bg-surface-container-lowest p-md rounded-xl shadow-level-1 border border-outline-variant/20"
      >
        <div
          class="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed mb-4"
        >
          <span
            class="material-symbols-outlined"
            style="font-variation-settings: &quot;FILL&quot; 1"
            >check_circle</span
          >
        </div>
        <h3 class="font-label-md text-label-md text-outline mb-1">
          Total Hadir
        </h3>
        <p class="font-h2 text-h2 text-primary">
          112
          <span class="text-body-sm font-normal text-outline">Sesi</span>
        </p>
      </div>

      <!-- Leaves & Absences -->
      <div class="grid grid-rows-2 gap-4">
        <div
          class="bg-surface-container-lowest p-4 rounded-xl shadow-level-1 border border-outline-variant/20 flex items-center justify-between"
        >
          <div>
            <h3 class="font-label-sm text-label-sm text-outline">Izin/Sakit</h3>
            <p class="font-h3 text-h3 text-primary">2</p>
          </div>
          <span class="material-symbols-outlined text-outline/40"
            >medical_services</span
          >
        </div>
        <div
          class="bg-surface-container-lowest p-4 rounded-xl shadow-level-1 border border-outline-variant/20 flex items-center justify-between"
        >
          <div>
            <h3 class="font-label-sm text-label-sm text-outline">Alpa</h3>
            <p class="font-h3 text-h3 text-error">1</p>
          </div>
          <span class="material-symbols-outlined text-error/30">cancel</span>
        </div>
      </div>
    </div>

    <!-- Course List Section -->
    <section
      class="bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/20 overflow-hidden"
    >
      <div
        class="p-6 border-b border-outline-variant/20 flex justify-between items-center bg-surface-bright"
      >
        <h2 class="font-h3 text-h3 text-primary">
          Detail Kehadiran per Mata Kuliah
        </h2>
        <div class="flex gap-2">
          <button
            class="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-label-md hover:bg-surface transition-colors"
          >
            <span class="material-symbols-outlined text-sm">filter_list</span>
            Filter
          </button>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr
              class="bg-surface-container-low text-outline border-b border-outline-variant/20"
            >
              <th
                class="px-6 py-4 font-label-md text-label-md uppercase tracking-wider"
              >
                Mata Kuliah
              </th>
              <th
                class="px-6 py-4 font-label-md text-label-md uppercase tracking-wider text-center"
              >
                SKS
              </th>
              <th
                class="px-6 py-4 font-label-md text-label-md uppercase tracking-wider text-center"
              >
                Total Temu
              </th>
              <th
                class="px-6 py-4 font-label-md text-label-md uppercase tracking-wider text-center"
              >
                Hadir
              </th>
              <th
                class="px-6 py-4 font-label-md text-label-md uppercase tracking-wider text-center"
              >
                Absen
              </th>
              <th
                class="px-6 py-4 font-label-md text-label-md uppercase tracking-wider"
              >
                Presentase
              </th>
              <th
                class="px-6 py-4 font-label-md text-label-md uppercase tracking-wider"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-outline-variant/10">
            <tr
              v-for="item in attendanceDetails"
              :key="item.code"
              class="hover:bg-surface transition-colors group"
            >
              <td class="px-6 py-5">
                <p
                  class="font-label-md text-primary group-hover:text-secondary transition-colors"
                >
                  {{ item.name }}
                </p>
                <p class="text-xs text-outline">
                  {{ item.code }} • {{ item.lecturer }}
                </p>
              </td>
              <td
                class="px-6 py-5 text-center font-body-md text-on-surface-variant"
              >
                {{ item.sks }}
              </td>
              <td
                class="px-6 py-5 text-center font-body-md text-on-surface-variant"
              >
                {{ item.total }}
              </td>
              <td
                class="px-6 py-5 text-center font-body-md text-secondary font-bold"
              >
                {{ item.present }}
              </td>
              <td
                class="px-6 py-5 text-center font-body-md"
                :class="
                  item.absent > 0 ? 'text-error font-bold' : 'text-outline'
                "
              >
                {{ item.absent }}
              </td>
              <td class="px-6 py-5 min-w-[180px]">
                <div class="flex items-center gap-3">
                  <div
                    class="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden"
                  >
                    <div
                      class="h-full transition-all duration-500"
                      :class="item.barClass"
                      :style="{ width: item.percentage + '%' }"
                    ></div>
                  </div>
                  <span
                    class="font-label-md"
                    :class="
                      item.status === 'Critical'
                        ? 'text-error'
                        : 'text-secondary'
                    "
                    >{{ item.percentage }}%</span
                  >
                </div>
              </td>
              <td class="px-6 py-5">
                <span
                  class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter"
                  :class="item.statusClass"
                >
                  {{ item.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Exam Eligibility Alert -->
    <div
      class="p-6 bg-primary-container/10 border-l-4 border-primary rounded-r-xl flex items-start gap-4"
    >
      <span
        class="material-symbols-outlined text-primary mt-1"
        style="font-variation-settings: &quot;FILL&quot; 1"
        >info</span
      >
      <div>
        <h4 class="font-label-md text-primary mb-1">
          Informasi Kelayakan Ujian Akhir
        </h4>
        <p class="text-body-sm text-on-surface-variant">
          Sesuai dengan peraturan akademik UNIVERSITAS, mahasiswa wajib memiliki
          tingkat kehadiran minimal
          <span class="font-bold text-primary">75%</span> untuk dapat mengikuti
          Ujian Akhir Semester (UAS).
        </p>
      </div>
    </div>
  </div>
</template>

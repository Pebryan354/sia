<script setup>
useHead({
  title: "Dashboard - SIA UNIVERSITAS",
});

const kpiStats = [
  {
    label: "IPK Kumulatif",
    value: "3.85",
    trend: "+0.15 semester ini",
    icon: "school",
  },
  {
    label: "SKS Diambil",
    value: "22",
    trend: "Total: 110 SKS",
    icon: "library_books",
  },
  {
    label: "Presensi Rata-rata",
    value: "98%",
    trend: "Sangat Baik",
    icon: "fact_check",
  },
];

const schedule = [
  {
    time: "08:00 - 09:40",
    title: "Dasar-dasar Agronomi",
    location: "Ruang A1.2",
    active: true,
  },
  {
    time: "10:00 - 11:40",
    title: "Botani Umum",
    location: "Lab Biologi Terpadu",
    active: false,
  },
];

const announcements = [
  {
    title: "Batas Pembayaran UKT",
    desc: "Batas akhir pembayaran UKT Semester Genap 2023/2024 adalah 15 Februari.",
    icon: "campaign",
    primary: true,
  },
  {
    title: "Jadwal UTS Dirilis",
    desc: "Jadwal Ujian Tengah Semester telah tersedia di menu Akademik.",
    icon: "event",
    primary: false,
  },
];
</script>

<template>
  <div class="flex flex-col gap-sm">
    <!-- Welcome Section -->
    <div class="mb-2">
      <h1 class="font-h1 text-h1 text-on-background mb-xs">
        Selamat Datang, Budi!
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant">
        Fakultas Pertanian • Semester Ganjil 2023/2024
      </p>
    </div>

    <!-- Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <!-- KPI Cards -->
      <div
        class="col-span-1 md:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-gutter"
      >
        <div
          v-for="stat in kpiStats"
          :key="stat.label"
          class="bg-surface-container-lowest rounded-xl p-md shadow-level-1 flex flex-col gap-sm border border-outline-variant/20"
        >
          <div class="flex items-center gap-base text-secondary">
            <span class="material-symbols-outlined">{{ stat.icon }}</span>
            <span class="font-label-md text-label-md text-outline">{{
              stat.label
            }}</span>
          </div>
          <div class="font-display text-display text-on-surface">
            {{ stat.value }}
          </div>
          <div
            :class="
              stat.trend.includes('+') || stat.trend.includes('Baik')
                ? 'bg-tertiary-fixed text-on-tertiary-fixed'
                : 'text-outline-variant'
            "
            class="font-label-sm text-label-sm w-fit px-2 py-1 rounded-full"
          >
            {{ stat.trend }}
          </div>
        </div>
      </div>

      <!-- Schedule Area -->
      <div
        class="col-span-1 md:col-span-8 bg-surface-container-lowest rounded-xl p-md shadow-level-1 border border-outline-variant/20"
      >
        <h3 class="font-h3 text-h3 text-on-surface mb-md">Jadwal Hari Ini</h3>
        <div
          class="flex flex-col gap-0 relative pl-4 border-l-2 border-surface-variant"
        >
          <!-- Timeline Item -->
          <div
            v-for="item in schedule"
            :key="item.time"
            class="relative pb-lg pl-md"
          >
            <div
              :class="item.active ? 'bg-primary' : 'bg-surface-variant'"
              class="absolute -left-[21px] top-1 w-3 h-3 rounded-full ring-4 ring-surface-container-lowest"
            ></div>
            <div
              :class="item.active ? 'text-primary' : 'text-outline'"
              class="font-label-sm text-label-sm mb-xs"
            >
              {{ item.time }}
            </div>
            <div
              class="bg-surface p-sm rounded-lg border border-outline-variant"
            >
              <h4 class="font-h3 text-h3 text-on-surface">
                {{ item.title }}
              </h4>
              <p
                class="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1"
              >
                <span class="material-symbols-outlined text-[16px]"
                  >location_on</span
                >
                {{ item.location }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Announcements Widget -->
      <div
        class="col-span-1 md:col-span-4 bg-surface-container-lowest rounded-xl p-md shadow-level-1 border border-outline-variant/20"
      >
        <h3 class="font-h3 text-h3 text-on-surface mb-md">Pengumuman</h3>
        <div class="flex flex-col gap-sm">
          <div
            v-for="ann in announcements"
            :key="ann.title"
            :class="
              ann.primary
                ? 'bg-surface-container-low border-l-4 border-primary'
                : 'hover:bg-surface transition-colors cursor-pointer'
            "
            class="flex gap-sm p-sm rounded-lg"
          >
            <span
              :class="ann.primary ? 'text-primary' : 'text-outline'"
              class="material-symbols-outlined mt-1"
              >{{ ann.icon }}</span
            >
            <div>
              <h4 class="font-label-md text-label-md text-on-surface mb-1">
                {{ ann.title }}
              </h4>
              <p class="font-body-sm text-body-sm text-on-surface-variant">
                {{ ann.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

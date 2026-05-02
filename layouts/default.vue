<script setup>
const route = useRoute();

const navLinks = [
  { name: "Dashboard", icon: "dashboard", to: "/" },
  { name: "KRS Online", icon: "description", to: "/krs" },
  { name: "KHS & Nilai", icon: "grade", to: "/khs" },
  { name: "Presensi", icon: "calendar_today", to: "/presensi" },
  { name: "Biodata", icon: "person", to: "/profile" },
  { name: "Tagihan", icon: "payments", to: "/tagihan" },
];

const mobileLinks = [
  { name: "Beranda", icon: "home", to: "/" },
  { name: "Akademik", icon: "school", to: "/akademik" },
  { name: "Notifikasi", icon: "notifications", to: "/notifikasi" },
  { name: "Profil", icon: "account_circle", to: "/profile", fill: true },
];
</script>

<template>
  <div>
    <!-- TopAppBar -->
    <header
      class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-emerald-900 dark:text-emerald-400 font-manrope text-sm font-medium fixed top-0 w-full z-40 border-b border-emerald-100 dark:border-emerald-900/30 shadow-sm shadow-emerald-900/5 transition-colors"
    >
      <div class="flex justify-between items-center h-16 px-6 mx-auto">
        <div
          class="text-xl font-bold tracking-tight text-emerald-900 dark:text-emerald-50"
        >
          SIA Universitas
        </div>
        <div class="flex items-center gap-md">
          <div class="flex gap-base">
            <button
              class="w-10 h-10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-full active:scale-95 duration-150"
            >
              <span class="material-symbols-outlined">notifications</span>
            </button>
            <button
              class="w-10 h-10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-full active:scale-95 duration-150"
            >
              <span class="material-symbols-outlined">settings</span>
            </button>
          </div>
          <img
            alt="User profile photo"
            class="w-10 h-10 rounded-full object-cover border border-outline-variant"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZK0QgxGAtj_RPbBkYBNcG7xcozWUFwfuHWcuYmnlsSNALa7b7JaumyDOXKos8AfRXC6j2zuxrPt0ktUJMUCuLSaIYGdZqQrwnGmsVGh0H1Y7vQcvXLZHDvWhjfshDG5cIeZdFahdKK5ZXjXcfLcj_wr6xUS-xUwrp75QSoHRCC-lBM6FThfr7SIOwQkUWuNiMurkblw4CxuRQOjH1fHwMCyxgdejFgvSkqSNxXzPvwxl1sYrIFLsAFxsL7ZVOp-6VRaav47GkAg"
          />
        </div>
      </div>
    </header>

    <div class="flex max-w-[1440px] mx-auto pt-16">
      <!-- SideNavBar (Desktop) -->
      <nav
        class="bg-slate-50 dark:bg-slate-950 text-emerald-700 dark:text-emerald-400 font-manrope text-sm font-semibold h-screen w-64 fixed left-0 top-0 hidden lg:flex flex-col border-r border-slate-200 dark:border-emerald-900/20 transition-all duration-200 ease-in-out"
      >
        <div class="flex flex-col gap-2 p-4 pt-20">
          <div class="mb-sm px-4">
            <div
              class="text-lg font-black text-emerald-900 dark:text-emerald-100"
            >
              Akademik
            </div>
            <div class="text-slate-500 font-label-sm text-label-sm">
              Program Sarjana
            </div>
          </div>

          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="flex items-center gap-sm px-4 py-3 rounded-lg transition-colors"
            :class="
              route.path === link.to
                ? 'bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 border-r-4 border-emerald-700'
                : 'text-slate-600 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/10'
            "
          >
            <span class="material-symbols-outlined">{{ link.icon }}</span>
            {{ link.name }}
          </NuxtLink>

          <div
            class="mt-auto pt-lg border-t border-outline-variant/30 flex flex-col gap-2"
          >
            <button
              class="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 rounded-lg text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors font-manrope text-sm font-semibold shadow-sm"
            >
              <span class="material-symbols-outlined text-[18px]"
                >credit_card</span
              >
              Download KTM Digital
            </button>
            <button
              @click="navigateTo('/login')"
              class="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors font-manrope text-sm font-semibold shadow-sm"
            >
              <span class="material-symbols-outlined text-[18px]">logout</span>
              Logout
            </button>
          </div>
        </div>
      </nav>

      <!-- Main Content -->
      <main
        class="w-full lg:ml-64 p-margin pb-32 lg:pb-xl flex flex-col gap-lg"
      >
        <slot />
      </main>
    </div>

    <!-- BottomNavBar (Mobile) -->
    <nav
      class="bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg text-emerald-700 dark:text-emerald-400 font-manrope text-[10px] font-bold uppercase tracking-wider fixed bottom-0 w-full lg:hidden rounded-t-2xl z-50 border-t border-emerald-100 dark:border-emerald-900/30 shadow-[0_-4px_20px_rgba(0,0,0,0.04)] tap-highlight-transparent"
    >
      <div class="flex justify-around items-center h-16 pb-safe">
        <NuxtLink
          v-for="link in mobileLinks"
          :key="link.to"
          :to="link.to"
          class="flex flex-col items-center justify-center w-full h-full active:bg-emerald-50 dark:active:bg-emerald-900/20"
          :class="
            route.path === link.to
              ? 'text-emerald-700 dark:text-emerald-400'
              : 'text-slate-400 dark:text-slate-500'
          "
        >
          <span
            class="material-symbols-outlined mb-1"
            :style="
              route.path === link.to && link.fill
                ? 'font-variation-settings: \'FILL\' 1'
                : ''
            "
            >{{ link.icon }}</span
          >
          {{ link.name }}
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>

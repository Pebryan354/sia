<script setup>
useHead({
  title: "Tagihan & Pembayaran - SIA INSTIPER",
});

const transactions = [
  {
    tanggal: "10 Okt 2026",
    jenis: "UKT Semester Ganjil 2026/2024",
    invoice: "INV-2310-001",
    nominal: "Rp4.500.000",
    status: "Belum Bayar",
    statusClass: "bg-error-container text-on-error-container",
  },
  {
    tanggal: "15 Feb 2026",
    jenis: "UKT Semester Genap 2022/2026",
    invoice: "INV-2302-089",
    nominal: "Rp4.500.000",
    status: "Lunas",
    statusClass: "bg-tertiary-fixed text-on-tertiary-fixed",
  },
  {
    tanggal: "12 Agu 2022",
    jenis: "Sumbangan Pengembangan Institusi (SPI)",
    invoice: "INV-2208-142",
    nominal: "Rp10.000.000",
    status: "Lunas",
    statusClass: "bg-tertiary-fixed text-on-tertiary-fixed",
  },
];
</script>

<template>
  <div class="flex flex-col gap-sm">
    <div class="mb-2">
      <h2 class="font-h1 text-h1 text-primary-container mb-2">
        Tagihan &amp; Pembayaran
      </h2>
      <p class="font-body-md text-body-md text-outline">
        Kelola kewajiban administrasi akademik Anda.
      </p>
    </div>

    <!-- Bento Grid Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
      <!-- Main Billing Summary Card -->
      <div
        class="lg:col-span-2 bg-surface-container-lowest rounded-xl shadow-level-1 p-md flex flex-col md:flex-row items-center justify-between border border-outline-variant/20 relative overflow-hidden"
      >
        <div
          class="absolute -right-20 -top-20 w-64 h-64 bg-primary-fixed opacity-20 rounded-full blur-3xl pointer-events-none"
        ></div>
        <div class="z-10 w-full md:w-auto mb-6 md:mb-0">
          <h3
            class="font-label-md text-label-md text-outline mb-1 uppercase tracking-wide"
          >
            Total Tagihan Saat Ini
          </h3>
          <div class="font-display text-display text-primary mb-2">
            Rp4.500.000
          </div>
          <div class="flex items-center gap-2">
            <span
              class="bg-error-container text-on-error-container font-label-sm text-label-sm px-3 py-1 rounded-full flex items-center gap-1"
            >
              <span class="material-symbols-outlined text-[14px]"
                >pending_actions</span
              >
              Belum Dibayar
            </span>
            <span class="font-body-sm text-body-sm text-outline"
              >Jatuh tempo: 15 Okt 2026</span
            >
          </div>
        </div>
        <div class="z-10 w-full md:w-auto flex flex-col gap-3">
          <button
            class="bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-lg hover:bg-tertiary transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            <span class="material-symbols-outlined text-[20px]"
              >account_balance_wallet</span
            >
            Bayar Sekarang
          </button>
          <button
            class="bg-transparent border border-outline-variant text-primary font-label-md text-label-md px-6 py-3 rounded-lg hover:bg-surface-container transition-colors flex items-center justify-center gap-2"
          >
            <span class="material-symbols-outlined text-[20px]">download</span>
            Unduh Invoice
          </button>
        </div>
      </div>

      <!-- Payment Methods -->
      <div
        class="bg-surface-container-lowest rounded-xl shadow-level-1 p-md border border-outline-variant/20"
      >
        <h3 class="font-h3 text-h3 text-primary-container mb-4">
          Metode Pembayaran
        </h3>
        <ul class="flex flex-col gap-3">
          <li
            class="flex items-center gap-3 p-3 rounded-lg border border-outline-variant hover:border-primary-fixed transition-colors bg-surface"
          >
            <div
              class="w-10 h-10 rounded bg-white shadow-sm flex items-center justify-center text-primary"
            >
              <span class="material-symbols-outlined">account_balance</span>
            </div>
            <div>
              <div class="font-label-md text-label-md text-on-surface">
                Virtual Account Bank
              </div>
              <div class="font-body-sm text-body-sm text-outline text-[11px]">
                BCA, Mandiri, BNI, BRI
              </div>
            </div>
          </li>
          <li
            class="flex items-center gap-3 p-3 rounded-lg border border-outline-variant hover:border-primary-fixed transition-colors bg-surface"
          >
            <div
              class="w-10 h-10 rounded bg-white shadow-sm flex items-center justify-center text-primary"
            >
              <span class="material-symbols-outlined">storefront</span>
            </div>
            <div>
              <div class="font-label-md text-label-md text-on-surface">
                Minimarket
              </div>
              <div class="font-body-sm text-body-sm text-outline text-[11px]">
                Indomaret, Alfamart
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Transaction History -->
      <div
        class="lg:col-span-3 bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/20 overflow-hidden"
      >
        <div
          class="p-md border-b border-outline-variant/20 flex justify-between items-center bg-surface-bright"
        >
          <h3 class="font-h2 text-h2 text-primary-container">
            Riwayat Transaksi
          </h3>
          <button class="text-primary hover:text-tertiary transition-colors">
            <span class="material-symbols-outlined">filter_list</span>
          </button>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr
                class="border-b border-outline-variant/20 bg-surface-container-low"
              >
                <th
                  class="py-4 px-6 font-label-md text-label-md text-outline uppercase tracking-wider"
                >
                  Tanggal
                </th>
                <th
                  class="py-4 px-6 font-label-md text-label-md text-outline uppercase tracking-wider"
                >
                  Jenis Tagihan
                </th>
                <th
                  class="py-4 px-6 font-label-md text-label-md text-outline uppercase tracking-wider text-right"
                >
                  Nominal
                </th>
                <th
                  class="py-4 px-6 font-label-md text-label-md text-outline uppercase tracking-wider text-center"
                >
                  Status
                </th>
                <th
                  class="py-4 px-6 font-label-md text-label-md text-outline uppercase tracking-wider text-center"
                >
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="tr in transactions"
                :key="tr.invoice"
                class="border-b border-outline-variant/20 hover:bg-surface-container-low/50 transition-colors"
              >
                <td class="py-4 px-6 font-body-md text-body-md text-on-surface">
                  {{ tr.tanggal }}
                </td>
                <td class="py-4 px-6">
                  <div class="font-label-md text-label-md text-on-surface">
                    {{ tr.jenis }}
                  </div>
                  <div class="font-body-sm text-body-sm text-outline">
                    {{ tr.invoice }}
                  </div>
                </td>
                <td
                  class="py-4 px-6 font-label-md text-label-md text-on-surface text-right"
                >
                  {{ tr.nominal }}
                </td>
                <td class="py-4 px-6 text-center">
                  <span
                    :class="tr.statusClass"
                    class="inline-block font-label-sm text-label-sm px-3 py-1 rounded-full"
                    >{{ tr.status }}</span
                  >
                </td>
                <td class="py-4 px-6 text-center">
                  <button
                    class="text-primary hover:text-tertiary transition-colors"
                  >
                    <span class="material-symbols-outlined">{{
                      tr.status === "Lunas" ? "download" : "visibility"
                    }}</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

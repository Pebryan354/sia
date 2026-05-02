<script setup>
// Gunakan layout blank (tanpa sidebar & header)
definePageMeta({
  layout: "blank",
});

useHead({
  title: "Login - SIA INSTIPER",
});

// State untuk form
const username = ref("");
const password = ref("");
const showPassword = ref(false);
const rememberMe = ref(false);

// Handler submit
const handleLogin = () => {
  // TODO: implementasi login logic nanti
  console.log("Login:", { username: username.value, password: password.value });
  navigateTo("/");
};

// Toggle visibility password
const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
</script>

<template>
  <div
    class="bg-background min-h-screen flex items-center justify-center font-body-md text-body-md text-on-surface antialiased relative overflow-hidden"
  >
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0 bg-surface-container-high/40">
      <img
        alt="INSTIPER Campus Background"
        class="w-full h-full object-cover opacity-30 mix-blend-multiply"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1SYUAcNEOwnpGlpTd5hDxpx_mvvqqhgswiciQTCNqzjA2uWPs2eSfRG37DEwQBr2kWx-pDU2_ZpKtdNdjJS-0C7vEjdDzUgb3tkGQ3-z_fdKnoX8bsK92vsl1-E6PzebX1tv64TFILBveuFBg5ZOd-JOoMev_NqcTgRuiWRPK_XBEK4fQkjmuPR1TtHAKe0PVdCdu40sZAPiwkY6DR3DO_VxQGF9ZSk-4oPxK93yPvDM0q4_nhUXlGJCdP_ypgGwivUbUQPa9UQ"
      />
      <div
        class="absolute inset-0 bg-gradient-to-br from-surface-bright/90 via-surface-bright/80 to-primary-container/20 backdrop-blur-[2px]"
      ></div>
    </div>

    <!-- Login Container -->
    <div
      class="relative z-10 w-full max-w-md px-6 py-12 lg:px-8 bg-surface-container-lowest rounded-xl shadow-[0_10px_32px_rgba(27,67,50,0.08)] mx-4 md:mx-auto"
    >
      <!-- Header / Logo Area -->
      <div class="flex flex-col items-center mb-8">
        <div
          class="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-4 shadow-sm shadow-primary-container/20"
        >
          <span
            class="material-symbols-outlined text-on-primary text-[32px]"
            style="font-variation-settings: &quot;FILL&quot; 1"
            >local_florist</span
          >
        </div>
        <h1
          class="font-h1 text-h1 text-primary text-center mb-2 tracking-tight"
        >
          SIA INSTIPER
        </h1>
        <p
          class="font-body-sm text-body-sm text-on-surface-variant text-center"
        >
          Sistem Informasi Akademik
        </p>
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="space-y-6">
        <!-- Username / NIM Input -->
        <div>
          <label
            class="block font-label-md text-label-md text-on-surface-variant mb-2"
            for="username"
            >Username / NIM</label
          >
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <span class="material-symbols-outlined text-outline-variant"
                >person</span
              >
            </div>
            <input
              v-model="username"
              autocomplete="username"
              class="block w-full pl-10 pr-3 py-3 border-[1.5px] border-outline-variant bg-surface-container-lowest text-on-surface rounded-lg focus:outline-none focus:ring-0 focus:border-secondary transition-colors duration-200 placeholder:text-outline-variant/60 font-body-md text-body-md"
              id="username"
              placeholder="Masukkan NIM atau Username"
              required
              type="text"
            />
          </div>
        </div>

        <!-- Password Input -->
        <div>
          <label
            class="block font-label-md text-label-md text-on-surface-variant mb-2"
            for="password"
            >Password</label
          >
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <span class="material-symbols-outlined text-outline-variant"
                >lock</span
              >
            </div>
            <input
              v-model="password"
              autocomplete="current-password"
              class="block w-full pl-10 pr-10 py-3 border-[1.5px] border-outline-variant bg-surface-container-lowest text-on-surface rounded-lg focus:outline-none focus:ring-0 focus:border-secondary transition-colors duration-200 placeholder:text-outline-variant/60 font-body-md text-body-md"
              id="password"
              placeholder="Masukkan Password"
              required
              :type="showPassword ? 'text' : 'password'"
            />
            <button
              @click="togglePassword"
              class="absolute inset-y-0 right-0 pr-3 flex items-center text-outline-variant hover:text-secondary transition-colors"
              type="button"
            >
              <span class="material-symbols-outlined">{{
                showPassword ? "visibility" : "visibility_off"
              }}</span>
            </button>
          </div>
        </div>

        <!-- Options Row -->
        <div class="flex items-center justify-between mt-4">
          <div class="flex items-center">
            <input
              v-model="rememberMe"
              class="h-4 w-4 text-primary focus:ring-secondary border-outline-variant rounded cursor-pointer"
              id="remember-me"
              type="checkbox"
            />
            <label
              class="ml-2 block font-body-sm text-body-sm text-on-surface-variant cursor-pointer"
              for="remember-me"
            >
              Ingat saya
            </label>
          </div>
          <div class="text-sm">
            <NuxtLink
              class="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors hover:underline"
              to="#"
            >
              Lupa password?
            </NuxtLink>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="pt-2">
          <button
            class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm font-label-md text-label-md text-on-primary bg-primary hover:bg-tertiary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 active:scale-[0.98]"
            type="submit"
          >
            Masuk
          </button>
        </div>
      </form>

      <!-- Footer Links -->
      <div
        class="mt-8 flex justify-center space-x-4 border-t border-outline-variant/30 pt-6"
      >
        <NuxtLink
          class="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors flex items-center gap-1"
          to="#"
        >
          <span class="material-symbols-outlined text-[16px]">help</span>
          Bantuan
        </NuxtLink>
        <span class="text-outline-variant/50">•</span>
        <NuxtLink
          class="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors flex items-center gap-1"
          to="#"
        >
          <span class="material-symbols-outlined text-[16px]">info</span>
          Panduan Sistem
        </NuxtLink>
      </div>
    </div>

    <!-- Minimalist decorative elements -->
    <div
      class="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary-container z-20"
    ></div>
  </div>
</template>

<template>
  <Transition name="cake-exit">
    <section
      v-if="visible"
      class="dark-berry-bg relative flex h-dvh w-full flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <!-- Soft warm glow behind the cake -->
      <div
        class="pointer-events-none absolute h-80 w-80 rounded-full bg-rose-400/25 blur-3xl"
      />

      <!-- Floating sweets and confetti in the background -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <span
          v-for="item in floatingItems"
          :key="item.id"
          class="floating-item absolute select-none opacity-85"
          :class="item.anim"
          :style="{
            left: `${item.left}%`,
            top: `${item.top}%`,
            fontSize: `${item.size}px`,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
            '--dx': `${item.dx}px`,
            '--dy': `${item.dy}px`,
            '--rot': `${item.rot}deg`
          }"
        >
          {{ item.icon }}
        </span>
      </div>

      <!-- Center block: title + interactive cake -->
      <div
        class="cake-appear relative z-10 flex flex-col items-center"
        :class="{ 'is-ready': isReady }"
      >
        <p class="mb-2 text-sm font-semibold uppercase tracking-[0.26em] text-[#f3a6be] drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          Noura's special day
        </p>

        <h1
          class="mb-8 bg-gradient-to-r from-[#ff8fab] via-[#ffb3c6] to-[#ffc2d1] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent drop-shadow-[0_4px_16px_rgba(24,4,12,0.55)] sm:text-5xl"
        >
          Happy Birthday!
        </h1>

        <!-- Interactive birthday cake -->
        <button
          type="button"
          class="cake-button group relative cursor-pointer border-none bg-transparent p-4 outline-none"
          aria-label="Open birthday greeting"
          @click="$emit('open')"
        >
          <svg
            viewBox="0 0 220 200"
            class="h-52 w-56 drop-shadow-[0_18px_28px_rgba(24,4,12,0.6)] transition-transform duration-300 group-active:scale-95"
          >
            <!-- Cake stand -->
            <ellipse cx="110" cy="182" rx="92" ry="12" fill="#f8bbd0" />
            <rect x="96" y="168" width="28" height="14" rx="4" fill="#f48fb1" />

            <!-- Bottom tier -->
            <rect x="34" y="116" width="152" height="54" rx="14" fill="#ff8fa3" />
            <!-- Bottom tier icing -->
            <path
              d="M34 128 Q50 142 66 128 Q82 142 98 128 Q114 142 130 128 Q146 142 162 128 Q174 138 186 128 L186 116 Q186 108 176 108 L44 108 Q34 108 34 116 Z"
              fill="#fff5f7"
            />
            <!-- Sprinkles / dots -->
            <circle cx="58" cy="152" r="4" fill="#ffe066" />
            <circle cx="84" cy="156" r="4" fill="#a5d8ff" />
            <circle cx="110" cy="152" r="4" fill="#ffe066" />
            <circle cx="136" cy="156" r="4" fill="#b2f2bb" />
            <circle cx="162" cy="152" r="4" fill="#ffe066" />

            <!-- Top tier -->
            <rect x="58" y="68" width="104" height="44" rx="12" fill="#ffccd5" />
            <!-- Top tier icing -->
            <path
              d="M58 80 Q72 92 86 80 Q100 92 114 80 Q128 92 142 80 Q152 88 162 80 L162 68 Q162 62 152 62 L68 62 Q58 62 58 68 Z"
              fill="#ffffff"
            />

            <!-- Candles (3x) -->
            <g>
              <rect x="78" y="36" width="8" height="26" rx="3" fill="#74c0fc" />
              <path
                class="flame"
                d="M82 18 C87 25 87 32 82 34 C77 32 77 25 82 18 Z"
                fill="#ffb703"
              />
              <rect x="106" y="30" width="8" height="32" rx="3" fill="#ffd43b" />
              <path
                class="flame flame-delay-1"
                d="M110 12 C115 19 115 26 110 28 C105 26 105 19 110 12 Z"
                fill="#fb8500"
              />
              <rect x="134" y="36" width="8" height="26" rx="3" fill="#b197fc" />
              <path
                class="flame flame-delay-2"
                d="M138 18 C143 25 143 32 138 34 C133 32 133 25 138 18 Z"
                fill="#ffb703"
              />
            </g>
          </svg>
        </button>

        <p
          class="hint-pulse mt-4 rounded-full bg-[#691840]/85 px-5 py-2 text-sm font-semibold text-[#ffccd5] shadow-[0_8px_24px_rgba(18,3,10,0.5)] ring-1 ring-[#ff8fab]/40 backdrop-blur-md"
        >
          Tap the cake to start ✨
        </p>
      </div>
    </section>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  visible: boolean
}>()

defineEmits<{
  open: []
}>()

const isReady = ref(false)

const floatingItems = [
  { id: 1, icon: '🍬', left: 10, top: 14, size: 24, duration: 5.2, delay: 0, dx: 18, dy: -22, rot: 28, anim: 'drift-a' },
  { id: 2, icon: '🎉', left: 82, top: 16, size: 26, duration: 6.1, delay: 0.6, dx: -24, dy: 16, rot: -32, anim: 'drift-b' },
  { id: 3, icon: '🧁', left: 16, top: 72, size: 28, duration: 6.7, delay: 1.1, dx: 22, dy: -14, rot: 20, anim: 'drift-c' },
  { id: 4, icon: '✨', left: 85, top: 68, size: 22, duration: 4.5, delay: 0.3, dx: -16, dy: -24, rot: 45, anim: 'drift-a' },
  { id: 5, icon: '🍭', left: 24, top: 32, size: 24, duration: 7.2, delay: 1.4, dx: -20, dy: 20, rot: -25, anim: 'drift-b' },
  { id: 6, icon: '🎊', left: 74, top: 38, size: 24, duration: 5.6, delay: 0.9, dx: 15, dy: -26, rot: 35, anim: 'drift-c' },
  { id: 7, icon: '🍩', left: 12, top: 50, size: 25, duration: 6.3, delay: 1.7, dx: 26, dy: 12, rot: -18, anim: 'drift-a' },
  { id: 8, icon: '💖', left: 88, top: 48, size: 22, duration: 5.0, delay: 0.4, dx: -18, dy: -18, rot: 22, anim: 'drift-b' },
  { id: 9, icon: '⭐', left: 48, top: 10, size: 20, duration: 4.7, delay: 0.8, dx: 14, dy: 22, rot: -40, anim: 'drift-c' },
  { id: 10, icon: '🍓', left: 52, top: 84, size: 22, duration: 5.9, delay: 1.2, dx: -22, dy: -16, rot: 26, anim: 'drift-a' }
]

onMounted(() => {
  requestAnimationFrame(() => {
    isReady.value = true
  })
})
</script>

<style scoped>
/* Dark berry background with a subtle dot pattern */
.dark-berry-bg {
  background-color: #3b0d24;
  background-image:
    radial-gradient(circle at 50% 42%, rgba(190, 24, 93, 0.38) 0%, transparent 62%),
    radial-gradient(rgba(251, 207, 232, 0.14) 1.25px, transparent 1.25px),
    radial-gradient(rgba(244, 114, 182, 0.1) 1.25px, transparent 1.25px);
  background-size:
    100% 100%,
    28px 28px,
    28px 28px;
  background-position:
    0 0,
    0 0,
    14px 14px;
}

/* Smooth entrance of the central cake block */
.cake-appear {
  opacity: 0;
  transform: translateY(24px) scale(0.92);
  transition:
    opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
}

.cake-appear.is-ready {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Gentle floating motion of the cake */
.cake-button {
  -webkit-tap-highlight-color: transparent;
  animation: cake-float 3.2s ease-in-out infinite;
}

@keyframes cake-float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

/* Candle flame flicker anchored at the base */
.flame {
  transform-box: fill-box;
  transform-origin: center bottom;
  animation: flicker 0.9s ease-in-out infinite alternate;
}

.flame-delay-1 {
  animation-delay: 0.25s;
}

.flame-delay-2 {
  animation-delay: 0.5s;
}

@keyframes flicker {
  0% {
    transform: scale(0.95) rotate(-2.5deg);
    opacity: 0.9;
  }
  100% {
    transform: scale(1.06) rotate(2.5deg);
    opacity: 1;
  }
}

/* Floating background sweets and confetti */
.floating-item {
  --dx: 16px;
  --dy: -18px;
  --rot: 20deg;
  will-change: transform;
}

.drift-a {
  animation-name: drift-curve-a;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.drift-b {
  animation-name: drift-curve-b;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.drift-c {
  animation-name: drift-curve-c;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes drift-curve-a {
  0% {
    transform: translate3d(0, 0, 0) rotate(calc(var(--rot) * -0.5));
  }
  50% {
    transform: translate3d(calc(var(--dx) * 0.6), calc(var(--dy) * 1.1), 0) rotate(calc(var(--rot) * 0.7));
  }
  100% {
    transform: translate3d(var(--dx), calc(var(--dy) * 0.35), 0) rotate(var(--rot));
  }
}

@keyframes drift-curve-b {
  0% {
    transform: translate3d(0, 0, 0) rotate(var(--rot));
  }
  50% {
    transform: translate3d(calc(var(--dx) * 1), calc(var(--dy) * -0.5), 0) rotate(0deg);
  }
  100% {
    transform: translate3d(calc(var(--dx) * 0.4), var(--dy), 0) rotate(calc(var(--rot) * -1));
  }
}

@keyframes drift-curve-c {
  0% {
    transform: translate3d(calc(var(--dx) * -0.4), calc(var(--dy) * 0.4), 0) rotate(calc(var(--rot) * -0.8));
  }
  50% {
    transform: translate3d(calc(var(--dx) * 0.85), var(--dy), 0) rotate(calc(var(--rot) * 0.4));
  }
  100% {
    transform: translate3d(calc(var(--dx) * 0.2), calc(var(--dy) * -0.7), 0) rotate(var(--rot));
  }
}

/* Subtle pulse on the prompt pill */
.hint-pulse {
  animation: hint-fade 2s ease-in-out infinite;
}

@keyframes hint-fade {
  0%, 100% {
    opacity: 0.9;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.03);
  }
}

/* Exit transition when starting the walk */
.cake-exit-leave-active {
  transition:
    opacity 0.65s ease,
    transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.cake-exit-leave-to {
  opacity: 0;
  transform: scale(1.15);
}
</style>
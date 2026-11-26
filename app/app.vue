<template>
  <main class="relative h-dvh w-full overflow-hidden bg-[#0b132b]">
    <CakeStage :visible="stage === 'cake'" @open="handleStart" />

    <!-- Временная заглушка следующего экрана для проверки перехода -->
    <div
      v-if="stage === 'park'"
      class="flex h-full w-full items-center justify-center text-white"
    >
      <p class="text-lg">Переход в ночной парк сработал ✨</p>
    </div>
  </main>
</template>

<script setup lang="ts">
const stage = ref<'cake' | 'park'>('cake')

function handleStart() {
  stage.value = 'park'
}
</script>
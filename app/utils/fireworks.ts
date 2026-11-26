// app/utils/fireworks.ts
import confetti from 'canvas-confetti'

export function launchFireworks() {
  if (!import.meta.client) return

  confetti({
    particleCount: 130,
    spread: 90,
    origin: { y: 0.55 }
  })
}
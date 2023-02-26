import { data } from '../data'

export function toggleMusicUI (index: number): HTMLDivElement {
  const toggleMusic = document.createElement('div')

  toggleMusic.style.backgroundImage = `url(${data[index].bgImage})`
  toggleMusic.className = 'toggleMusic'
  return toggleMusic
}

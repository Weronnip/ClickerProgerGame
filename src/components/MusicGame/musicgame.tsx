export function BgGameMusic() {
    const audio = new Audio('../../assets/music/quiet city.mp3')
    audio.play().catch((e) => console.error("Audio playback failed: ", e));
}
document.addEventListener("DOMContentLoaded", () => {
  const nameElement = document.getElementById("name")
  const yesBtn = document.getElementById("yesBtn")
  const noBtn = document.getElementById("noBtn")
  const container = document.querySelector(".container")
  const heartContainer = document.querySelector(".heart-container")

  // Reemplaza 'Nombre de tu novia' con el nombre real de tu novia
  const girlfriendName = "Svitlana"
  nameElement.textContent = girlfriendName

  function createHeart() {
    const heart = document.createElement("div")
    heart.classList.add("heart")
    heart.style.left = Math.random() * 100 + "vw"
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"
    heartContainer.appendChild(heart)

    setTimeout(() => {
      heart.remove()
    }, 5000)
  }

  setInterval(createHeart, 300)

  yesBtn.addEventListener("click", () => {
    container.innerHTML = `
            <h1>¡Enhorabuena ${girlfriendName} te has ganado un BESO</h1>
            <p class="message">Nuestro San Valentín será increíble. ¡Te amo mi amor!</p>
            <div id="celebration"></div>
        `

    const celebration = document.getElementById("celebration")
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div")
      confetti.classList.add("heart")
      confetti.style.left = Math.random() * 100 + "vw"
      confetti.style.animationDuration = Math.random() * 2 + 2 + "s"
      confetti.style.opacity = Math.random()
      celebration.appendChild(confetti)
    }
  })

  noBtn.addEventListener("mouseover", (e) => {
    const noBtnRect = noBtn.getBoundingClientRect()
    const maxX = window.innerWidth - noBtnRect.width
    const maxY = window.innerHeight - noBtnRect.height

    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)

    noBtn.style.position = "fixed"
    noBtn.style.left = `${randomX}px`
    noBtn.style.top = `${randomY}px`
  })
})


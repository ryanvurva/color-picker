const main = () => {
  const colorbox = document.querySelector('div.colorbox')
  let hueValue = 0
  let satValue = 50
  let lightValue = 50
  let alphaValue = 1
  const hueSlider = document.querySelector('input[name=hue]')
  const hueNumber = document.querySelector('div.huenumber')
  hueSlider.addEventListener('input', (event) => {
    hueValue = event.target.value
    hueNumber.textContent = hueValue
    updateColor()
  })

  const satSlider = document.querySelector('input[name=saturation]')
  const satNumber = document.querySelector('div.satnumber')
  satSlider.addEventListener('input', (event) => {
    satValue = event.target.value
    satNumber.textContent = satValue + '%'
    updateColor()
  })

  const litSlider = document.querySelector('input[name=lightness]')
  const litNumber = document.querySelector('div.litnumber')
  litSlider.addEventListener('input', (event) => {
    lightValue = event.target.value
    litNumber.textContent = lightValue + '%'
    updateColor()
  })

  const alphaSlider = document.querySelector('input[name=alpha]')
  const alphaNumber = document.querySelector('div.alphanumber')
  alphaSlider.addEventListener('input', (event) => {
    alphaValue = event.target.value
    alphaNumber.textContent = alphaValue
    updateColor()
  })

  const updateColor = () => {
    let color = `hsla(${hueValue}, ${satValue}%, ${lightValue}%, ${alphaValue})`
    colorbox.style.backgroundColor = color
  }
}

document.addEventListener('DOMContentLoaded', main)

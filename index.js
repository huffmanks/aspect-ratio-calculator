const calculator = document.querySelector('#calculator')
const originalWidth = document.querySelector('#original-width')
const originalHeight = document.querySelector('#original-height')
const newWidth = document.querySelector('#new-width')
const newHeight = document.querySelector('#new-height')

calculator.addEventListener('keyup', () => {
    console.log(newHeight.value)
    if (newHeight.value) {
        newWidth.value = (originalWidth.value / originalHeight.value) * newHeight.value
    }

    if (newWidth.value) {
        newHeight.value = (originalHeight.value / originalWidth.value) * newWidth.value
    }
})

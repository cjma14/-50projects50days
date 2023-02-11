const PROGRESS = document.querySelector('.stepper__progress-bar')
const BTN_PREV = document.getElementById('prev')
const BTN_NEXT = document.getElementById('next')
const STEPS    = document.querySelectorAll('.stepper__step')


let activeStepIndex = 1

function updateStep() {

    STEPS.forEach((step, index) => {

        if (index < activeStepIndex) 
            step.classList.add('active')
        else
            step.classList.remove('active')

    })

    setProgressBarValue()
   
    setDisableBtn()

}

function setProgressBarValue() {

    const ACTIVES  = document.querySelectorAll('.active')
    let porcentaje = (ACTIVES.length - 1) / (STEPS.length - 1) * 100

    PROGRESS.style.width = `${porcentaje}%`;

}

function setDisableBtn() {

    if (activeStepIndex === 1) {
        BTN_PREV.disabled = true
        return
    }

    if (activeStepIndex === STEPS.length) {
        BTN_NEXT.disabled = true
        return
    }

    BTN_PREV.disabled = false
    BTN_NEXT.disabled = false
}


BTN_NEXT.addEventListener('click', () => {
    activeStepIndex++

    if (activeStepIndex > STEPS.length) {
        activeStepIndex = STEPS.length
    }

    updateStep()
})

BTN_PREV.addEventListener('click', () => {
    activeStepIndex--

    if (activeStepIndex < 1) {
        activeStepIndex = 1
    }

    updateStep()
})

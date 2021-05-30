let list = [
    "Дулеба",
    "Хилько",
    "Баранов",
    "Гайдук",
    "Ушкалов",
    "Русак",
    "Поливода",
    "Савчик",
    "Гончарук",
    "Гостилович",
    "Пикуза",
    "Карпицкий",
    "Зубаревич",
    "Цеван",
    "Панько",
    "Кухарев",
    "Кротов",
    "Апанас",
    "Тоболич",
    "Бугаев",
    "Пискун",
    "Кротов",
    "Парфененко",
    "Буймистрова",
    "Карачун",
    "Семикин",
    "Андросов",

]

const autocompleteInput = document.getElementById("autocomplete")
const autoCompletedResults = document.querySelector(".autoCompletedResults")

function setShow(active) {
    if (active) {
        autoCompletedResults.classList.add('show');
    } else {
        autoCompletedResults.classList.remove('show');
    }
}

function renderResults(results) {

    if (!results.length) {
        setShow(false)
    }

    let content = results.map((item) => {
        return `<li>${item}</li>`
    })
        .join("")

    setShow(true)
    autoCompletedResults.innerHTML = `<ul>${content}</ul>`
}

autocompleteInput.addEventListener("keyup", () => {
    let results = [];
    let input = autocompleteInput.value

    if (input.length > 2) {
        results = list.filter((item) => {
            return item.toLowerCase().startsWith(input.toLowerCase(), 0)
        })
    } else {
        setShow(false)
    }
    renderResults(results)
});


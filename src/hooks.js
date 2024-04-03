import { useState } from "preact/hooks"
import { fetchApi, fetchApiMock } from "./utils"


const parse = (obj) => {
  const map = new Map();

  const processToken = (token) => {
    if (token.form && !token.token_list) {
      const form = token.form;
      const type = (token.analysis_list && token.analysis_list[0] && token.analysis_list[0].tag_info) || "undefined";

      if (map.has(form)) {
        const existingEntry = map.get(form);
        const typeIndex = existingEntry.findIndex(entry => entry.type === type);
        if (typeIndex !== -1) {
          existingEntry[typeIndex].count++;
        } else {
          existingEntry.push({ type, count: 1 });
        }
      } else {
        map.set(form, [{ type, count: 1 }]);
      }
    }

    if (token.token_list) {
      for (const nestedToken of token.token_list) {
        processToken(nestedToken);
      }
    }
  };

  processToken(obj);

  return map;
};

export const useLexemAnalys = ({ mock = false }) => {
  const [response, setResponse] = useState([])

  const clear = () => setResponse([])

  const analyse = (text) =>
    (mock ? fetchApiMock(text) : fetchApi(text)).then((data) => {
      const lexems = parse(data)

      console.log("Row data:", data)
      console.log("Parsed:", lexems)
      setResponse([...lexems])
    })

  console.log('response: ', response)

  return {
    response,
    clear,
    analyse,
  }
}

export const useLocalization = (initialLang) => {

  const [lang, setLang] = useState(initialLang)
  const localization = {
    en: {
      help: `
It is a text analysis tool. Here you can:
Enter Text: Enter or upload your text in the text field. You can also upload a TXT or RTF file (the maximum file size is 5 MB).
Analyze text: Click on the "Analyze" button to analyze the text. The program will count the number of unique words and display them with details such as the type of word and the number of repetitions.
Sort the results: You can sort the results alphabetically by clicking on the "Sort alphabetically" switch.
Change the language: Click on the language switch to switch between English and Russian interface languages.
Clear text: Click on the "Clear" button to clear the input field and the analysis results.
Get help: If you need help, hover over the question icon in the upper-left corner of the page.
`,
      output: {
        alphobetSorting: 'Alphabetical sorting',
        placeholderTextaria: 'Write your text here...'
      },
      buttons: {
        analyse: 'Analyse',
        clear: 'Clear',
        chooseFile: 'Click to choose file',
        toggleLang: 'Toggle lang'
      }
    },
    ru: {
      help: `
      Это инструмент для анализа текста. Здесь вы можете:
      Вводить текст: Введите или загрузите свой текст в текстовое поле. Вы также можете загрузить файл формата TXT или RTF (максимальный размер файла - 5 МБ).
      Анализировать текст: Нажмите на кнопку "Анализировать", чтобы проанализировать текст. Программа подсчитает количество уникальных слов и выведет их с подробностями, такими как тип слова и количество повторений.
      Сортировать результаты: Вы можете отсортировать результаты алфавитно, нажав на переключатель "Сортировка по алфавиту".
      Сменить язык: Нажмите на переключатель языка, чтобы переключиться между английским и русским языками интерфейса.
      Очистить текст: Нажмите на кнопку "Очистить", чтобы очистить поле ввода и результаты анализа.
      Получить помощь: Если вам нужна помощь, наведите курсор мыши на значок вопроса в левом верхнем углу страницы.
        `,
      output: {
        alphobetSorting: 'Алфовитный порядок',
        placeholderTextaria: 'Напишите свой текст здесь...'
      },
      buttons: {
        analyse: 'Анализировать',
        clear: 'Очистить',
        chooseFile: 'Нажмите, чтобы выбрать файл',
        toggleLang: 'Изменить язык'
      }
    }
  }


  console.log('useLoc: ')
  console.log('lang: ', lang)

  return {
    localization: localization[lang],
    changeLangTo: (lang) => setLang(lang),
    lang,
  }
}
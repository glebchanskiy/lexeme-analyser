import { render } from "preact"
import { useRef, useState } from "preact/hooks"
import { useLexemAnalys, useLocalization } from "./hooks"
import { QuestionIcon } from "./icons"
import "./styles/output.css"
import "./styles/tooltip.css"

const sortf = (sorted) => {
  return sorted ? (a, b) => a[0].localeCompare(b[0]) : (a, b) => 0
}

export function App() {
  const { analyse, clear, response } = useLexemAnalys({ mock: false })
  const [sorted, setSorted] = useState(false)

  const { localization, lang, changeLangTo } = useLocalization('en')

  return (
    <>
      <Helper localization={localization} />
      <ToggleLang localization={localization} lang={lang} changeLangTo={changeLangTo} />

      <div class="flex mt-10 ">
        <div class={`w-1/2 mx-auto`}>
          <DropBox analyse={analyse} clear={clear} localization={localization} />
        </div>
        <div
          class={`${response.length > 0 ? "visible" : "invisible !w-0 !opacity-0"
            } w-1/2 mx-5 h-full flex flex-col transition-all duration- opacity-100 200 gap-5`}
        >
          <div class="flex border border-gray-600 rounded-md flex-wrap gap-2 p-10 mx-2 ">
            {[...response]
              .filter((e) => !".()/,".includes(e[0]))
              .sort(sortf(sorted))
              .map((w, i) => (
                <button
                  key={i}
                  type="button"
                  data-tooltip={`x${w[1][0]["count"]}, ${w[1][0]["type"]}`}
                  data-tooltip-position="bottom"
                  class="align-middle	px-2 bg-gray-800 rounded"
                >
                  {w}
                </button>
              ))}
          </div>
          <div class="flex items-center border border-gray-600 rounded-md gap-2 mx-2 px-10 py-3">
            <label htmlFor="sorted">{localization.output.alphobetSorting}</label>
            <input
              type="checkbox"
              id="sorted"
              onClick={() => setSorted((prev) => !prev)}
              class="focus:outline-none focus:ring-0 focus:ring-offset-0 rounded"
            />
          </div>
        </div>
      </div>
    </>
  )
}

const ToggleLang = ({ localization, changeLangTo, lang }) => {

  const kek = () => {

    if (lang === 'ru') {
      changeLangTo('en')
    } else {
      changeLangTo('ru')
    }
  }
  return (
    <div class='absolute top-[26px] left-20'>
      <label class="inline-flex items-center cursor-pointer">
        <input onClick={kek} type="checkbox" value={lang} class="sr-only peer" />
        <div class="text-black relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span class="ms-3 text-sm font-medium text-white dark:text-gray-300">{localization.buttons.toggleLang}</span>
      </label>
    </div>

  )
}

const Helper = ({localization}) => {
  
  return (
    <div
      data-tooltip={localization.help}
      data-tooltip-position="right"
      class="absolute top-5 left-5"
    >
      <QuestionIcon class=" h-7 w-7" />
    </div>
  )
}

const DropBox = ({ analyse, clear, localization }) => {
  const textareaRef = useRef(null)
  const fileRef = useRef(null)

  const showFile = () => {
    // console.log("kek")
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      var textFile = /text.*/

      const file = fileRef.current.files[0]
      var reader = new FileReader()

      if (file.type.match(textFile)) {
        reader.onload = function (event) {
          textareaRef.current.innerHTML = event.target.result
        }
      } else {
        textareaRef.current.innerHTML = ""
      }
      reader.readAsText(file)
      // 	} else {
    } else {
      alert("Your browser is too old to support HTML5 File API")
    }
  }

  return (
    <div class="flex flex-col gap-2">
      <div class="flex flex-col items-center w-full">
        <textarea
          ref={textareaRef}
          id="message"
          rows={4}
          class="block p-2.5 w-8/12 text-sm text-gray-300 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none"
          placeholder={localization.output.placeholderTextaria}
        ></textarea>
      </div>
      <div class="flex flex-col items-center">
        <label for="file" class="block p-2 w-8/12 text-sm  border rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400 focus:border-blue-600 focus:border-2">{localization.buttons.chooseFile}</label>
        <input
          id='file'
          ref={fileRef}
          style={{ visibility: 'hidden' }}
          type="file"
          onInput={showFile}
        />
        <p class="mt-1 text-sm text-gray-500" id="file_input_help">
          TXT or RTF (MAX. 5mb)
        </p>
      </div>
      <div class="flex gap-2 mx-auto mt-3">
        <button
          onClick={() => analyse(textareaRef.current.value)}
          class="mx-auto border px-2 text-gray-200 border-gray-200 hover:border-gray-200 hover:text-gray-400 rounded cursor-pointer"
        >
          {localization.buttons.analyse}
        </button>
        <button
          onClick={() => clear()}
          class="mx-auto border px-2 text-gray-200 border-gray-200 hover:border-gray-200 hover:text-gray-400 rounded cursor-pointer"
        >
          {localization.buttons.clear}
        </button>
      </div>
    </div>
  )
}

render(<App />, document.getElementById("app"))

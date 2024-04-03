import { useState } from "preact/hooks"
import { fetchApi, fetchApiMock } from "./utils"


const parseGpt = (obj) => {
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



const parse = (obj) => {
  const map = new Map()

  if (!obj["token_list"]) {
    if (obj["form"]) {
      let type
      try {
        type = obj["analysis_list"][0]["tag_info"]
      } catch (err) {
        type = "undefined"
      }
      map.set(obj["form"], [type])

    }
  } else {
    for (const token of obj["token_list"]) {
      const nestedTokens = parse(token)

      for (const t of nestedTokens) {

        const form = t[0];
        const type = t[1]

        const old = map.get(form)
        if (old) {
          old.push(type)
          map.set(form, old)
        } else {
          map.set(form, old)
        }
      }
    }
  }
  return map
}

export const useLexemAnalys = ({ mock = false }) => {
  const [response, setResponse] = useState([])

  const clear = () => setResponse([])

  const analyse = (text) =>
    (mock ? fetchApiMock(text) : fetchApi(text)).then((data) => {
      const lexems = parseGpt(data)

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

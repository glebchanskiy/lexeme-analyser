import { mockResponse } from "./mock"

const createParams = (text) => {
  const formdata = new FormData()
  formdata.append("key", "e92b582be30d43a984937ec0044abe35")
  formdata.append("lang", "en")
  formdata.append("txt", text)
  formdata.append("st", "y")
  formdata.append("tt", "ecnr")
  formdata.append("verbose", "y")
  formdata.append("sm", "general")

  return formdata
}

export const fetchApiMock = (text) => {
  console.log("MOCK REQUEST")
  return new Promise((resolve) => resolve(mockResponse))
}

export const fetchApi = (text) =>
  fetch("https://api.meaningcloud.com/parser-2.0", {
    method: "POST",
    redirect: "follow",
    body: createParams(text),
  }).then((resonse) => resonse.json())

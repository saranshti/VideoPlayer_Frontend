import { useState } from "react"

import {
  generateVideoThumbnails,
  importFileandPreview
} from "./video-thumbnails-generator"

const useVideoThumbnailForm = props => {
  const { maxThumbnails, type } = props

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState("")

  const [inputUrl, setInputUrl] = useState("")
  const [inputFile, setInputFile] = useState(null)

  const [numberOfThumbnails, setNumberOfThumbnails] = useState(0)
  const [thumbnails, setThumbnails] = useState()
  const [loadAssync, setLoadAssync] = useState(false)
  const [selectedThumbnail, setSelectedThumbnail] = useState()

  const clearForm = () => {
    setNumberOfThumbnails(0)
    setSelectedThumbnail("")
    setInputFile(null)
    setInputUrl("")
    setIsError("")
  }

  const handleInputUrlChange = event => {
    clearForm()
    setInputUrl(event.target.value)
  }

  const handleInputFileChange = event => {
    const selectedFile = event.target?.files?.[0]
    if (selectedFile?.type.includes("video")) {
      clearForm()

      importFileandPreview(selectedFile).then(url => {
        setInputFile(selectedFile)
        setInputUrl(url)
      })
    }
  }

  const handleNumberOfThumbnails = e => {
    const newValue = parseInt(e.target.value)
    setNumberOfThumbnails(newValue > maxThumbnails ? maxThumbnails : newValue)
  }

  const handleLoadAssync = e => {
    setLoadAssync(e.target.checked)
  }

  const updateThumbnails = (url, index) => {
    setThumbnails(prev => {
      const newThumbnails = [...prev]
      newThumbnails[index] = url
      return newThumbnails
    })
  }

  const handleGenerateThumbnails = async () => {
    const input = type === "url" ? inputUrl : inputFile

    const callback = loadAssync ? updateThumbnails : undefined
    setThumbnails(loadAssync ? Array(numberOfThumbnails).fill("") : [""])

    setIsError("")
    setIsLoading(true)

    generateVideoThumbnails(input, numberOfThumbnails, type, callback)
      .then(res => {
        setThumbnails(res)
      })
      .catch(err => {
        setIsError(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return {
    handleGenerateThumbnails,
    handleLoadAssync,
    handleNumberOfThumbnails,
    inputUrl,
    isError,
    isLoading,
    loadAssync,
    numberOfThumbnails,
    selectedThumbnail,
    setInputUrl,
    setIsError,
    setSelectedThumbnail,
    thumbnails,
    handleInputUrlChange,
    handleInputFileChange
  }
}

export default useVideoThumbnailForm

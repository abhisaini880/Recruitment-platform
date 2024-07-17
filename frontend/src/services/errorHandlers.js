export const handleApiError = (error) => {
  if (error.response) {
    // Server responded with a status other than 200 range
    console.error("API Error:", error.response.status, error.response.data)
  } else if (error.request) {
    // Request was made but no response received
    console.error("Network Error:", error.message)
  } else {
    // Something else caused the error
    console.error("Error:", error.message)
  }
}

export const logError = (error) => {
  console.error("Logging error:", error)
}

export const showErrorNotification = (message) => {
  alert(`Error: ${message}`)
}

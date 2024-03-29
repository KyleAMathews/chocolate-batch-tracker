import { useEffect, useState } from "react"

function CloudinaryUploadWidget({ uwConfig, onUpload, children }) {
  const [loaded, setLoaded] = useState(!!window?.cloudinary)
  const [widget, setWidget] = useState(null)

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById(`uw`)
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement(`script`)
        script.setAttribute(`async`, ``)
        script.setAttribute(`id`, `uw`)
        script.src = `https://upload-widget.cloudinary.com/global/all.js`
        script.addEventListener(`load`, () => setLoaded(true))
        document.body.appendChild(script)
      }
    } else {
      setWidget(
        window.cloudinary.createUploadWidget(uwConfig, (error, result) => {
          if (!error && result && result.event === `success`) {
            onUpload(result.info)
          }
        })
      )
    }
  }, [loaded])

  return <div onClick={() => widget.open()}>{children}</div>
}

export default CloudinaryUploadWidget

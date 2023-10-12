const panoMultiRes360 = ({ dataset }) => {

  // console.table(dataset)
  
  fetch(`/multires/${dataset.panoSrc}/config.json`)
  .then(resp => resp.json())
  .then(config => {
    config.multiRes = { ...config.multiRes, 'basePath': `/multires/${dataset.panoSrc}` }
    config.autoLoad = dataset.autoLoad === 'true'
    if (dataset.yaw) config.yaw = +dataset.yaw
    if (dataset.pitch) config.pitch = +dataset.pitch
    if (dataset.title) config.title = dataset.title
    if (dataset.author) config.author = dataset.author
    if (dataset.preview) {
      config.preview = dataset.preview
      config.autoLoad = false
    }
    if (dataset.loadButtonLabel) config.strings = {'loadButtonLabel': dataset.loadButtonLabel }
  
    // console.table(config)

    pannellum.viewer(dataset.panoId, { ...config })
  })
}

const panosOnPage = document.querySelectorAll('.pano360__pano')

panosOnPage.forEach(p => panoMultiRes360(p))

import ImageOne from './components/ImageOne'
import ImageTwo from './components/ImageTwo'
import ImageThree from './components/ImageThree'

function App() {
  return (
    <>
      <h1>James Webb Space Telescope Gallery</h1>
      <div className='image-gallery'>
        <ImageOne />
        <ImageTwo />
        <ImageThree />
      </div>
    </>
  )
}

export default App

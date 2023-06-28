import './App.css';
import Slider from './Silder/Slider';

const config = [
  {
      title: "Image One",
      image: `https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800`
  },
  {
      title: `Image Two`,
      image: `https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800`
  },
  {
      title: `Image Three`,
      image: `https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800`
  },
  {
      title: `Image Four`,
      image: `https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800`
  }
]

function App() {
  return (
    <div className="App">
      <Slider config={config} />
    </div>
  );
}

export default App;

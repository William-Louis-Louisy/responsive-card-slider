import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <Slider
        content=""
        sliderId={1}
        lestStepValue={200}
        rightStepValue={200}
      />
    </div>
  );
}

export default App;

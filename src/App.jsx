import AppContainer from "./assets/elements/AppContainer";
import LeftElement from "./assets/elements/LeftElement";
import RightElement from "./assets/elements/RightElement";
import DataWeatherContainer from "./components/DataWeatherContainer";



function App() {
  return (
    <AppContainer>
      <LeftElement>
        <DataWeatherContainer/>
      </LeftElement>

      <RightElement>

      </RightElement>
    </AppContainer>
  );
}

export default App;

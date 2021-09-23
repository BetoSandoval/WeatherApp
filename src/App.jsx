import AppContainer from "./assets/elements/AppContainer";
import LeftElement from "./assets/elements/LeftElement";
import RightElement from "./assets/elements/RightElement";
import SearchButton from "./components/SearchButton";


function App() {
  return (
    <AppContainer>
      <LeftElement>
        <SearchButton/>
      </LeftElement>
      <RightElement></RightElement>
    </AppContainer>
  );
}

export default App;

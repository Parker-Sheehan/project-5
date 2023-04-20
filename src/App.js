import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectPotentials } from "./store/slices/potentialCountriesSlice";
import { useSelector } from 'react-redux'
import { selectDisplay } from "./store/slices/displayCountrySlice";

function App() {
    const potentials = useSelector(selectPotentials)
    let currentDisplay = useSelector(selectDisplay)

    return (
        <div className="App font-link">
            <Header />
            {currentDisplay ? <MainDisplay/> : <OptionDisplay/>}
            <OptionDisplay />
        </div>
    );
}

export default App;

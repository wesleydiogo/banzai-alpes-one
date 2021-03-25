import Container from './Components/Container.jsx';
import CardSolicitarContato from './Components/CardSolicitarContato';
import TopBar from './Components/TopBar.jsx';
import LogoAndContact from './Components/LogoAndContact';
import Banner01 from './Components/Banner01.jsx';
import Gallery01 from './Components/Gallery01.jsx';
import Gallery02 from './Components/Gallery02.jsx';
import Gallery03 from './Components/Gallery03.jsx';
import Contato from './Components/Contato.jsx';


function App() {
  return (
    <div className="App">
      {/* DEVIDO A IMPREVISTOS URGENTES NÃO TIVE MUITO TEMPO NESSAS 48 HORAS. DESCULPEM*/}

      <Container>
        <TopBar />

        <LogoAndContact />

        <Banner01 />

        <CardSolicitarContato />

        <Gallery01 />

        <Gallery02 />

        <Gallery03 />

        <Contato />
      </Container>
    </div>
  );
}

export default App;

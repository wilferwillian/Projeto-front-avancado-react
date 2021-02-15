import './App.css';
import { lazy,Suspense } from 'react';

//import Slogan from './code-splitting/Slogan';
//import Rodape from './code-splitting/Rodape';

const Imagem = lazy(() => import ('./code-splitting/Imagem'));
const RecodePro = lazy(() => import ('./code-splitting/RecodePro'));
const Rodape = lazy(() => import ('./code-splitting/Rodape'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback = { <p>Carregando... Imagem!</p> }>
          <Imagem />
        </Suspense>

        <Suspense fallback = { <p>Carregando... Perai!!</p> }>
          < RecodePro />
        </Suspense>

        <Suspense fallback = { <p>Carregando... já que roda!!</p> }>
          < Rodape />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
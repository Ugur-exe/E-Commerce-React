import './App.css'

import PageContainer from './container/PageContainer';
import Header from './components/Header';
import RouterConfig from './config/RouterConfig';
import Loading from './components/Loading';
import Basket from './components/Basket';
function App() {


  return (
    <div>
      <PageContainer>

        <Header />
        <Basket/>
        <RouterConfig />
        <Loading />

      </PageContainer>
    </div>
  )
}

export default App

import Background from './components/background';
import Content from './components/content';
import Logo from './components/logo';

const App = () => (
  <main className="flex flex-col items-center md:container md:mx-auto md:items-start xl:relative">  
    <Background />
    <Logo />
    <Content />        
  </main>  
);

export default App;

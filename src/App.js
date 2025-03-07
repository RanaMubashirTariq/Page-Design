import './App.css';
import Design from './components/Design'
import HeadPart from './components/HeadPart';
import JoinTitanSection from './components/JoinTitanSection';
import LastSection from './components/LastSection';
import SignUpSection from './components/SignUpSection';
import Step3Section from './components/Step3Section';
import Step4Section from './components/Step4Section';
import Step5Section from './components/Step5Section';

function App() {
  return (
    <div className='App'>

    {/* // <div className='bg-slate-100 h-screen'> */}
    
    {/* <Design/> */}

    <HeadPart/>
    <SignUpSection/>
    <Step3Section/>
    <JoinTitanSection/>
    <Step4Section/>
    <Step5Section/>
    <LastSection/>
    
</div>
  );
}

export default App;

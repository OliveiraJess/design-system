import './styles/global.css';
import { Logo } from './Logo';
import { Heading } from './components/Heading';
import { Text } from './components/Text';


function App() {

  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100' >

      <header className='flex flex-col items-center'>
        <Logo />
        <Heading size='lg' className='mt-4'>
          Ignite Lab
        </Heading>
        <Text size='lg' className='text-gray-400 mt-1 '>
          Faça login e comece a usar!
        </Text>
      </header>


    </div>
  )
};

export default App

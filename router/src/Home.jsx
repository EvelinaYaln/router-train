import { useMatch, useSearchParams } from 'react-router-dom';
export function Home() {
  const match = useMatch('/home');
  const [params, setParams] = useSearchParams();
  console.log(params.get('id'));
  const arr = ['111', 32];
  console.log(Object.fromEntries(params));
  return <div className='App'>Home</div>;
}

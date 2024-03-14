import Logo from '@/components/logo/logo';
import UserInformation from '@/components/userinformation/userinformation';

export default function Home() {
  return (
    <div className='flex flex-col gap-y-4 items-center'>
      <h1 className='text-4xl text-center'>
        ¡Bienvenidos!
      </h1>
      <UserInformation />
      <Logo height={88} width={300} />
    </div>
  )
}

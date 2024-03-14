import Avatar from "../avatar/avatar";

const UserInformation = ({ }) => {
  return (
    <div>
      <div className='flex flex-col sm:flex-row space-x-0'>
        <div className="flex flex-col justify-center bg-red-5000">
          <div className="font-bold text-3xl">
            Johann Holzmann
          </div>
          <div className="text-2xl">
            Estudiante de Ingeniería en Computación en la Universidad Nacional del Sur
          </div>
        </div>
        <div className="flex justify-center">
          <Avatar />
        </div>
      </div>
    </div >
  );
}

export default UserInformation;
import Linking from '../../components/linking';

const User = () => {
  return (
    <Linking href="/">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-gray-300 rounded-full" />

        <div className="text-sm break-all">
          Coming soon
        </div>
      </div>
    </Linking>
  );
};

export default User;

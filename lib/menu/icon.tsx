import Linking from '../../components/linking';

const Icon = () => {
  return (
    <Linking href="/">
      <img
        src="/icon.webp"
        alt="アイコン"
        className="w-full rounded-xl"
      />
    </Linking>
  );
};

export default Icon;

const Profile = () => {
  return (
    <section className="px-4 mt-5 mb-12">
      <div className="flex flex-row justify-center">
        <img
          src={`https://mc-heads.net/avatar/${'steve'}`}
          alt="プレイヤーの顔"
          className="w-32 rounded-xl"
        />
      </div>

      <div className="mt-3 text-xl font-medium">
        未連携
      </div>

      {/* <div className="mt-1 text-sky-700 font-medium bg-sky-200 rounded-lg">
        瞬間移動
      </div> */}
    </section>
  );
};

export default Profile;

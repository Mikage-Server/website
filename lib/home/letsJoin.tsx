import Linking from "../../components/linking";

const LetsJoin = () => {
  return (
    <section className="mt-32 w-[calc(100%+6rem)] h-64 text-yellow-700 text-2xl font-bold text-center tracking-wider bg-stripe-home flex flex-col justify-center items-center relative -left-[3rem] overflow-hidden">
      <p>
        不安があっても、鯖民が優しくあなたを迎えてくれます。
      </p>
      <p className="mt-2 mb-6">
        さあ、参加しましょう！
      </p>

      <Linking href="/newbie">
        <div className="w-[28rem] py-2 text-white bg-yellow-600 rounded-full shadow-lg">
          <h1 className="font-bold">
            今すぐ参加する！
          </h1>
          <span className="font-medium text-xl">
            1.18.2 - 1.19.3 | play.mikage.click
          </span>
        </div>
      </Linking>
    </section>
  );
};

export default LetsJoin;

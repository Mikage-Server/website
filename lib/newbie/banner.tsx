const Banner = () => {
  return (
    <section className="w-[calc(100%+6rem)] h-[40rem] bg-neutral-800 relative -top-[3rem] -left-[1rem] md:-left-[3rem] overflow-hidden">
      <img
        src="/newbie/banner.webp"
        alt="バナー"
        className="w-full object-cover blur-sm"
      />

      <div className="p-5 w-[30rem] bg-white shadow-xl rounded-xl absolute top-20 right-20">
        <h1 className="text-2xl text-center text-lime-700 font-bold tracking-wide">
          サーバー情報
        </h1>

        <div className="mt-2 text-center tracking-wide">
          Java版はもちろん、
          <strong className="px-1 text-lime-600">
            統合版(スマホ、Switchなど)のプレイヤーも
          </strong>一緒に参加することができます！
        </div>

        <div className="p-5 my-8 w-[calc(100%+2.5rem)] bg-stripe-newbie relative -left-5">
          <div>
            <h2 className="my-1 text-gray-600 font-medium">
              IPアドレス
            </h2>
            <div className="py-1 w-full text-xl text-white text-center bg-lime-900 rounded-lg tracking-wider">
              play.mikage.click
            </div>
          </div>

          <div className="mt-5">
            <h2 className="my-1 text-gray-600 font-medium">
              バージョン
            </h2>
            <div className="w-full flex flex-row">
              <div className="w-1/2">
                <span className="mr-3 px-2 py-1 font-bold text-orange-800 bg-orange-300 rounded-lg">
                  Java
                </span>
                1.18.2 - 1.19.3
              </div>
              <div className="w-1/2">
                <span className="mr-3 px-2 py-1 font-bold text-lime-800 bg-lime-300 rounded-lg">
                  統合版
                </span>
                最新版
              </div>
            </div>
          </div>
        </div>

        <div className="text-gray-500 text-center tracking-wide">
          超能力・経済要素がある
          <strong className="px-1">
            サバイバル生活サーバー
          </strong>
          です。
          <a
            href="#rule"
            className="px-2 py-1 text-white bg-lime-500 rounded-lg"
          >
            ルール
          </a>
          を守って楽しく生活しましょう！
        </div>
      </div>
    </section>
  );
};

export default Banner;

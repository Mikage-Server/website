const Footer = () => {
  return (
    <footer className="mt-16 w-full h-32 text-white bg-yellow-700 flex flex-col items-center justify-center">
      <div>
        <small className="text-base text-center">
          © 2022 御景サーバー
        </small>
      </div>

      <div className="mt-1">
        <a href={process.env.NEXT_PUBLIC_TWITTER_URL} className="px-2">
          Twitter
        </a>
        /
        <a href={process.env.NEXT_PUBLIC_JMS_VOTE_URL} className="px-2">
          Japan Minecraft Servers
        </a>
        /
        <a href={process.env.NEXT_PUBLIC_MONOCRAFT_VOTE_URL} className="px-2">
          monocraft
        </a>
      </div>
    </footer>
  );
};

export default Footer;

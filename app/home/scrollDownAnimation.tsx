import './scrollDownAnimation.css';

const ScrollDownAnimation = () => {
  return (
    <section className="wrapper absolute bottom-0 right-0 md:right-10 z-30">
      <div className="wrapper-inner">
        <div className="scroll-down">
          <span className="arrow-down">
          </span>
          <span className="scroll-title">
            Scroll down
          </span>
        </div>
      </div>
    </section>
  );
};

export default ScrollDownAnimation;

import Main from '../../components/main';
import Banner from '../../lib/newbie/banner';
import HowToConnect from '../../lib/newbie/howToConnect';
import Intro from '../../lib/newbie/intro';
import Rule from '../../lib/newbie/rule';
import WhatToDo from '../../lib/newbie/whatToDo';
import WhenTrouble from '../../lib/newbie/whenTrouble';

const Page = () => {
  return (
    <Main>
      <Banner />
      <Intro />
      <Rule />
      <HowToConnect />
      <WhatToDo />
      <WhenTrouble />
    </Main>
  );
};

export default Page;

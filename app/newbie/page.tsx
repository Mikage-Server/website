import Main from '../main';
import Banner from './banner';
import HowToConnect from './howToConnect';
import Intro from './intro';
import Rule from './rule';
import WhatToDo from './whatToDo';
import WhenTrouble from './whenTrouble';

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

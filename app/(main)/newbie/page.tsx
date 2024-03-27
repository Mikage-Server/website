import Main from '../main';
import Banner from './banner';
import HowToParticipate from './howToParticipate';
import Intro from './intro';
import Rule from './rule';
import WhatToDo from './whatToDo';
import WhenTrouble from './whenTrouble';

export default function Page() {
  return (
    <Main>
      <Banner />
      <Intro />
      <Rule />
      <HowToParticipate />
      <WhatToDo />
      <WhenTrouble />
    </Main>
  );
}

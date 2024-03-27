import Main from '../Main';
import Banner from './Banner';
import HowToParticipate from './HowToParticipate';
import Intro from './Intro';
import Rule from './Rule';
import WhatToDo from './WhatToDo';
import WhenTrouble from './WhenTrouble';

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

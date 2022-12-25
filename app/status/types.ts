interface Status {
  networks: Networks;
  players: PlayerNum;
  latency_ms: number;
  fetch_at: Date;
}

interface Networks {
  java: Network;
  bedrock: Network;
  vote: Network;
}

interface Network {
  name: string;
  available: boolean;
}

interface PlayerNum {
  online: number;
  max: number;
}

export interface OverallProps {
  okJE: boolean;
  okBE: boolean;
  okVote: boolean;
}

export interface ItemProps {
  name: string;
  available: boolean;
}

export default Status;

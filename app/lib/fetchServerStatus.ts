export interface Status {
  networks: Networks;
  players: PlayerNum;
  latency_ms: number;
  fetch_at: Date;
}

export interface Networks {
  java: Network;
  bedrock: Network;
  vote: Network;
}

export interface Network {
  name: string;
  available: boolean;
}

export interface PlayerNum {
  online: number;
  max: number;
}

export default async function fetchServerStatus(): Promise<Status> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/status`,
    { next: { revalidate: 60 } },
  );
  return (await res.json()) as Status;
}

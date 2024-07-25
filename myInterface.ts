interface User {
  readonly dbID: number;
  email: string;
  userID: number;
  googleID?: number;
  startTrail(): string;
  getCoupen(coupen: string): number;
}

interface User {
    githubToken: string
}

const S: User = {
  dbID: 3,
  email: "h@h.com",
  userID: 4,
  githubToken: "github",
  startTrail: () => {
    return "Hello there";
  },
  getCoupen: () => {
    return 9;
  },
};

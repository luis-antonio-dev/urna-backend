declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_CONNECTION: string;
    }
  }
}

export {};

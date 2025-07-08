type EnvFn = {
  (key: string, defaultValue?: string): string;
  int(key: string, defaultValue?: number): number;
  bool(key: string, defaultValue?: boolean): boolean;
  array(key: string, defaultValue?: string[], separator?: string): string[];
  json<T = unknown>(key: string, defaultValue?: T): T;
};

export default ({ env }: { env: EnvFn }) => ({
  // export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});

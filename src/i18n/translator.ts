export type Messages = Record<string, any>;

function getByPath(obj: any, path: string) {
  return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

export function createT(messages: Messages) {
  return (key: string, vars?: Record<string, string | number>) => {
    const raw = getByPath(messages, key);
    const str = typeof raw === "string" ? raw : key;

    if (!vars) return str;
    return Object.entries(vars).reduce(
      (acc, [k, v]) => acc.replaceAll(`{${k}}`, String(v)),
      str
    );
  };
}

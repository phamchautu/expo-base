import ucfirst from "./ucfirst";

export default function capitalize(str: string): string {
  if (!str) {
    return str;
  }

  return str.split(' ').map(s => ucfirst(s)).join(' ');
}
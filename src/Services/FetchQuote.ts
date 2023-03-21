export interface IQuote {
  _id: string;
  content: string;
  author: string;
}

export async function fetchQuote(): Promise<IQuote> {
  const quote = await fetch("https://api.quotable.io/random");
  return quote.json();
}

export async function getRandomNumber(question: number): Promise<number> {
    return Math.floor(Math.random() * question) + 1;
  }
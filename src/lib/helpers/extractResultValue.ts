import { Result } from "neverthrow";

export async function extractResultValue<Data, Error extends { message: string }>(result: Result<Data, Error>) {
  if (result.isErr()) {
    throw new Error(result.error.message);
  }

  return result.value;
}

import { Meta } from './client/interface/components/Meta';
import { SendFn } from './http/httpClient';
export type List<T> = {
  data: Array<T>;
  meta: Meta;
};
export const list = async <T>(
  listFn: (options: { limit: number; page: number }) => Promise<List<T>>,
  buildId: (item: T) => string
): Promise<Record<string, T>> => {
  const result: Array<T> = [];
  let page = 1;
  let nextRound = true;
  do {
    const response = await listFn({ limit: 20, page });
    result.push(...response.data);
    if (response.meta.total === result.length) {
      nextRound = false;
    } else {
      page++;
    }
  } while (nextRound);

  return result.reduce((prev, curr) => {
    prev[buildId(curr)] = curr;
    return prev;
  }, {} as Record<string, T>);
};

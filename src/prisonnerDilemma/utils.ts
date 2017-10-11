export namespace utils {
  export function doManyTimes(
    func: (...args1: Array<any>) => any,
    times: number,
    ...args2: Array<any>
  ): Array<any> {
    const responses: Array<any> = [];
    for (let i = 0; i < times; ++i) {
      responses.push(func(...args2));
    }
    return responses;
  }
}

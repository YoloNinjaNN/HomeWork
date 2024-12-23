export type Expect<T extends true> = T;

export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? true
  : false;

export function repeatComment(out: any) {
  console.log("*".repeat(30));
  console.log(out);
  console.log("*".repeat(30));
}

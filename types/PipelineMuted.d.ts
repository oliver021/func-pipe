import { PipeFunc } from "./Action";
export interface IPipelineMuted<TInitial, K> {
    pipe(pipe: PipeFunc<K>): IPipelineMuted<TInitial, K>;
    run(arg: TInitial): K;
}

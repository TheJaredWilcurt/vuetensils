/**
 * @param {Promise | (() => Promise)} [promise]
 * @param {object} [options = {}]
 * @param {any} [options.placeholder] The initial results value
 * @param {any} [options.default] The default value if the resolved value is `undefined`
 * @param {Function} [options.onChange]
 * @param {Function} [options.onPending]
 * @param {Function} [options.onResolve]
 * @param {Function} [options.onReject]
 * @return { typeof state & { watch: typeof watch} }
 */
export default function usePromise(promise?: Promise | (() => Promise), options?: {
    placeholder: any;
    default: any;
    onChange: Function;
    onPending: Function;
    onResolve: Function;
    onReject: Function;
}): {
    pending: boolean;
    results: any;
    error: any;
} & {
    watch: (promise: Promise | (() => Promise)) => Promise<void>;
};

type YnsFindStripeAccountResult = {
    stripeAccount: string | undefined;
    storeId: string | undefined;
    secretKey: string | undefined;
    publishableKey: string | undefined;
};
type YnsContextResult = {
    stripeAccount: string | undefined;
    storeId: string | undefined;
    secretKey: string | undefined;
    publishableKey: string | undefined;
};
declare global {
    /**
     * ⚠️ Warning: This might be `undefined` but TypeScript doesn't have a syntax to express that.
     * @see https://github.com/microsoft/TypeScript/issues/36057
     */
    function __ynsFindStripeAccount(): YnsFindStripeAccountResult | undefined | Promise<YnsFindStripeAccountResult | undefined>;
}
declare const getYnsContext: () => Promise<YnsContextResult>;

export { getYnsContext };

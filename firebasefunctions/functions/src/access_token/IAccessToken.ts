export interface IAccessToken {
    readonly access_token: string;
    readonly token_type: string;
    readonly expires_in: number;
    readonly scope: string;
}

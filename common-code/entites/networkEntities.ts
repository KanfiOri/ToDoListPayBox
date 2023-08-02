export interface NetworkResult {
    type: string;
}

export interface NetworkErrorResult extends NetworkResult{
    message: string
}

export const makeNetworkErrorResult = (message: string): NetworkErrorResult => {
    return {
        type: 'ok',
        message
    }
}

export interface NetworkUpdateResult extends NetworkResult {

}

export const makeNetworkUpdateResult = (): NetworkUpdateResult => {
    return {
        type: 'ok'
    }
}

export interface NetworkCreateResult extends NetworkResult {

}

export const makeNetworkCreateResult = (): NetworkCreateResult => {
    return {
        type: 'ok'
    }
}

export interface NetworkDeleteResult extends NetworkResult {

}

export const makeNetworkDeleteResult = (): NetworkDeleteResult => {
    return {
        type: 'ok'
    }
}
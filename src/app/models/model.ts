

export interface Posts {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface ResponseApi {
    message: string;
    area: number;
    status: boolean;
}

export interface Triangle {
    base: number;
    height: number;
}

export const HEROS = [
    "Dr Nice","necromancer","Bombasto","Celeritas","Magneta","RubberMan","Dynama","Dr IQ","Magma","Tornado"
]

export interface CitizenidResponse {
    success: boolean;
    error_cde: string;
    error_msg: string;
}
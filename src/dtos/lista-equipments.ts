import { DadosGerais } from "./DadosGearaisDTO"

export type DPSDTO = {
    "dados_gerais": DadosGerais;
    "status": string;
    "corrente_maxima": number;
    "classe": string;
    "category": string;
}

export type DisjuntorDTO = {
    "dados_gerais": DadosGerais;
    "status": string;
    "corrente_maxima": number;
    "category": string;
}

export type AntenaDTO = {
    "dados_gerais": DadosGerais;
    "status": string;
    "gain": string;
    "fendas": number;
    "tipo": string;
    "vr": string;
    "posicao_torre": number;
    "category": string;
}

export type ArCondionadoDTO = {
    "dados_gerais": DadosGerais,
    "status": string;
    "potencia": number;
    "tensao": number;
    "category": string;
}

export type CaboDTO = {
    "dados_gerais": DadosGerais;
    "status": string;
    "tipo": string;
    "tamanho": number;
    "category": string;
}

export type CombinadoDTO = {
    "dados_gerais": DadosGerais;
    "status": string;
    "category": string;
}

export type ExaustorDTO = {
    "dados_gerais": DadosGerais;
    "status": string;
    "category": string
}

export type NobreakDTO = {
    "dados_gerais": DadosGerais;
    "status": string;
    "tensao_entrada": number;
    "tensao_saida": number;
    "category": string;
}

export type ParabolicaDTO = {
    "dados_gerais": DadosGerais;
    "status": string;
    "diametro": number;
    "satelite": string;
    "receptor": string;
    "category": string;
}

export type ReceptorDTO = {
    "dados_gerais": DadosGerais;
    "status": string;
    "channel": number;
    "frequency": number;
    "symbol_rate": number;
    "transmissor": string;
    "parabolica": string;
    "category": string;
}

export type SwitchDTO = {
    "dados_gerais": DadosGerais;
    "status": string;
    "quantidade_portas": number;
    "category": string;
}

export type TelemetriaDTO = {
    "dados_gerais": DadosGerais;
    "status": string;
    "category": string;
}

export type TorreDTO = {
    "dados_gerais": DadosGerais;
    "status": string;
    "tipo_estrutura": string;
    "altura": number;
    "aterramento": string;
    "category": string;
}

export type TransmissorDTO = {
    "dados_gerais": DadosGerais;
    "status": string;
    "programmed_power": number;
    "canal_fisico": number;
    "canal_virtual": number;
    "receptor": string;
    "antena": string;
    "category": string;
}
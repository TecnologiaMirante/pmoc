import { DadosGerais } from "./DadosGearaisDTO"

export type DPSDTO = {
    "gerais":DadosGerais;
    "status": string;
    "corrente_maxima": number;
    "classe": string;
    "category": string;
    "tipoEquipamentoId":number;
}

export type DisjuntorDTO = {
    "gerais":DadosGerais;
    "status":string;
    "corrente_maxima":number;
    "category":string;
    "tipoEquipamentoId":number;
}

export type AntenaDTO = {
    "gerais":DadosGerais;
    "status": string;
    "gain": string;
    "fendas": number;
    "tipo": string;
    "vr": string;
    "posicao_torre": number;
    "category": string;
    "tipoEquipamentoId":number;
}

export type ArCondionadoDTO = {
    "gerais":DadosGerais;
    "status": string;
    "potencia": number;
    "tensao": number;
    "category": string;
    "tipoEquipamentoId":number;
}

export type CaboDTO = {
    "gerais":DadosGerais;
    "status": string;
    "tipo": string;
    "tamanho": number;
    "category": string;
    "tipoEquipamentoId":number;
}

export type CombinadoDTO = {
    "gerais":DadosGerais;
    "status": string;
    "category": string;
    "tipoEquipamentoId":number;
}

export type ExaustorDTO = {
    "gerais":DadosGerais;
    "status": string;
    "category": string;
    "tipoEquipamentoId":number;
}

export type NobreakDTO = {
    "gerais":DadosGerais;
    "status": string;
    "tensao_entrada": number;
    "tensao_saida": number;
    "category": string;
    "tipoEquipamentoId":number;
}

export type ParabolicaDTO = {
    "gerais":DadosGerais;
    "status": string;
    "diametro": number;
    "satelite": string;
    "receptor": string;
    "category": string;
    "tipoEquipamentoId":number;
}

export type ReceptorDTO = {
    "gerais":DadosGerais;
    "status": string;
    "channel": number;
    "frequency": number;
    "symbol_rate": number;
    "transmissor": string;
    "parabolica": string;
    "category": string;
    "tipoEquipamentoId":number;
}

export type SwitchDTO = {
    "gerais":DadosGerais;
    "status": string;
    "quantidade_portas": number;
    "category": string;
    "tipoEquipamentoId":number;
}

export type TelemetriaDTO = {
    "gerais":DadosGerais;
    "status": string;
    "category": string;
    "tipoEquipamentoId":number;
}

export type TorreDTO = {
    "gerais":DadosGerais;
    "status": string;
    "tipo_estrutura": string;
    "altura": number;
    "aterramento": string;
    "category": string;
    "tipoEquipamentoId":number;
}

export type TransmissorDTO = {
    "gerais":DadosGerais;
    "status": string;
    "programmed_power": number;
    "canal_fisico": number;
    "canal_virtual": number;
    "receptor": string;
    "antena": string;
    "category": string;
    "tipoEquipamentoId":number;
}
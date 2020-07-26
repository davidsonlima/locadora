// export enum disponibilidade {
//     indisponivel = 0,
//     disponivel = 1,
// }

export class Filme {
    constructor (
        public id: number,
        public codigo: string,
        public nome: string,
        public genero: string,
        public quantidade: number,
        public disponibilidade: boolean, //or string and enum
    ) {}
}

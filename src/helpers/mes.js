class mes {

    static JANEIRO = {
        nome: 'Janeiro',
        numero: 1,
    };
    static FEVEREIRO = {
        nome: 'Fevereiro',
        numero: 2,
    };
    static MARCO = {
        nome: 'Março',
        numero: 3,
    };
    static ABRIL = {
        nome: 'Abril',
        numero: 4,
    };
    static MAIO = {
        nome: 'Maio',
        numero: 5,
    };
    static JUNHO = {
        nome: 'Junho',
        numero: 6,
    };
    static JULHO = {
        nome: 'Julho',
        numero: 7,
    };
    static AGOSTO = {
        nome: 'Agosto',
        numero: 8,
    };
    static SETEMBRO = {
        nome: 'Setembro',
        numero: 9,
    };
    static OUTUBRO = {
        nome: 'Outubro',
        numero: 10,
    };
    static NOVEMBRO = {
        nome: 'Novembro',
        numero: 11,
    };
    static DEZEMBRO = {
        nome: 'Dezembro',
        numero: 12,
    };

    static getByNumero(numero) {
        for (let p in mes) {
            if (mes[p].numero == numero) return mes[p];
        }
    }

    static getAtual() {
        let date = new Date();
        let numero = date.getMonth();
        return mes.getByNumero(numero);
    }
}

export default mes;
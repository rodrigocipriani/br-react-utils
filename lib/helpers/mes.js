var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mes = function () {
    function mes() {
        _classCallCheck(this, mes);
    }

    _createClass(mes, null, [{
        key: 'getByNumero',
        value: function getByNumero(numero) {
            for (var p in mes) {
                if (mes[p].numero == numero) return mes[p];
            }
        }
    }, {
        key: 'getAtual',
        value: function getAtual() {
            var date = new Date();
            var numero = date.getMonth();
            return mes.getByNumero(numero);
        }
    }]);

    return mes;
}();

mes.JANEIRO = {
    nome: 'Janeiro',
    numero: 1
};
mes.FEVEREIRO = {
    nome: 'Fevereiro',
    numero: 2
};
mes.MARCO = {
    nome: 'Março',
    numero: 3
};
mes.ABRIL = {
    nome: 'Abril',
    numero: 4
};
mes.MAIO = {
    nome: 'Maio',
    numero: 5
};
mes.JUNHO = {
    nome: 'Junho',
    numero: 6
};
mes.JULHO = {
    nome: 'Julho',
    numero: 7
};
mes.AGOSTO = {
    nome: 'Agosto',
    numero: 8
};
mes.SETEMBRO = {
    nome: 'Setembro',
    numero: 9
};
mes.OUTUBRO = {
    nome: 'Outubro',
    numero: 10
};
mes.NOVEMBRO = {
    nome: 'Novembro',
    numero: 11
};
mes.DEZEMBRO = {
    nome: 'Dezembro',
    numero: 12
};


export default mes;
//# sourceMappingURL=mes.js.map
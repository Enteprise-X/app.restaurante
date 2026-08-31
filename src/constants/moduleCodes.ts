/** Códigos alinhados ao Core (seed) e ao claim JWT `modulos`. */
export const SIGLA = 'ORI';
export const MODULO_RAIZ = 'ORI0000000';
export const MODULO_CARDAPIO = 'ORI0000001';
export const MODULO_PEDIDOS = 'ORI0000002';
export const MODULO_MESAS = 'ORI0000003';

export const MODULOS = [
    { codigo: 'ORI0000000', nome: 'Início', path: '/inicio', descricao: 'Painel do restaurante' },
    { codigo: 'ORI0000001', nome: 'Cardápio', path: '/cardapio', descricao: 'Itens e categorias' },
    { codigo: 'ORI0000002', nome: 'Pedidos', path: '/pedidos', descricao: 'Pedidos e comandas' },
    { codigo: 'ORI0000003', nome: 'Mesas', path: '/mesas', descricao: 'Mesas e salão' },
] as const;

import React from 'react';
import WebViewSegura from '../components/WebViewSegura';

export function Ifpr() {
    return (
        <WebViewSegura
            uri="https://www.ifpr.edu.br"
            dominiosPermitidos={['ifpr.edu.br']}
            // JavaScript HABILITADO: o portal do IFPR usa scripts para
            // menus, carrosséis e busca; sem eles a página não funciona direito.
            permitirJavaScript={true}
        />
    );
}

export function G1() {
    return (
        <WebViewSegura
            uri="https://g1.globo.com"
            dominiosPermitidos={['globo.com']}
            // JavaScript HABILITADO: o g1 é um portal de notícias dinâmico;
            // o conteúdo das matérias, as imagens e os vídeos são carregados
            // via scripts, e sem eles a página fica praticamente vazia.
            permitirJavaScript={true}
        />
    );
}

export function Uol() {
    return (
        <WebViewSegura
            uri="https://www.uol.com.br"
            dominiosPermitidos={['uol.com.br']}
            // JavaScript HABILITADO: a home do UOL monta as manchetes, os
            // menus e o carregamento de imagens por scripts (lazy loading),
            // então bloquear o JS quebra a página.
            permitirJavaScript={true}
        />
    );
}
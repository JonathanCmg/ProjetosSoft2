import React from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { WebView } from 'react-native-webview';

// Extrai o host de uma URL http(s). Retorna null se a URL for suspeita.
// (Feito com regex porque o `new URL().hostname` do React Native
// nem sempre é confiável.)
function extrairHost(url) {
    const m = /^https?:\/\/([^\/?#]*)/i.exec(url);
    if (!m) return null;
    const autoridade = m[1];
    if (autoridade.includes('@')) return null; // bloqueia https://site-ok@site-ruim.com
    return autoridade.replace(/:\d+$/, '').toLowerCase(); // remove a porta
}

// LISTA DE PERMISSÕES: o host precisa ser IGUAL ao domínio ou ser um SUBDOMÍNIO dele.
// Não use includes()/startsWith(), pois "ifpr.edu.br.site-falso.com" passaria.
function dominioPermitido(url, dominiosPermitidos) {
    const host = extrairHost(url);
    if (!host) return false;
    return dominiosPermitidos.some(
        (d) => host === d || host.endsWith('.' + d)
    );
}

export default function WebViewSegura({
    uri,
    dominiosPermitidos,
    permitirJavaScript = false, // por padrão, JS bloqueado
}) {
    // BLOQUEIO DE REDIRECIONAMENTO EXTERNO: roda a cada tentativa de navegação.
    function aoSolicitarCarregamento(request) {
        const { url } = request;

        if (url === 'about:blank') return true;

        // Iframes (iOS) não são navegação do usuário; deixa carregar.
        if (request.isTopFrame === false) return true;

        // Só aceita http/https (bloqueia javascript:, intent:, file: etc.)
        if (!/^https?:/i.test(url)) return false;

        if (dominioPermitido(url, dominiosPermitidos)) return true;

        // Fora da lista: cancela na WebView e abre no navegador do aparelho.
        Linking.openURL(url).catch(() => { });
        return false;
    }

    return (
        <View style={styles.container}>
            <WebView
                style={styles.webview}
                source={{ uri }}
                // O originWhitelist só compara prefixo de texto e se comporta
                // diferente no iOS e no Android, então a lista de permissões
                // de verdade é a função aoSolicitarCarregamento acima.
                originWhitelist={['http://*', 'https://*']}
                onShouldStartLoadWithRequest={aoSolicitarCarregamento}
                // Links com target="_blank" abrem na mesma WebView e
                // passam pela verificação (sem isso, o Android pode ignorá-los).
                setSupportMultipleWindows={false}
                // RESTRIÇÃO DE JAVASCRIPT
                javaScriptEnabled={permitirJavaScript}
                startInLoadingState
                renderLoading={() => (
                    <View style={styles.loading}>
                        <ActivityIndicator size="large" />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    webview: { flex: 1 }, // ocupa toda a área útil
    loading: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
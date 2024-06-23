document.addEventListener('DOMContentLoaded', function() {
    const codigoForm = document.getElementById('codigoForm');
    codigoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        canjearCodigo();
    });
});

function canjearCodigo() {
    const codigoInput = document.getElementById('codigo');
    const codigo = codigoInput.value.trim().toUpperCase();

    if (!esCodigoValido(codigo)) {
        mostrarMensaje('El código ingresado no es válido. Inténtalo de nuevo.');
        return;
    }

    if (codigoYaUsado(codigo)) {
        mostrarMensaje('Este código ya ha sido utilizado.');
        return;
    }

    const premio = obtenerPremio();
    mostrarMensaje(`¡FELICIDADES! HAS OBTENIDO ${premio} EN TU PRÓXIMA COMPRA.`);

    // Generar código de canje
    const codigoCanje = generarCodigoCanje(premio);
    mostrarAnimacion();

    // Mostrar código de canje
    mostrarCodigoCanje(codigoCanje);

    // Marcar código como usado
    marcarCodigoUsado(codigo);
}

function esCodigoValido(codigo) {
    return /^PREM\d{3,6}$/i.test(codigo); // Acepta PREM seguido de 3 a 6 dígitos
}

function codigoYaUsado(codigo) {
    // Simulación de código usado (deberías implementar esto en tu backend)
    return false; // Por defecto, no hay código usado
}

function obtenerPremio() {
    const random = Math.random();
    if (random < 0.03) {
        return 'Regalo Sorpresa (ARRE100)';
    } else if (random < 0.28) {
        return '25% de descuento (AR25100)';
    } else if (random < 0.53) {
        return '10% de descuento (AR10100)';
    } else {
        return '5% de descuento (AR5100)';
    }
}

function generarCodigoCanje(premio) {
    switch (premio) {
        case 'Regalo Sorpresa (ARRE100)':
            return 'ARRE100';
        case '25% de descuento (AR25100)':
            return 'AR25100';
        case '10% de descuento (AR10100)':
            return 'AR10100';
        case '5% de descuento (AR5100)':
            return 'AR5100';
        default:
            return '';
    }
}

function mostrarMensaje(mensaje) {
    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.innerHTML = `<p>${mensaje}</p>`;
    mensajeDiv.innerHTML += `<p>TOMA CAPTURA PARA CANJEAR TU PREMIO</p>`;
    const fecha = new Date();
    const fechaCanje = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
    mensajeDiv.innerHTML += `<p>Promoción válida durante un mes (${fechaCanje})</p>`;
}

function mostrarAnimacion() {
    const animacionDiv = document.getElementById('animacion');
    animacionDiv.innerHTML = '<p>Animación avanzada con confeti y luces rápidas.</p>';
}

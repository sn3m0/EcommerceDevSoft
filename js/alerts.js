Swal.fire({
    title: 'Bienvenido!',
    text: 'Selecciona tu país',
    icon: 'question',
    confirmButtonText: 'Seleccionar',
    footer: '<span class="rojo">Selecciona tu país para ofrecerte los mejores precios</span>',
    padding: '1rem',
    backdrop: 'true',
    position: 'center',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    input: 'select',
    inputPlaceholder: 'Pais',
    inputvalue: '',
    inputOptions: {
        uruguay: 'Uruguay',
        argentina: 'Argentina',
    }
})
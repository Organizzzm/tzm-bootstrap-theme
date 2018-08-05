import '../scss/index.scss';

$('[data-toggle="tooltip"]').tooltip();
$('[data-toggle="popover"]').popover();


const modalBtn = document.createElement('div');
modalBtn.className = 'modal-btn';
modalBtn.setAttribute('data-toggle', "modal");
modalBtn.setAttribute('data-target', "#source-modal");

$('.tzm-component').append(modalBtn);

$('#source-modal').on('shown.bs.modal', function () {
    $('#source-modal').trigger('focus')
});
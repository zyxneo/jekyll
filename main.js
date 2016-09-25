$( document ).ready(function() {
  $('[data-toggle="popover"]').popover({
    container: 'body',
  })

  $('#colorModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var name = button.data('name') // Extract info from data-* attributesvar modal = $(this)
    var modal = $(this);
    modal.find('.modal-title').text(name);
    modal.find('.modal-hex_triplet').text(button.data('hex_triplet'));
    modal.find('.modal-red').text(button.data('red'));
    modal.find('.modal-green').text(button.data('green'));
    modal.find('.modal-blue').text(button.data('blue'));
    modal.find('.modal-hue').text(button.data('hue'));
    modal.find('.modal-hsl_saturation').text(button.data('hsl_saturation'));
    modal.find('.modal-hsl_light').text(button.data('hsl_light'));
    modal.find('.modal-hsv_saturation').text(button.data('hsv_saturation'));
    modal.find('.modal-hsv_value').text(button.data('hsv_value'));
    modal.find('.modal-sample').css('background-color',  "#" + button.data('hex_triplet'));
  })
});

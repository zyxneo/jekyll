---
title:  "Colors"
categories: documentation,references
---

<h3>Web color reference</h3>

<div class="palette">
  {% for row in site.data.colors %}
    <div class="palette__item"
        data-toggle="modal"
        data-target="#colorModal"
        data-name="{{ row.name }}"
        data-hex_triplet="{{ row.hex_triplet }}"
        data-red="{{ row.red }}"
        data-green="{{ row.green }}"
        data-blue="{{ row.blue }}"
        data-hue="{{ row.hue }}"
        data-hsl_saturation="{{ row.hsl_saturation }}"
        data-hsl_light="{{ row.hsl_light }}"
        data-hsv_saturation="{{ row.hsv_saturation }}"
        data-hsv_value="{{ row.hsv_value }}">
      <div class="palette__sample" style="background: #{{ row.hex_triplet }};"></div>
      <div class="palette__title">{{ row.name }}</div>
    </div>
  {% endfor %}
</div>


<div class="modal fade" id="colorModal" tabindex="-1" role="dialog" aria-labelledby="colorModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title" id="colorModalLabel"></h4>
      </div>
      <div class="modal-body">
        <div class="modal-sample"></div>
        <dl class="row">
          <dt class="col-sm-3">hex_triplet:</dt>
          <dd class="col-sm-9 modal-hex_triplet"></dd>
          
          <dt class="col-sm-3">red:</dt>
          <dd class="col-sm-9 modal-red"></dd>
          
          <dt class="col-sm-3">green:</dt>
          <dd class="col-sm-9 modal-green"></dd>
          
          <dt class="col-sm-3">blue:</dt>
          <dd class="col-sm-9 modal-blue"></dd>
          
          <dt class="col-sm-3">hue:</dt>
          <dd class="col-sm-9 modal-hue"></dd>
          
          <dt class="col-sm-3">hsl_saturation:</dt>
          <dd class="col-sm-9 modal-hsl_saturation"></dd>
          
          <dt class="col-sm-3">hsl_light:</dt>
          <dd class="col-sm-9 modal-hsl_light"></dd>
          
          <dt class="col-sm-3">hsv_saturation:</dt>
          <dd class="col-sm-9 modal-hsv_saturation"></dd>
          
          <dt class="col-sm-3">hsv_value:</dt>
          <dd class="col-sm-9 modal-hsv_value"></dd>
        </dl>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>

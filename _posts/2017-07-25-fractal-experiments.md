---
layout: post
title:  "Fractal experiments"
date:   2017-07-25 18:28:00 +0200
categories: experiments example
---


I tried out [Kalles Fraktaler 2](http://www.chillheimer.de/kallesfraktaler/) and I was very impressed about the result. I made some snapshot, I hope I could collected some interesting ones.

The "images" itself are - lets say - invisible, those are only mathematical coordinates and some sort of mathematical "density" or "level" of the points, because of complex numbers if I understand it correctly... this "third coordinate" is assigned to a color palette in the program, so it turns visible and beautifully colorful.


<div class="d-flex justify-content-center mb-5">
  <div id="carouselFractals" class="carousel slide" data-ride="carousel" style="max-width:1000px">
    <div class="carousel-inner" role="listbox">
      {% for myimage in site.static_files %}
        {% if myimage.path contains 'img/fractals/test' %}
          <div class="carousel-item {% if myimage.path contains '286' %}active{% endif %}">
            <img class="d-block img-fluid" src="{{ site.baseurl }}{{ myimage.path }}" alt="fractal">
          </div>
        {% endif %}
      {% endfor %}
    </div>
    <a class="carousel-control-prev" href="#carouselFractals" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselFractals" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

<!--more-->

The way down into the details is theoretically infinite.
The shapes repeating continuously, but they are slightly different over and over.

<div class="row gallery mb-5">
  {% for myimage in site.static_files %}
    {% if myimage.path contains 'img/fractals/teal-purple' %}
      <div class="col-sm-6 col-md-4 col-lg-3 gallery__item"
        data-toggle="modal"
        data-target="#galleryModal"
        data-name="Fractal in 'Teal-purple' color theme"
        data-image="{{ site.baseurl }}{{ myimage.path }}">
        <img class="gallery__image" src="{{ site.baseurl }}{{ myimage.path }}" alt="fractal" />
      </div>
    {% endif %}
  {% endfor %}
</div>

Assigning the colors in different "steps" result to display different details of the same place.

<div class="d-flex justify-content-center mb-5">
  <div class="crf">
    {% for myimage in site.static_files %}
      {% if myimage.path contains 'img/fractals/steps/1' %}
        <img class="crf__image" src="{{ site.baseurl }}{{ myimage.path }}" alt="fractal" />
      {% endif %}
    {% endfor %}
  </div>
</div>

I tried out some color palettes meanwhile.

<div class="row gallery mb-5">
  {% for myimage in site.static_files %}
    {% if myimage.path contains 'img/fractals/groove' %}
      <div class="col-sm-6 col-md-4 col-lg-3 gallery__item"
        data-toggle="modal"
        data-target="#galleryModal"
        data-name="Fractal in 'Groove' color theme"
        data-image="{{ site.baseurl }}{{ myimage.path }}">
        <img class="gallery__image" src="{{ site.baseurl }}{{ myimage.path }}" alt="fractal" />
      </div>
    {% endif %}
  {% endfor %}
</div>

<div class="d-flex justify-content-center mb-5">
  <div class="crf">
    {% for myimage in site.static_files %}
      {% if myimage.path contains 'img/fractals/steps/3' %}
        <img class="crf__image" src="{{ site.baseurl }}{{ myimage.path }}" alt="fractal" />
      {% endif %}
    {% endfor %}
  </div>
</div>

The following palette was created based on this butterfly on the picture. Of course, many things in the nature looks clearly like the mathematical fractals, but in this case I don't care about them.

<div class="row gallery mb-5">
  <div class="col-md-4 col-lg-3 gallery__item">
    <img class="gallery__image" src="/assets/img/fractals/butterfly.jpg" alt="fractal" />
  </div>
  <div class="col-md-8 col-lg-9">
    <div class="row gallery">
      {% for myimage in site.static_files %}
        {% if myimage.path contains 'img/fractals/butterfly/' %}
          <div class="col-sm-6 col-md-4 col-lg-3 gallery__item"
            data-toggle="modal"
            data-target="#galleryModal"
            data-name="Fractal in 'Butterfly' color theme"
            data-image="{{ site.baseurl }}{{ myimage.path }}">
            <img class="gallery__image" src="{{ site.baseurl }}{{ myimage.path }}" alt="fractal" />
          </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>
</div>

The journey dow to this infinite word was more transcendent as technical. I realized the parallelism between the life and the repeating shapes of the fractals. Like the soul travels eternal, the shapes can be "zoomed" endless. The states repeating all the time, again and again, but each time a bit differently.

<div class="row gallery mb-5">
  {% for myimage in site.static_files %}
    {% if myimage.path contains 'img/fractals/aqua' %}
      <div class="col-sm-6 col-md-4 col-lg-3 gallery__item"
        data-toggle="modal"
        data-target="#galleryModal"
        data-name="Fractal in 'Aqua' color theme"
        data-image="{{ site.baseurl }}{{ myimage.path }}">
        <img class="gallery__image" src="{{ site.baseurl }}{{ myimage.path }}" alt="fractal" />
      </div>
    {% endif %}
  {% endfor %}
</div>


<div class="d-flex justify-content-center mb-5">
  <div class="crf">
    {% for myimage in site.static_files %}
      {% if myimage.path contains 'img/fractals/steps/4' %}
        <img class="crf__image" src="{{ site.baseurl }}{{ myimage.path }}" alt="fractal" />
      {% endif %}
    {% endfor %}
  </div>
</div>

The way how it looks or feels depends on the "color". The exact same state can look or feel very differently depending on the "setting", like our setting to the world can change our world, how we look it, or how we feel. This is like the third coordinate, the vertical on the planar.

<div class="row gallery mb-5">
  {% for myimage in site.static_files %}
    {% if myimage.path contains 'img/fractals/neon' %}
      <div class="col-sm-6 col-md-4 col-lg-3 gallery__item"
        data-toggle="modal"
        data-target="#galleryModal"
        data-name="Fractal in 'Neon' color theme"
        data-image="{{ site.baseurl }}{{ myimage.path }}">
        <img class="gallery__image" src="{{ site.baseurl }}{{ myimage.path }}" alt="fractal" />
      </div>
    {% endif %}
  {% endfor %}
</div>


<div class="d-flex justify-content-center mb-5">
  <div id="carouselFractalsCarpet" class="carousel slide" data-ride="carousel" style="max-width:1000px">
    <div class="carousel-inner" role="listbox">
      {% for myimage in site.static_files %}
        {% if myimage.path contains 'img/fractals/carpet' %}
          <div class="carousel-item {% if myimage.path contains '251' %}active{% endif %}">
            <img class="d-block img-fluid" src="{{ site.baseurl }}{{ myimage.path }}" alt="fractal">
          </div>
        {% endif %}
      {% endfor %}
    </div>
    <a class="carousel-control-prev" href="#carouselFractalsCarpet" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselFractalsCarpet" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>


<div class="row gallery mb-5">
  {% for myimage in site.static_files %}
    {% if myimage.path contains 'img/fractals/goldfish' %}
      <div class="col-sm-6 col-md-4 col-lg-3 gallery__item"
        data-toggle="modal"
        data-target="#galleryModal"
        data-name="Fractal in 'Goldfish' color theme"
        data-image="{{ site.baseurl }}{{ myimage.path }}">
        <img class="gallery__image" src="{{ site.baseurl }}{{ myimage.path }}" alt="fractal" />
      </div>
    {% endif %}
  {% endfor %}
</div>

<div class="d-flex justify-content-center mb-5">
  <div class="crf">
    {% for myimage in site.static_files %}
      {% if myimage.path contains 'img/fractals/steps/2' %}
        <img class="crf__image" src="{{ site.baseurl }}{{ myimage.path }}" alt="fractal" />
      {% endif %}
    {% endfor %}
  </div>
</div>

<div class="d-flex justify-content-center mb-5">
  <div class="crf">
    {% for myimage in site.static_files %}
      {% if myimage.path contains 'img/fractals/variations/eustach' %}
        <img class="crf__image" src="{{ site.baseurl }}{{ myimage.path }}" alt="fractal" />
      {% endif %}
    {% endfor %}
  </div>
</div>

<div class="d-flex justify-content-center mb-5">
  <div class="crf">
    {% for myimage in site.static_files %}
      {% if myimage.path contains 'img/fractals/variations/eyes1' %}
        <img class="crf__image" src="{{ site.baseurl }}{{ myimage.path }}" alt="fractal" />
      {% endif %}
    {% endfor %}
  </div>
</div>

<div class="d-flex justify-content-center mb-5">
  <div class="crf">
    {% for myimage in site.static_files %}
      {% if myimage.path contains 'img/fractals/variations/spiral' %}
        <img class="crf__image" src="{{ site.baseurl }}{{ myimage.path }}" alt="fractal" />
      {% endif %}
    {% endfor %}
  </div>
</div>

<div class="d-flex justify-content-center mb-5">
  <div class="crf">
    {% for myimage in site.static_files %}
      {% if myimage.path contains 'img/fractals/variations/star1' %}
        <img class="crf__image" src="{{ site.baseurl }}{{ myimage.path }}" alt="fractal" />
      {% endif %}
    {% endfor %}
  </div>
</div>

<div class="d-flex justify-content-center mb-5">
  <div class="crf">
    {% for myimage in site.static_files %}
      {% if myimage.path contains 'img/fractals/variations/diamond' %}
        <img class="crf__image" src="{{ site.baseurl }}{{ myimage.path }}" alt="fractal" />
      {% endif %}
    {% endfor %}
  </div>
</div>

<div class="modal fade" id="galleryModal" tabindex="-1" role="dialog" aria-labelledby="galleryModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="galleryModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <img class="modal-image" modal-image src="" alt="fractal" />
      </div>
      <div class="modal-footer">
        <a class="modal-link btn btn-primary" href="" target="_blank">
        Open in new tab</a>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


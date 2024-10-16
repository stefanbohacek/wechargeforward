---
layout: layout-main.njk
title: Home
eleventyNavigation:
  key: Home
  order: 1
---

<header class="text-center my-5 pb-5 border-bottom">
  <h1 class="text-body mb-1">“We charge forward”</h1>
  <p>Collected by <a class="link-secondary" href="https://stefanbohacek.online/@stefan">@stefan</a>
  <form class="fsb-prompt mx-auto">
    <div class="fsb-input-group mb-3">
      <span class="fsb-input-group-text">https://</span>
      <input required
        type="text"
        name="fediverse-domain"
        placeholder="mastodon.social"
        class="fsb-input fsb-domain"
        aria-label="Server domain">
      <button class="fsb-button"
        type="submit"><img src="https://fediverse-share-button.stefanbohacek.dev/fediverse-share-button/icons/mastodon.svg"
          class="fsb-icon"></span>Share</button>
    </div>
    <p class="fsb-support-note fsb-d-none">This server does not support sharing. Please visit <a
        class="fsb-support-note-link"
        target="_blank"
        href=""></a>.</p>
  </form>
  <link rel="stylesheet" href="https://fediverse-share-button.stefanbohacek.dev/fediverse-share-button/styles.min.css">
  <script src="https://fediverse-share-button.stefanbohacek.dev/fediverse-share-button/script.min.js" defer class="fsb-script"></script>
</header>


<div id="gallery" class="row pt-4 text-center">
  {% for image in data.gallery %}
  <div class="col-12 mb-5">
    <h2 id="{{ image.id }}">
      <a class="link-secondary" href="#{{ image.id }}">{{ image.title }}</a>
    </h2>
    <p class="fst-italic ">By {{image.authors}}</p>
    <!-- <p>{{ image.date }}</p> -->
    <a class="link-secondary" href="/assets/gallery/{{ image.image }}">
      <img class="my-5 mw-100" src="/assets/gallery/{{ image.image }}" alt="{{ image.alt }}" title="{{ image.title }}" >
    </a>
    {% if image.via %}
    <p class="fst-italic">Via {{image.via}}</p>
    {% endif %}
  </div>
  {% endfor %}
</div>

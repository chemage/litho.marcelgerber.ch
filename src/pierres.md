---
title: "Pierres"
permalink: /pierres/
layout: "layouts/page.liquid"
---

<div class="cards">
{%- for item in collections.pierres %}
  <article class="card">
    <a class="card__image-link" href="{{ item.url }}" tabindex="-1" aria-hidden="true">
      <img class="card__image" src="{{ item.data.image }}" alt="" loading="lazy">
    </a>
    <div class="card__body">
      <h3 class="card__title"><a href="{{ item.url }}">{{ item.data.title }}</a></h3>
      <p class="card__text">{{ item.data.excerpt }}</p>
    </div>
  </article>
{%- endfor %}
</div>

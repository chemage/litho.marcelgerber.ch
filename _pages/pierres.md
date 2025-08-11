---
title: "Pierres"
permalink: /pierres/
nav_order: 1
sidebar:
  nav: "sidebar"
  sticky: true
author_profile: false
---

<div class="cards">
{% for item in site.pierres %}
  <article class="card">
    <a href="{{ item.url }}">
      <h3 class="card-title">{{ item.title }}</h3>
      </a>
    <div class="card-content">
    <div class="card-text">{{ item.excerpt }}</div>
    </div>
    <a href="{{ item.url }}">
      <img class="card-image" src="{{ item.image }}" alt="{{ item.title }}">
    </a>
  </article>
{% endfor %}
</div>


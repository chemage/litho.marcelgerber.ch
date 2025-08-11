---
title: "Pierres"
permalink: /pierres/
nav_order: 1
sidebar:
  nav: "sidebar"
  sticky: true
author_profile: false
---

{% for pierre in site.pierres %}
  <h2><a href="{{ pierre.url }}">{{ pierre.title }}</a></h2>
  <p>{{ pierre.excerpt }}</p>
{% endfor %}


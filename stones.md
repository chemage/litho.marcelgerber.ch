---
path: ""
type: stones
layout: single
read_time: false
author_profile: false
share: false
comments: false
sidebar:
  nav: "stones"
title: "Index"
permalink: /stones/index/
excerpt: "Ma collection de pierres"
---

{% for stone in site.stones %}
  <h2><a href="{{ stone.url }}">{{ stone.title }}</a></h2>
  <p>{{ stone.excerpt }}</p>
{% endfor %}


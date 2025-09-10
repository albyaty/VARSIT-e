---
layout: page
title: Library
---
## Surgical Step-by-Step
<ul>
{% assign step = site.videos | where:"type","step-by-step" %}
{% for v in step %}<li><a href="{{ v.url }}">{{ v.title }}</a> — {{ v.duration }}</li>{% endfor %}
</ul>

## Surgical Movies
<ul>
{% assign movies = site.videos | where:"type","movie" %}
{% for v in movies %}<li><a href="{{ v.url }}">{{ v.title }}</a> — {{ v.duration }}</li>{% endfor %}
</ul>

## Webinars & Presentations
<ul>
{% assign web = site.videos | where:"type","webinar" %}
{% for v in web %}<li><a href="{{ v.url }}">{{ v.title }}</a> — {{ v.duration }}</li>{% endfor %}
</ul>

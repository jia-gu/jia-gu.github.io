---
layout: listing
title: "Papers"
permalink: /publications/
excerpt: "Papers"
---

<p class="listing-intro">You can also find my articles on <a href="{{ site.author.googlescholar }}">my Google Scholar profile</a>.</p>

{% assign publications = site.publications | sort: "year" | reverse %}
<div class="collection-list">
  {% for post in publications %}
    {% include publication-card.html post=post %}
  {% endfor %}
</div>

---
layout: default
title: Posts
permalink: /posts/
---

<div class="posts">

  <h1>Posts</h1>

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title | escape }}</a>
        </h2>
        <p>{{ post.excerpt }}</p>
      </li>
    {% endfor %}
  </ul>

</div>

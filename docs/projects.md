---
layout: doc
---

<script setup>
  import { data as projects } from "./projects/project.data";
  import { withBase } from 'vitepress';
</script>

# Projects

<ul v-if="projects.length > 0">
  <li v-for="project of projects">
    <a :href="withBase(project.url)">{{ project.frontmatter.title }}</a>
  </li>
</ul>
<p v-else>
  Nothing here yet!
</p>

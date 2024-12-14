---
layout: doc
---

<script setup>
  import { data as softwareProjects } from "./projects/software.data";
  import { data as hardwareProjects } from "./projects/hardware.data";
  import { data as coursework } from "./projects/coursework.data";
  import { withBase } from 'vitepress';
</script>

# Projects

## Software 

<ul v-if="softwareProjects.length > 0">
  <li v-for="project of softwareProjects">
    <a :href="withBase(project.url)">{{ project.frontmatter.title }}</a>
  </li>
</ul>
<p v-else>
  Nothing here yet!
</p>

## Hardware

<ul v-if="hardwareProjects.length > 0">
  <li v-for="project of hardwareProjects">
    <a :href="withBase(project.url)">{{ project.frontmatter.title }}</a>
  </li>
</ul>
<p v-else>
  Nothing here yet!
</p>

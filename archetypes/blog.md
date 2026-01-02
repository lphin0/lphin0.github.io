---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
summary: "A brief summary of this blog post for social media previews (150-160 characters recommended)"
type: "blog"
---

Write your blog post content here in markdown format.

## Images

To add images, use the following format:
```
![Alt text](/pictures/YYYY-MM-DD-number.avif)
```

Where:
- YYYY-MM-DD is the blog post date
- number is a sequential number (1, 2, 3, etc.)
- Place images in the `static/pictures/` directory
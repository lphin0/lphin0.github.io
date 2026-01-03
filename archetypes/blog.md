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

## YouTube Embeds

Simply paste a YouTube link and it will automatically embed:
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

Or use the short URL:
```
https://youtu.be/dQw4w9WgXcQ
```

To create a regular clickable link instead of embedding, use markdown link syntax:
```
[Watch this video](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
```

## X/Twitter Embeds

Simply paste a Twitter/X link and it will automatically embed:
```
https://twitter.com/username/status/1234567890
```

Or:
```
https://x.com/username/status/1234567890
```

To create a regular clickable link instead of embedding, use markdown link syntax:
```
[See this tweet](https://twitter.com/username/status/1234567890)
```

Note: All other links will render as regular clickable links.
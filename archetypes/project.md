---
title: "{{ replace .Name "-" " " | title }}"
description: "A brief description of this project"
image: ""  # Optional: path to cover image (e.g., "/images/project-cover.avif")
type: "projects"
weight: 1
---

Write your project details and content here in markdown format.

## Project Images

Use the gallery shortcode to display multiple images:
```
{{</* gallery */>}}
![Image 1 caption](/images/project-screen-1.avif)
![Image 2 caption](/images/project-screen-2.avif)
{{</* /gallery */>}}
```

For single images, use standard markdown:
```
![Alt text](/path/to/image.avif)
```

Note: Set 'weight' to control the display order on the homepage.
Lower numbers appear first (e.g., 1, 2, 3, 4).

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
# Image Gallery Usage Guide

This guide explains how to use the image gallery features in your Hugo blog posts.

## Single Image with Caption

Use the `img` shortcode to display a single image with an optional caption:

```markdown
{{< img src="/path/to/image.jpg" alt="Description" caption="This is the image caption" >}}
```

### Parameters:
- `src` (required): Path to the image file
- `alt` (optional): Alt text for accessibility (defaults to "Image")
- `caption` (optional): Caption text to display below the image

## Multiple Images on Same Line

Use the `gallery` shortcode to display multiple images side by side:

```markdown
{{< gallery >}}
    {{< img src="/path/to/image1.jpg" alt="Image 1" caption="First image description" >}}
    {{< img src="/path/to/image2.jpg" alt="Image 2" caption="Second image description" >}}
    {{< img src="/path/to/image3.jpg" alt="Image 3" caption="Third image description" >}}
{{< /gallery >}}
```

### Features:
- Images automatically wrap to the next line on smaller screens
- Images are centered and have consistent sizing
- Optional captions appear below each image
- Responsive design that adapts to mobile devices

## Example Usage

### Two images side by side:
```markdown
{{< gallery >}}
    {{< img src="/images/screenshot1.png" alt="Screenshot 1" caption="Before the update" >}}
    {{< img src="/images/screenshot2.png" alt="Screenshot 2" caption="After the update" >}}
{{< /gallery >}}
```

### Three images in a row:
```markdown
{{< gallery >}}
    {{< img src="/images/setup1.png" alt="Step 1" caption="Download the installer" >}}
    {{< img src="/images/setup2.png" alt="Step 2" caption="Run the installer" >}}
    {{< img src="/images/setup3.png" alt="Step 3" caption="Complete setup" >}}
{{< /gallery >}}
```

### Single image without caption:
```markdown
{{< img src="/images/diagram.png" alt="System diagram" >}}
```

## Styling

The gallery uses the following CSS classes:
- `.image-gallery`: Container for multiple images
- `.image-item`: Wrapper for each image and its caption
- `.image-caption`: Styled caption text below each image

Images are automatically sized to fit within the content area while maintaining their aspect ratio.
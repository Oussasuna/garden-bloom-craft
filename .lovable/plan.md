

## Make the Illustration Bigger (500x500px)

The image in `ValueProps.tsx` already has `style={{ width: '500px', height: '500px' }}` and `className="object-contain"` from the last edit. No code changes are needed — the current implementation already matches the request.

If the image still appears small visually, it may be due to the natural resolution of the source image (`ccc2bee9-1a0f-4558-a51c-568c6250f36f.png`). The container and styles are correctly set.

### Technical Details

Current code in `src/components/sections/ValueProps.tsx` (lines 12-18):
```tsx
<img
  alt="Cartoon-style illustration of diverse smiling faces"
  className="object-contain"
  style={{ width: '500px', height: '500px' }}
  src="/lovable-uploads/ccc2bee9-1a0f-4558-a51c-568c6250f36f.png"
/>
```

No changes required -- this already sets width to 500px, height to 500px, and object-fit to contain.


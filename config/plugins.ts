module.exports = ({ env }) => ({
  'color-picker': true,
  'duplicate-button': true,
  todo: true,
  'entity-notes': {
    enabled: true
  },
  'drag-drop-content-types': {
    enabled: true
  },
  localazy: {
    enabled: true
  },
  seo: {
    enabled: true
  },
  publisher: {
    enabled: true
  },
  'record-locking': {
    enabled: true
  },
  'strapi-google-translator': {
    enabled: false
  },
  ckeditor5: {
    enabled: true
  },
  'strapi-plugin-populate-deep': {
      config: {
        defaultDepth: 10, // Default is 5
      }
    },
  'transformer': {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    }
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET')
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {}
      }
    }
  }
})

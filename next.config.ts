import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentUpgrade: "security",
    agentFeedback: true,
    sri: {
      algorithm: 'sha256',
    },
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
        permanent: false,
      },
      {
        source: '/admin/',
        destination: '/admin/index.html',
        permanent: false,
      },
      {
        source: '/blog/cara-menjadi-tampan-ala-fitrah',
        destination: '/blog/pemetaan-proses-bisnis-untuk-sop',
        permanent: true,
      },
      {
        source: '/blog/first-post',
        destination: '/blog/manfaat-sop-operasional',
        permanent: true,
      },
    ];
  },
  async headers() {
    const isDevelopment = process.env.NODE_ENV !== 'production';
    const appContentSecurityPolicy = [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "form-action 'self'",
      `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ''}`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https:",
      "connect-src 'self'",
      ...(!isDevelopment ? ['upgrade-insecure-requests'] : []),
    ].join('; ');
    const adminContentSecurityPolicy = [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "form-action 'self' https://github.com https://*.netlify.com",
      "script-src 'self' 'unsafe-eval' https://identity.netlify.com https://unpkg.com",
      "style-src 'self' 'unsafe-inline' https://unpkg.com",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https:",
      "connect-src 'self' https://identity.netlify.com https://api.netlify.com https://*.netlify.com https://*.netlify.app https://api.github.com https://github.com https://unpkg.com",
      "frame-src 'self' https://*.netlify.com https://*.netlify.app https://github.com",
    ].join('; ');

    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: appContentSecurityPolicy,
          },
        ],
      },
      {
        source: '/admin/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: adminContentSecurityPolicy,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
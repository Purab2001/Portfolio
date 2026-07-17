// Lightweight inline SVG icon set replacing lucide-react + react-icons usage.
// Each returns an SVG string. Stroke-based icons use currentColor for theming.
window.Icons = (function () {
  const svg = (paths, opts = {}) => {
    const o = Object.assign({ size: 24, stroke: 2, fill: "none", cls: "" }, opts);
    const sw = o.fill === "none" ? `stroke="currentColor" stroke-width="${o.stroke}" stroke-linecap="round" stroke-linejoin="round"` : 'fill="currentColor"';
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${o.size}" height="${o.size}" viewBox="0 0 24 24" ${sw} class="${o.cls}" fill="${o.fill}">${paths}</svg>`;
  };

  return {
    Menu: (c) => svg('<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>', c),
    X: (c) => svg('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>', c),
    Sparkles: (c) => svg('<path d="M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9z"/><path d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9z"/>', c),
    Moon: (c) => svg('<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>', c),
    Sun: (c) => svg('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>', c),
    Code2: (c) => svg('<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>', c),
    Zap: (c) => svg('<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>', c),
    Briefcase: (c) => svg('<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>', c),
    User: (c) => svg('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>', c),
    Star: (c) => svg('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>', c),
    Code: (c) => svg('<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>', c),
    Database: (c) => svg('<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>', c),
    Wrench: (c) => svg('<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.7 2.7-2-2 2.7-2.7z"/>', c),
    Award: (c) => svg('<circle cx="12" cy="8" r="6"/><path d="M15.5 13.5L17 22l-5-3-5 3 1.5-8.5"/>', c),
    ArrowRight: (c) => svg('<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>', c),
    ExternalLink: (c) => svg('<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>', c),
    Github: (c) => svg('<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>', c),
    Eye: (c) => svg('<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>', c),
    Mail: (c) => svg('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/>', c),
    MapPin: (c) => svg('<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>', c),
    Phone: (c) => svg('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>', c),
    Send: (c) => svg('<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>', c),
    ArrowUp: (c) => svg('<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>', c),
    ArrowLeft: (c) => svg('<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>', c),
    AlertTriangle: (c) => svg('<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>', c),
    Target: (c) => svg('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>', c),
    GraduationCap: (c) => svg('<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>', c),
    Calendar: (c) => svg('<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>', c),
    Trophy: (c) => svg('<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M6 2h12v7a6 6 0 0 1-12 0V2zM9 21h6M12 15v6"/>', c),
  };
})();

// react-icons equivalents used in SkillIcon + social links
window.ReactIcons = {
  SiAxios: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#5A29E4" width="100%" height="100%" style="width:100%;height:100%"><path d="M3 3h18v18H3z" opacity="0"/><path fill="#5A29E4" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 3.5a6.5 6.5 0 0 1 5.3 10.2l-2.6-2.6A3 3 0 0 0 9.4 9.3l-2.6-2.6A6.5 6.5 0 0 1 12 5.5z"/></svg>',
  SiStripe: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#635BFF" width="100%" height="100%" style="width:100%;height:100%"><path fill="#635BFF" d="M13.5 8.3c0-.4.3-.6.8-.6 1.3 0 3 .5 4.3 1.3V5.4A11 11 0 0 0 14.3 4.6c-2.9 0-4.9 1.5-4.9 4 0 3.7 5 3.1 5 4.7 0 .5-.4.7-1 .7-1.2 0-2.9-.6-4.2-1.5v3.4c1.4.6 2.9.9 4.2.9 3 0 5-1.5 5-4 0-3.9-5.2-3.3-5.2-4.7z"/></svg>',
  SiDocker: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2496ED" width="100%" height="100%" style="width:100%;height:100%"><path fill="#2496ED" d="M22 9.5c-.5-.3-1.6-.6-2.9-.4-.2-1-.8-1.8-1.7-2.4l-.6-.4-.4.6c-.5.8-.7 2-.4 3-.1.3-.4.6-.9.9-3 1.3-7.2.9-9.5-.9-.5 0-1 .1-1.7.4-1.5.7-2.4 2-2.4 3.9 0 .2 0 .5.1.7-1.4.9-2.3 2.4-2.3 4.1 0 2.7 2.2 4.9 4.9 4.9h13.2c2.7 0 4.9-2.2 4.9-4.9 0-1.7-.9-3.3-2.3-4.1.1-.3.1-.5.1-.8 0-.7-.2-1.4-.6-2zM5 12.5h-1.6v1.6H5zm2 0H5.4v1.6H7zm2 0H7.4v1.6H9zm2 0H9.4v1.6h1.6zm2 0h-1.6v1.6H13zm2 0h-1.6v1.6h1.6zm-9 2.7H4.4V17H6zm2 0H6.4V17H8zm2 0H8.4V17h1.6zm2 0h-1.6V17H12zm2 0h-1.6V17h1.6zm2-2.7h-1.6v1.6H16zm2 0h-1.6v1.6H18z"/></svg>',
  SiDaisyui: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" style="width:100%;height:100%"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>',
};

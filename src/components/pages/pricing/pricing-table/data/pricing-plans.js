import LINKS from 'constants/links';

const PLANS = {
  free: {
    title: 'Free',
    linkText: 'Get started',
    linkUrl: LINKS.getStarted.to,
    common: {
      'monthly-triggers': '30K',
      'additional-events': 'N/A',
      rps: '60RPS',
      workflows: true,
      providers: true,
      subscribers: true,
      members: true,
      topics: 'Unlimited',
    },
    notificationCenter: {
      feed: '90 days',
      'remove-branding': false,
      components: true,
    },
    features: {
      'subscriber-api': true,
      digest: true,
      translations: false,
      activity: '7 days',
      inbound: true,
      roles: false,
      'github-sso': true,
      'saml-sso': false,
      support: 'Chat',
      'support-sla': '5 business days',
      logs: false,
      gdpr: true,
      uptime: '99.9%',
      dataware: false,
      dpa: false,
      webhook: true,
    },
  },
  business: {
    title: 'Business',
    linkText: 'Get started',
    linkUrl: LINKS.getStarted.to,
    common: {
      'monthly-triggers': '50K',
      'additional-events': 'Scale to 50m+ events/month',
      rps: '600RPS',
      workflows: true,
      providers: true,
      subscribers: true,
      members: true,
      topics: 'Unlimited',
    },
    notificationCenter: {
      feed: '1 year',
      'remove-branding': true,
      components: true,
    },
    features: {
      'subscriber-api': true,
      digest: true,
      translations: true,
      activity: '30 days',
      inbound: true,
      roles: true,
      'github-sso': true,
      'saml-sso': false,
      support: 'Chat + Email',
      'support-sla': '2 business days',
      logs: false,
      gdpr: true,
      uptime: '99.9%',
      dataware: false,
      dpa: true,
      webhook: true,
    },
  },
  enterprise: {
    title: 'Enterprise',
    linkText: 'Get started',
    linkUrl: LINKS.getStarted.to,
    common: {
      'monthly-triggers': 'Custom',
      'additional-events': 'Unlimited',
      rps: 'Custom',
      workflows: true,
      providers: true,
      subscribers: true,
      members: true,
      topics: 'Unlimited',
    },
    notificationCenter: {
      feed: 'Custom',
      'remove-branding': true,
      components: true,
    },
    features: {
      'subscriber-api': true,
      digest: true,
      translations: true,
      activity: '30+ days',
      inbound: true,
      roles: true,
      'github-sso': true,
      'saml-sso': true,
      support: 'Enterprise - Dedicated Account Manager',
      'support-sla': '1 business day',
      logs: true,
      gdpr: true,
      uptime: 'Custom',
      dataware: true,
      dpa: true,
      webhook: true,
    },
  },
};

const LABELS = [
  {
    title: '',
    items: {
      'monthly-triggers': 'Included Monthly Triggers',
      'additional-events': 'Additional Events',
      rps: 'Trigger Rate Limit (Requests per Second)',
      workflows: 'Unlimited Workflows',
      providers: 'Unlimited Providers',
      subscribers: 'Unlimited Subscribers',
      members: 'Unlimited Team Members',
      topics: 'Topics',
    },
  },
  {
    title: 'Notification Center',
    items: {
      feed: 'Feed Retention',
      'remove-branding': 'Remove Branding',
      components: 'Notification Center & Headless Components',
    },
  },
  {
    title: 'Features',
    items: {
      'subscriber-api': 'Subscriber Preference API',
      digest: 'Digest Engine',
      translations: 'Translation Management',
      activity: 'Activity Feed Retention',
      inbound: 'Inbound Reply Email',
      roles: 'Role-Based Access Control',
      'github-sso': 'G-Suite and GitHub SSO',
      'saml-sso': 'SAML SSO & Azure AD SSO',
      support: 'Support',
      'support-sla': 'Initial Support SLA',
      logs: 'Audit Logs',
      gdpr: 'SOC II, ISO27001, GDPR',
      uptime: 'Uptime SLA',
      dataware: 'Dataware house connections',
      dpa: 'Data Processing Agreement (DPA)',
      webhook: 'Provider Webhook Integration',
    },
  },
];

export { PLANS, LABELS };

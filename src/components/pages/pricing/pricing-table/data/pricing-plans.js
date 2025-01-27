import LINKS from 'constants/links';

const PLANS = {
  // FREE TIER
  free: {
    title: 'Free',
    linkText: 'Get started',
    linkUrl: LINKS.getStartedPricingFree.to,
    common: {},
    platform: {
      events: '30k',
      additionalEvents: '-',
      maxRPS: '60/20/30 per second',
      channels: true,
      subscribers: 'Unlimited',
      guiWorkflow: 'Nov 2024',
      codeWorkflow: true,
      subscriberManagement: 'Q1 2025',
      multiTenant: false,
    },
    framework: {
      workflows: 'Unlimited',
      providers: 'Unlimited',
      feedRetention: '30 days',
      digest: true,
      stepControl: true,
      translations: true,
      blockEmailEditor: 'Nov 2024',
    },
    inbox: {
      inboxComponent: true,
      preferencesComponent: true,
      bellComponent: true,
      notificationsComponent: true,
      inboxContentComponent: true,
      branding: false,
    },
    account: {
      teamMembers: '3',
      rbac: false,
      standardSAML: true,
      customSAML: false,
      local: true,
      mfa: true,
    },
    compliance: {
      gdpr: true,
      soc2: false,
      hipaa: false,
      customSOC: false,
      dpa: 'Standard',
    },
  },
  // BUSINESS TIER
  business: {
    title: 'Business',
    linkText: 'Get Started',
    linkUrl: LINKS.getStartedPricingBus.to,
    common: {},
    platform: {
      events: '250k',
      additionalEvents: '$1.20 per 1,000',
      maxRPS: '600/200/300 per second',
      channels: true,
      subscribers: true,
      guiWorkflow: 'Nov 2024',
      codeWorkflow: true,
      subscriberManagement: 'Q1 2025',
      multiTenant: 'Q1 2025',
    },
    framework: {
      workflows: 'Unlimited',
      providers: 'Unlimited',
      feedRetention: '90 days',
      digest: true,
      stepControl: true,
      translations: true,
      blockEmailEditor: 'Nov 2024',
    },
    inbox: {
      inboxComponent: true,
      preferencesComponent: true,
      bellComponent: true,
      notificationsComponent: true,
      inboxContentComponent: true,
      branding: true,
    },
    account: {
      teamMembers: '10',
      rbac: 'Q2 2025',
      standardSAML: true,
      customSAML: false,
      local: true,
      mfa: true,
    },
    compliance: {
      gdpr: true,
      soc2: true,
      hipaa: false,
      customSOC: false,
      dpa: 'Standard',
    },
  },
  // ENTERPRISE TIER
  enterprise: {
    title: 'Enterprise',
    linkText: 'Contact Us',
    linkUrl: LINKS.getStartedPricingEnt.to,
    common: {},
    platform: {
      events: '5 million',
      additionalEvents: 'Custom',
      maxRPS: '6k/2k/3k per second',
      channels: true,
      subscribers: true,
      guiWorkflow: 'Nov 2024',
      codeWorkflow: true,
      subscriberManagement: 'Q1 2025',
      multiTenant: 'Q1 2025',
    },
    framework: {
      workflows: 'Unlimited',
      providers: 'Unlimited',
      feedRetention: 'Unlimited',
      digest: true,
      stepControl: true,
      translations: true,
      blockEmailEditor: 'Nov 2024',
    },
    inbox: {
      inboxComponent: true,
      preferencesComponent: true,
      bellComponent: true,
      notificationsComponent: true,
      inboxContentComponent: true,
      branding: true,
    },
    account: {
      teamMembers: 'Unlimited',
      rbac: 'Q2 2025',
      standardSAML: true,
      customSAML: true,
      local: true,
      mfa: true,
    },
    compliance: {
      gdpr: true,
      soc2: true,
      hipaa: true,
      customSOC: true,
      dpa: 'Custom',
    },
  },
};

const LABELS = [
  {
    title: '',
    items: {},
  },
  {
    title: 'Platform',
    items: {
      events: 'Included monthly events',
      additionalEvents: 'Additional events',
      maxRPS: 'Max API Requests (RPS) (Trigger events/Configuration/Global)',
      channels: 'Channels supported: email, in-app, SMS, chat, push, and custom',
      subscribers: 'Notification Subscribers',
      guiWorkflow: 'GUI-based workflows',
      codeWorkflow: 'Code-based workflows',
      subscriberManagement: 'Subscriber management',
      multiTenant: 'Multi-org/Multi-tenancy',
    },
  },
  {
    title: 'Novu Framework',
    items: {
      workflows: 'Maximum Workflows',
      providers: 'Provider integrations',
      feedRetention: 'Activity Feed retention',
      digest: 'Notification Digests',
      stepControl: 'Workflow Step Controls',
      translations: 'Translations',
      blockEmailEditor: 'Block-based email editor',
    },
  },
  {
    title: 'Inbox',
    items: {
      inboxComponent: 'Inbox component',
      preferencesComponent: 'User preferences component',
      bellComponent: 'Bell component',
      notificationsComponent: 'Notifications component',
      inboxContentComponent: 'Content component',
      branding: 'Remove Novu branding',
    },
  },
  {
    title: 'Administration and Security',
    items: {
      teamMembers: 'Maximum team members',
      rbac: 'Role-Based Access Control (RBAC)',
      standardSAML: 'Standard SAML authentication (Google, GitHub)',
      customSAML: 'Custom SAML SSO, OIDC enterprise providers',
      local: 'Built-In authentication',
      mfa: 'Multi-Factor Authentication (MFA)',
    },
  },
  {
    title: 'Compliance',
    items: {
      gdpr: 'GDPR',
      soc2: 'SOC 2 / ISO 27001',
      hipaa: 'HIPAA BAA',
      customSOC: 'Custom security reviews',
      dpa: 'Data Processing Agreements (DPA)',
    },
  },
];

export { PLANS, LABELS };

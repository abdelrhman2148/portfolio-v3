export const EMAIL = 'abdelrhmanfikri182017@gmail.com'; // TODO(owner): use a domain email?
export const LINKEDIN = 'https://www.linkedin.com/in/abdelrhman-fikri';

export const abstract =
  "I run CI/CD, AWS infrastructure and releases for 20+ live products at Genesis Creations. I've spent 4.5 years in IT and cloud, 2.5 of them in DevOps, and I hold the AWS Solutions Architect and AWS Security Specialty certifications.";

export const nav = [
  { href: '/#work', num: '2', label: 'Work' },
  { href: '/#experience', num: '3', label: 'Experience' },
  { href: '/#freelance', num: '4', label: 'Freelance' },
  { href: '/#contact', num: '6', label: 'Contact' },
];

export const contents = [
  { href: '#results', n: '§1', label: 'Results', d: '4 measures' },
  { href: '#work', n: '§2', label: 'Work, written as post-mortems', d: '4 cases · NDA' },
  { href: '#experience', n: '§3', label: 'Experience and certifications', d: '2021 to now' },
  { href: '#freelance', n: '§4', label: 'Freelance', d: 'scope + procedure' },
  { href: '#known-issues', n: '§5', label: 'Known issues', d: '5 questions' },
  { href: '#contact', n: '§6', label: 'Contact', d: 'email · LinkedIn' },
];

export const results = [
  { measure: 'Production deployments', value: '50–100 / month' },
  { measure: 'Uptime', value: '99.9%+' },
  { measure: 'Deployment frequency after moving releases to pipelines', value: '3×' },
  { measure: 'AWS spend after right-sizing and cleanup', value: '−20 to 40%' },
];

export const otherWork = [
  'Zero-downtime e-commerce migration to a rebuilt VPC and RDS',
  'iOS and Android release pipelines with Codemagic and Bitrise',
  'Air-gapped LLM analytics for a training simulator',
  'AI pull-request review tool, built from scratch',
  'HR and payroll system hardened to SRE standards',
  'Unity builds for WebGL, Windows and macOS',
];

export const roles = [
  { dates: 'Jan 2026 – now', title: 'Mid-Level DevOps Engineer', current: true, company: 'Genesis Creations S.A.E.', note: 'Promoted. CI/CD, cloud, security and releases for 20+ products.' },
  { dates: 'Dec 2025 – now', title: 'DevOps Engineer, part-time', current: true, company: 'AEMZ Technology', note: 'Web and mobile releases for 4–8 products.' },
  { dates: 'Feb – Jul 2026', title: 'System Administrator, part-time', company: 'Light System Technology', note: '30+ on-prem and cloud servers.' },
  { dates: 'Apr 2024 – Dec 2025', title: 'DevOps Engineer', company: 'Genesis Creations S.A.E.' },
  { dates: 'Sep 2023 – Mar 2024', title: 'IT Specialist', company: 'Genesis Creations S.A.E.' },
  { dates: 'Feb 2021 – Nov 2022', title: 'IT Manager', company: 'El-sorady Company' },
] as { dates: string; title: string; current?: boolean; company: string; note?: string }[];

export const certs = [
  { name: 'AWS Certified Security, Specialty', code: 'SCS-C02', key: true },
  { name: 'AWS Certified Solutions Architect, Associate', code: 'SAA-C03', key: true },
  { name: 'Cisco Certified DevNet Associate', code: 'DEVASC' },
  { name: 'Cisco Certified CyberOps Associate', code: 'CBROPS' },
  { name: 'CCNA, 3-part series (NTI)', code: 'CCNA' },
  { name: 'CompTIA Network+', code: 'N10-007' },
  { name: 'HashiCorp Terraform Associate', code: 'in progress' },
] as { name: string; code: string; key?: boolean }[];

export const tools =
  'AWS, Terraform, Ansible, Docker, Kubernetes, Helm, ArgoCD, GitHub Actions, Jenkins, Prometheus, Grafana, Amazon Bedrock, Python, Bash.';

export const services = [
  { t: 'CI/CD and releases', d: 'Pipelines that test, scan, build and deploy web apps, plus App Store and Google Play publishing with signing and versioning.' },
  { t: 'AWS setup and migration', d: 'EC2, ECS, S3 and CloudFront, RDS and Route 53, written in Terraform so you can rebuild it.' },
  { t: 'Monitoring, backups and cost', d: "CloudWatch or Grafana alerts, automated backups with RTO and RPO targets, and a review of what you're paying for." },
  { t: 'Security and AI infrastructure', d: 'IAM and MFA cleanup, scanning in CI, and Bedrock deployments with data-retention controls.' },
];

export const process = [
  { t: 'Review.', d: 'I look at your current setup, costs and risks, and we agree what to fix first.' },
  { t: 'Build.', d: 'Pipelines, infrastructure as code, and separate Dev, Staging and Prod environments.' },
  { t: 'Release.', d: 'Deploys with a rollback plan, including mobile store releases if you need them.' },
  { t: 'Hand over.', d: 'Alerts, runbooks and architecture docs, so your team can run it without me.' },
];

export const faq = [
  { q: 'Are you open to full-time roles?', a: "Yes, DevOps, cloud and SRE roles. I'm based in Cairo and open to remote work and relocation." },
  { q: 'What do you use day to day?', a: "AWS, Terraform, Ansible, Docker, ECS and Kubernetes, with GitHub Actions and Jenkins for CI/CD. I've also worked with Azure and Oracle Cloud." },
  { q: 'Can you take over an existing AWS account?', a: 'Yes. I start with costs, IAM and backups, then move the setup into Terraform in stages.' },
  { q: 'Do you handle mobile releases?', a: 'Yes. I build pipelines with GitHub Actions, Codemagic or Bitrise that sign and publish iOS and Android apps.' },
  { q: 'Why are there no client names?', a: "My client work is under NDA. I'm happy to walk through the architecture and results in an interview or a call." },
];

export const revisions = [
  { rev: '2026.10', note: 'Rebuilt as a runbook. Work rewritten as post-mortems.' },
  { rev: '1', note: 'First portfolio, abdelrhman-fikri.netlify.app' },
];

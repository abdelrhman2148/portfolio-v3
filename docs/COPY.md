# Site copy

All facts come from the owner's CV (`Abdelrhman_Fikri_Elrhmany_Resume_Full_2026.pdf`, in `public/cv.pdf`). Use this copy verbatim. Lines marked `TODO(owner)` need confirmation before launch.

## Voice guide

1. Write in the first person. Use past tense for things done and present tense for things owned. Every sentence has a subject ("I migrated", not "Migrated").
2. Every claim names a concrete thing: a tool, a system, a count or a result. If a sentence would fit any engineer's site, cut it.
3. Use only facts from the CV. Each number appears once per page.
4. Headings are plain nouns. No taglines, puns or rhetorical questions.
5. Banned: em-dash asides, "not X but Y", colon reveals, "passionate", "seamless", "cutting-edge", "calm", "magic", times of night, and "forever" or "never" unless literally true.
6. A CTA is a verb plus its object: "Download CV", "Copy email", "Read the post-mortem".
7. Keep sentences short, with one idea each. Mention the NDA plainly, at most once per page.

## Header

`AF-RB-001 · rev 2026.10` · Nav: §2 Work · §3 Experience · §4 Freelance · §6 Contact · toggle "Dark"/"Light"

## Title page

- Meta: Runbook · Revision 2026.10 · Cairo, Egypt
- H1: Abdelrhman Fikri
- Role: DevOps Engineer
- Abstract: I run CI/CD, AWS infrastructure and releases for 20+ live products at Genesis Creations. I've spent 4.5 years in IT and cloud, 2.5 of them in DevOps, and I hold the AWS Solutions Architect and AWS Security Specialty certifications.
- Status: **Open to full-time roles and freelance projects.** Based in Cairo, open to remote work and relocation.
- Route 1: label "If you're hiring", text "Experience, certifications and the full CV.", link "Go to §3 Experience"
- Route 2: label "If you have a project", text "What I take on and how a project runs.", link "Go to §4 Freelance"
- Plate I caption: Plate I · Cairo, 2026. Arabic name: عبدالرحمن فكري

## §0 Contents

§1 Results (4 measures) · §2 Work, written as post-mortems (4 cases · NDA) · §3 Experience and certifications (2021 to now) · §4 Freelance (scope + procedure) · §5 Known issues (5 questions) · §6 Contact (email · LinkedIn)

Sidenote: All client work is under NDA. The cases name the industry, the architecture and the measured result. They never name the client.

## §1 Results

Caption: Table 1. Measures across the products I run at Genesis Creations

| Measure | Value |
| --- | --- |
| Production deployments | 50–100 / month |
| Uptime | 99.9%+ |
| Deployment frequency after moving releases to pipelines | 3× |
| AWS spend after right-sizing and cleanup | −20 to 40% |

Sidenote "Scope": Measured across a 2–3 person DevOps team supporting 20+ client and internal products.

## §2 Work, written as post-mortems

Sidenotes: "How to read these": Each case follows the format I use for real incident reviews: summary, what I did, measured result. / "Diagrams": Drawn by me for this site. They show the architecture, not client systems.

### PM-01 · Logistics integration · Client [redacted]
**Self-healing redeploys for high-load incidents**
- Fig. 1: Alarm-driven redeploy loop. (Service → CloudWatch "high-load alarm" → SNS → Listener → Jenkins, with a dashed rubric loop back to Service: "redeploy, no manual step")
- Summary: The same high-load incident kept coming back, and each time someone had to restart the service by hand.
- What I did: I connected CloudWatch alarms through SNS to a listener that triggers a Jenkins redeploy. I later applied the same loop to a logistics client's integration.
- Result: **Mean time to recovery down 40%.** No manual restarts for that incident type.
- Stack: CloudWatch, SNS, Jenkins, Python

### PM-02 · Security incident · Account [redacted]
**Responding to a compromised AWS account**
- Fig. 2: Incident timeline, in order. (Detect: cost anomalies → Contain: rogue IAM, open ports → Remediate: SES and domain abuse → Harden: MFA, budgets)
- Summary: Unexpected cost anomalies showed that a company AWS account had been compromised.
- What I did: I rebuilt the timeline from the cost data, removed rogue IAM users, closed exposed ports, stopped SES and domain abuse, and cleared the domain's malware warning. Then I added MFA, least-privilege IAM and budget alarms.
- Result: **Account recovered, with guardrails in place to prevent a repeat.**
- Stack: IAM, SES, Route 53, AWS Budgets

### PM-03 · Regulated industry, document processing · Client [redacted]
**Claude on Amazon Bedrock for a regulated client**
- Fig. 3: Model access inside the retention boundary. (Documents → App API → Bedrock (Claude), inside a dashed "Zero Data Retention" boundary, with IAM least privilege and CloudWatch alarms below)
- Summary: A document-processing platform needed LLM features without breaking the client's data-retention and access rules.
- What I did: I deployed Claude models on Amazon Bedrock with Zero Data Retention enforced, least-privilege IAM, and CloudWatch alarms on cost and usage.
- Result: **Met the client's data-retention and access-control requirements.**
- Stack: Amazon Bedrock, IAM, CloudWatch

### PM-04 · 20+ client and internal products
**One release setup for 15+ repositories**
- Fig. 4: Shared release path for every product. (15+ repos → CI: test, scan [GitHub Actions, Jenkins] → Dev → Staging → Prod, with "PR-gated merge" and "Terraform, Ansible")
- Summary: Releases across many client and internal products involved manual steps, and every environment was set up by hand.
- What I did: I moved 15+ repositories onto GitHub Actions and Jenkins pipelines with PR-gated Dev, Staging and Prod environments. Terraform and Ansible now handle environment setup.
- Result: **70% less manual environment setup.** Releases no longer need manual steps.
- Stack: GitHub Actions, Jenkins, Terraform, Ansible, Docker

### Other work (plain list)
- Zero-downtime e-commerce migration to a rebuilt VPC and RDS
- iOS and Android release pipelines with Codemagic and Bitrise
- Air-gapped LLM analytics for a training simulator
- AI pull-request review tool, built from scratch
- HR and payroll system hardened to SRE standards
- Unity builds for WebGL, Windows and macOS

### Case-study page (`/work/[slug]`) structure
1. Title, ID line (sector, my role, NDA redaction)
2. Problem
3. Constraints
4. What I built: the figure (large) plus 3–5 steps
5. Result, stated once
6. What I'd do next (2 lines, optional, `TODO(owner)` per case)
7. Footer: the next post-mortem, "Hiring? Download CV", "Have a project? Copy email"

## §3 Experience and certifications

Caption: Table 2. Roles, newest first
- Jan 2026 – now · Mid-Level DevOps Engineer · current · Genesis Creations S.A.E. Promoted. CI/CD, cloud, security and releases for 20+ products.
- Dec 2025 – now · DevOps Engineer, part-time · current · AEMZ Technology. Web and mobile releases for 4–8 products.
- Feb – Jul 2026 · System Administrator, part-time · Light System Technology. 30+ on-prem and cloud servers.
- Apr 2024 – Dec 2025 · DevOps Engineer · Genesis Creations S.A.E.
- Sep 2023 – Mar 2024 · IT Specialist · Genesis Creations S.A.E.
- Feb 2021 – Nov 2022 · IT Manager · El-sorady Company

Certifications (key ones in bold):
- **AWS Certified Security, Specialty**: SCS-C02
- **AWS Certified Solutions Architect, Associate**: SAA-C03
- Cisco Certified DevNet Associate: DEVASC
- Cisco Certified CyberOps Associate: CBROPS
- CCNA, 3-part series (NTI): CCNA
- CompTIA Network+: N10-007
- HashiCorp Terraform Associate: in progress

Tools: AWS, Terraform, Ansible, Docker, Kubernetes, Helm, ArgoCD, GitHub Actions, Jenkins, Prometheus, Grafana, Amazon Bedrock, Python, Bash.
Buttons: Download CV (PDF) → `/cv.pdf` · LinkedIn profile
Sidenotes: Education: B.Sc. Communication Engineering, MTI University. / Recognition: Employee of the Month six times, and the Continuous Learning Award, at Genesis Creations. / Languages: Arabic (native), English (fluent).

## §4 Freelance

Intro: I take on DevOps work for startups and small teams alongside my full-time role.
- **CI/CD and releases**: Pipelines that test, scan, build and deploy web apps, plus App Store and Google Play publishing with signing and versioning.
- **AWS setup and migration**: EC2, ECS, S3 and CloudFront, RDS and Route 53, written in Terraform so you can rebuild it.
- **Monitoring, backups and cost**: CloudWatch or Grafana alerts, automated backups with RTO and RPO targets, and a review of what you're paying for.
- **Security and AI infrastructure**: IAM and MFA cleanup, scanning in CI, and Bedrock deployments with data-retention controls.

How a project runs:
1. **Review.** I look at your current setup, costs and risks, and we agree what to fix first.
2. **Build.** Pipelines, infrastructure as code, and separate Dev, Staging and Prod environments.
3. **Release.** Deploys with a rollback plan, including mobile store releases if you need them.
4. **Hand over.** Alerts, runbooks and architecture docs, so your team can run it without me.

Sidenote "Fit": Best for teams with live users and no dedicated DevOps engineer yet.

## §5 Known issues (FAQ)

- KI-01. Are you open to full-time roles? Yes, DevOps, cloud and SRE roles. I'm based in Cairo and open to remote work and relocation.
- KI-02. What do you use day to day? AWS, Terraform, Ansible, Docker, ECS and Kubernetes, with GitHub Actions and Jenkins for CI/CD. I've also worked with Azure and Oracle Cloud.
- KI-03. Can you take over an existing AWS account? Yes. I start with costs, IAM and backups, then move the setup into Terraform in stages.
- KI-04. Do you handle mobile releases? Yes. I build pipelines with GitHub Actions, Codemagic or Bitrise that sign and publish iOS and Android apps.
- KI-05. Why are there no client names? My client work is under NDA. I'm happy to walk through the architecture and results in an interview or a call.

## §6 Contact

- H2: Contact
- Text: For a role, send the job description. For a project, tell me what you run today and what's going wrong.
- Email (large mailto link): abdelrhmanfikri182017@gmail.com `TODO(owner): use a domain email?`
- Buttons: Copy email (status message "Email copied") · LinkedIn
- Plate II caption: Plate II · Cairo, 2026

## Footer

Revision history: `2026.10`: Rebuilt as a runbook. Work rewritten as post-mortems. / `1`: First portfolio, abdelrhman-fikri.netlify.app
Colophon: © 2026 Abdelrhman Fikri · DevOps Engineer · Cairo, Egypt · Built with Astro, deployed with GitHub Actions · `<commit sha>`

## 404 page

Heading: Page not found. Text: This page isn't in the runbook. Link: Go to the contents.

import type { CSSProperties } from 'react';
import { assetPath } from './ui';

/** Official educational identification marks. Provenance: research/technology-logos.md.
 * Generic containers, queues and databases do not automatically receive vendor marks.
 */
export const technologyAssets = {
 react: { file: 'react.svg', label: 'React' }, nodejs: { file: 'nodejs.svg', label: 'Node.js' },
 nginx: { file: 'nginx.svg', label: 'Nginx' }, docker: { file: 'docker.svg', label: 'Docker' },
 aws: { file: 'aws.svg', label: 'AWS' }, ecs: { file: 'ecs.svg', label: 'Amazon ECS' },
 fargate: { file: 'fargate.svg', label: 'AWS Fargate' }, ec2: { file: 'ec2.svg', label: 'Amazon EC2' },
 lambda: { file: 'lambda.svg', label: 'AWS Lambda' }, alb: { file: 'alb.svg', label: 'Elastic Load Balancing' },
 vpc: { file: 'vpc.svg', label: 'Amazon VPC' }, route53: { file: 'route53.svg', label: 'Route 53' },
 cloudfront: { file: 'cloudfront.svg', label: 'CloudFront' }, acm: { file: 'acm.svg', label: 'Certificate Manager' },
 rds: { file: 'rds.svg', label: 'Amazon RDS' }, s3: { file: 's3.svg', label: 'Amazon S3' },
 iam: { file: 'iam.svg', label: 'AWS IAM' }, secrets: { file: 'secrets.svg', label: 'Secrets Manager' },
 cloudwatch: { file: 'cloudwatch.svg', label: 'CloudWatch' }, sqs: { file: 'sqs.svg', label: 'Amazon SQS' },
 elasticache: { file: 'elasticache.svg', label: 'Amazon ElastiCache' },
} as const;
export type TechnologyKey = keyof typeof technologyAssets;
/** Original diagram IDs, independent of presentation page numbers. */
const diagramTechnologies: Record<number, readonly TechnologyKey[]> = {
 101: ['react'], 102: ['nodejs'], 103: ['react', 'nodejs'],
 105: ['react', 'nodejs'], 106: ['nginx', 'nodejs'], 107: ['nginx', 'nodejs'],
 21: ['aws'], 22: ['aws', 'ecs', 'fargate', 'rds', 's3'],
 23: ['ec2', 'ecs', 'fargate', 'lambda'], 24: ['alb'], 25: ['vpc'],
 26: ['route53', 'acm', 'cloudfront'], 27: ['rds', 's3'], 28: ['iam'],
 29: ['secrets', 'cloudwatch'], 32: ['docker'],
};
export function TechnologyLogoStrip({ diagramId, technologies, style }: {
 diagramId: number; technologies?: readonly TechnologyKey[]; style?: CSSProperties;
}) {
 const keys = technologies ?? diagramTechnologies[diagramId] ?? [];
 if (!keys.length) return null;
 return <div className="technology-logo-strip" aria-label="Technologies in this diagram" style={{
  display: 'inline-flex', alignItems: 'center', flexWrap: 'wrap', gap: 18,
  minHeight: 42, color: 'var(--jc-ink)', ...style,
 }}>
  {keys.map(key => { const asset = technologyAssets[key]; return <span key={key} style={{
   display: 'inline-flex', alignItems: 'center', gap: 9, background: 'var(--jc-canvas-pure)',
   border: '1px solid var(--jc-hairline)', borderRadius: 14, padding: '6px 12px',
   fontFamily: 'var(--jc-font-body)', fontSize: 18, lineHeight: 1.2, whiteSpace: 'nowrap',
  }}><img src={assetPath('technology-logos/' + asset.file)} alt="" width={34} height={30}
   style={{ display: 'block', objectFit: 'contain', flexShrink: 0 }} /><span>{asset.label}</span></span>; })}
 </div>;
}
/** Compound support labels keep their conceptual glyph rather than implying a single product. */
export function technologyForLabel(label: string, diagramId?: number): TechnologyKey | undefined {
 if (/IAM.*(?:Secrets|CloudWatch)/i.test(label)) return undefined;
 if (/nginx/i.test(label)) return 'nginx';
 if (/Node\.?js/i.test(label)) return 'nodejs';
 if (/^(?:UI\s*库[｜|]?\s*)?React\b/.test(label)) return 'react';
 if (/Docker/i.test(label) || (diagramId === 32 && /镜像|容器/.test(label))) return 'docker';
 if (/ECS/i.test(label)) return 'ecs';
 if (/Fargate/i.test(label)) return 'fargate';
 if (/\bEC2\b/.test(label)) return 'ec2';
 if (/\bLambda\b/.test(label)) return 'lambda';
 if (/\bALB\b|Elastic Load Balanc/i.test(label)) return 'alb';
 if (/\bVPC\b/.test(label)) return 'vpc';
 if (/Route\s*53/i.test(label)) return 'route53';
 if (/CloudFront/i.test(label)) return 'cloudfront';
 if (/\bACM\b|Certificate Manager/i.test(label)) return 'acm';
 if (/\bRDS\b/.test(label)) return 'rds';
 if (/\bS3\b/.test(label)) return 's3';
 if (/Secrets\s*Manager/i.test(label)) return 'secrets';
 if (/CloudWatch/i.test(label)) return 'cloudwatch';
 if (/\bIAM\b/.test(label)) return 'iam';
 if (/\bSQS\b/.test(label)) return 'sqs';
 if (/ElastiCache/i.test(label)) return 'elasticache';
 return undefined;
}
/** SVG child: use as a pictogram while keeping the existing node label. */
export function TechnologyMark({ label, x = 0, y = 0, size = 72, diagramId, technology }: {
 label: string; x?: number; y?: number; size?: number; diagramId?: number; technology?: TechnologyKey;
}) {
 const key = technology ?? technologyForLabel(label, diagramId);
 if (!key) return null;
 const asset = technologyAssets[key];
 return <image className="technology-mark" href={assetPath('technology-logos/' + asset.file)}
  x={x} y={y} width={size} height={size} preserveAspectRatio="xMidYMid meet" aria-label={asset.label} />;
}

import { motion } from 'framer-motion';
import { Slide, assetPath } from '../ui';

// 生意验证路径：适用于专业服务、传统生意、实体产品、现有公司与软件。
// 内容来源：COURSE_REDESIGN.md W1/W3/W4/W7/W8-W11；方法参考 The Founder's Playbook pp. 9, 16。
export default function S04b_ProductValidationPath() {
	return (
		<Slide bg="#fbf8f3">
			<motion.img
				src={assetPath('product-validation-path.png')}
				alt="Business Validation Path 生意验证路径"
				initial={{ opacity: 0, scale: 0.99 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.4 }}
				style={{
					position: 'absolute',
					top: '3%',
					left: '3%',
					width: '94%',
					height: '94%',
					objectFit: 'contain',
					display: 'block',
				}}
			/>

			{/* 图片自带的右上角 logo 由 SlideEngine 的统一品牌层覆盖，避免重复。 */}
			<div
				aria-hidden="true"
				style={{
					position: 'absolute',
					top: '3%',
					right: '3%',
					width: 240,
					height: 108,
					background: '#fbf8f3',
					zIndex: 2,
				}}
			/>

			<div
				style={{
					position: 'absolute',
					left: 86,
					bottom: 15,
					zIndex: 3,
					fontSize: 12,
					color: '#666',
					background: 'rgba(251,248,243,.9)',
					padding: '2px 6px',
				}}
			>
				方法参考：Claude / Anthropic, The Founder&apos;s Playbook, pp. 9, 16；中文整理：JR Academy
			</div>
		</Slide>
	);
}

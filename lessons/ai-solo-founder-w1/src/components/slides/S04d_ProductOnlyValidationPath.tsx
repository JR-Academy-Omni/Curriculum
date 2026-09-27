import { motion } from 'framer-motion';
import { Slide, assetPath } from '../ui';

// 产品型项目的专用验证路径。与上一页通用生意验证路径并存，不互相替代。
export default function S04d_ProductOnlyValidationPath() {
	return (
		<Slide bg="#fbf8f3">
			<motion.img
				src={assetPath('product-validation-path-product.png')}
				alt="Product Validation Path 产品验证路径：Idea、PoC、MVP、付费证据、PMF、Scale"
				initial={{ opacity: 0, scale: 0.99 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.4 }}
				style={{
					position: 'absolute',
					top: '3%',
					left: '4%',
					width: '92%',
					height: '94%',
					objectFit: 'contain',
					display: 'block',
				}}
			/>

			{/* 图片已有品牌标识；统一品牌层会覆盖在相同位置。 */}
			<div
				aria-hidden="true"
				style={{
					position: 'absolute',
					top: '3%',
					right: '4%',
					width: 250,
					height: 100,
					background: '#fbf8f3',
					zIndex: 2,
				}}
			/>

			<div
				style={{
					position: 'absolute',
					left: 76,
					bottom: 11,
					zIndex: 3,
					fontSize: 12,
					color: '#666',
					background: 'rgba(251,248,243,.92)',
					padding: '2px 6px',
				}}
			>
				产品型项目也从 Problem / Opportunity 起步；只有存在技术风险时才需要 PoC。W7 付费是目标，不是保证。
			</div>
		</Slide>
	);
}

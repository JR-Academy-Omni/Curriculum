// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P02g_ValidationPath.tsx
import { Slide, assetPath, colors } from '../courseUi';
import { motion } from 'framer-motion';
// Product Validation Path：产品验证路径
export default function L2P02g_ValidationPath() {
    return (<Slide bg={colors.warmBg}>
			<motion.img src={assetPath('product-validation-path.png')} alt="Product Validation Path 产品验证路径" initial={{ opacity: 0, scale: 0.985 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35 }} style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
        }}/>
		</Slide>);
}
